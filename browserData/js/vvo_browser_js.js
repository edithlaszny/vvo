// ============================================================================
//  VVO BROWSER
//  Data provided by external .js files loaded before this script:
//    ANNOTATIONS_RAW  initialized in ./data/vvo_data_init.js
//                     filled by ./data/vvo_morphology.js
//                     filled by ./data/vvo_phenology.js
//                     (production: + quality, disposition, role, information)
//    TREE_DATA        from ./data/vvo_tree.js
// ============================================================================


// ══════════════════════════════════════════════════
//  UNIVERSAL PARAGRAPH SEPARATOR
//  In data files, use || wherever a paragraph
//  break is needed. Applied ONCE at load time
//  to ALL text fields.
// ══════════════════════════════════════════════════

const PARAGRAPH_SEP = '||';

function parseAnnotations(rawData) {
  const parsed = {};
  for (const [className, ann] of Object.entries(rawData)) {
    parsed[className] = {};
    for (const [key, value] of Object.entries(ann)) {
      if (typeof value === 'string') {
        parsed[className][key] = value
          .split(PARAGRAPH_SEP)
          .map(p => p.trim())
          .filter(p => p)
          .join('<div class="smaller"><br />&nbsp;<br /></div>');
      } else {
        parsed[className][key] = value;
      }
    }
  }
  return parsed;
}

const ANNOTATIONS = parseAnnotations(ANNOTATIONS_RAW);


// ============================================================================
//  RENDERING ENGINE
// ============================================================================

let selectedClass = null;

// ── Build tree recursively ──
function buildTreeNode(className, depth) {
  const node = TREE_DATA[className];
  if (!node) return '';

  const hasChildren = node.children && node.children.length > 0;
  const indent = 8 + depth * 18;
  const isRoot = className === 'Vitis_vinifera';
  const bfoTag = node.bfo ? ` <span style="opacity:0.4;font-size:10px">${node.bfo}</span>` : '';

  let html = `
    <div class="tree-node" data-class="${className}">
      <div class="tree-node-row" style="padding-left:${indent}px" onclick="handleTreeClick('${className}', event)">
        <span class="tree-toggle ${hasChildren ? '' : 'leaf'}" onclick="toggleNode('${className}', event)">▶</span>
        <span class="tree-label">${className.replace(/_/g, ' ')}${bfoTag}</span>
      </div>
      ${hasChildren ? `<div class="tree-children${isRoot ? ' expanded' : ''}" id="children-${className}">
        ${node.children.map(c => buildTreeNode(c, depth + 1)).join('')}
      </div>` : ''}
    </div>`;
  return html;
}

function renderTree() {
  const container = document.getElementById('treeScroll');
  const categories = [
    'Grapevine_Morphological_Structure',
    'Grapevine_Phenological_Process',
    'Grapevine_Quality',
    'Grapevine_Disposition',
    'Grapevine_Role',
    'Grapevine_Information_Entity'
  ];

  // Vitis_vinifera: plain label (no toggle, no children in tree)
  const vvNode = TREE_DATA['Vitis_vinifera'];
  const vvBfo  = vvNode && vvNode.bfo
    ? ` <span style="opacity:0.4;font-size:10px">${vvNode.bfo}</span>` : '';
  const vvHtml = `
    <div class="tree-node" data-class="Vitis_vinifera">
      <div class="tree-node-row" style="padding-left:8px" onclick="handleTreeClick('Vitis_vinifera', event)">
        <span class="tree-toggle leaf"></span>
        <span class="tree-label">Vitis vinifera${vvBfo}</span>
      </div>
    </div>`;

  container.innerHTML = vvHtml
    + categories.map(c => buildTreeNode(c, 0)).join('');
  document.getElementById('treeCount').textContent =
    `${Object.keys(ANNOTATIONS).length} classes`;
}

// ── Toggle tree expand/collapse ──
function toggleNode(className, event, forceOpen) {
  if (event) event.stopPropagation();
  const childrenEl = document.getElementById(`children-${className}`);
  if (!childrenEl) return;

  const nodeEl = childrenEl.closest('.tree-node');
  const toggle = nodeEl.querySelector(':scope > .tree-node-row .tree-toggle');

  if (forceOpen || !childrenEl.classList.contains('expanded')) {
    childrenEl.classList.add('expanded');
    toggle.classList.add('open');
  } else {
    childrenEl.classList.remove('expanded');
    toggle.classList.remove('open');
  }
}

// ── Handle tree click ──
function handleTreeClick(className, event) {
  // Deselect previous
  document.querySelectorAll('.tree-node-row.selected').forEach(el => el.classList.remove('selected'));

  // Select new
  const nodeEl = document.querySelector(`[data-class="${className}"] > .tree-node-row`);
  nodeEl.classList.add('selected');

  // Expand if has children
  const node = TREE_DATA[className];
  if (node && node.children && node.children.length > 0) {
    toggleNode(className, null, true);
  }

  selectedClass = className;
  renderDetail(className);
}

// ── Get breadcrumb path ──
function getBreadcrumb(className) {
  const path = [];
  let current = className;
  while (current) {
    path.unshift(current);
    current = TREE_DATA[current] ? TREE_DATA[current].parent : null;
  }
  return path;
}

// ── Parse alternative terms ──
function parseAlternativeTerms(termString) {
  const parts = termString.split('|+');
  const enTerms = parts[0].split('|').map(t => t.trim()).filter(t => t);
  const deTerms = parts.length > 1 ? parts[1].split('|').map(t => t.trim()).filter(t => t) : [];
  return { en: enTerms, de: deTerms };
}

// ── Render external_mapping (SKOS) ──
//
// Sentinel:  "no_mapping_assigned"
//            "no_mapping_assigned ## <justification text>"
//   Both forms render as italic grey "no mapping assigned"; if a justification
//   is present it is appended after an em-dash, italic grey, smaller font.
//   The justification is intentionally only visible in the browser; the OWL
//   generator skips the sentinel entirely (no annotation emitted).
//
function renderExternalMappings(mappings) {
  if (!mappings || (Array.isArray(mappings) && mappings.length === 0)) return '';

  const entries = Array.isArray(mappings) ? mappings : [mappings];

  // Detect sentinel — accepts "no_mapping_assigned" optionally followed by " ## <justification>".
  // Word-boundary ensures we don't match an unrelated identifier that happens to start with the literal.
  const SENTINEL_RE = /^no_mapping_assigned\b/;
  const isSentinel = e => !!e && SENTINEL_RE.test(e.trim());
  const extractJustification = e => {
    const t = e.trim();
    const m = t.match(/^no_mapping_assigned\s*##\s*(.+)$/);
    return m ? m[1].trim() : null;
  };

  const valid = entries.filter(e => e && !isSentinel(e));
  const sentinels = entries.filter(e => e && isSentinel(e));
  const hasNoMapping = sentinels.length > 0;
  const justifications = sentinels
    .map(extractJustification)
    .filter(j => j !== null && j.length > 0);

  if (valid.length === 0 && !hasNoMapping) return '';

  const rows = valid.map(entry => {
    // Parse: "skos:xxxMatch # IRI ## comment | confidence"
    const hashIdx = entry.indexOf(' # ');
    if (hashIdx < 0) return '';
    const token = entry.substring(0, hashIdx).trim();
    const rest  = entry.substring(hashIdx + 3).trim();

    // Strip ## comment, extract confidence from it
    const commentIdx = rest.indexOf(' ## ');
    const iriRaw = (commentIdx >= 0) ? rest.substring(0, commentIdx).trim() : rest;
    let confidence = null;
    if (commentIdx >= 0) {
      const comment = rest.substring(commentIdx + 4).trim();
      const pipeIdx = comment.indexOf(' | ');
      if (pipeIdx >= 0) confidence = comment.substring(pipeIdx + 3).trim();
    }
    // Also handle pipe directly after IRI
    const directPipe = iriRaw.indexOf(' | ');
    const iri = directPipe >= 0 ? iriRaw.substring(0, directPipe).trim() : iriRaw;
    if (confidence === null && directPipe >= 0) confidence = iriRaw.substring(directPipe + 3).trim();

    const confHtml = confidence
      ? `<span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#1ca3af;margin-left:13px">confidence: ${confidence}</span>`
      : '';

    return `
      <div class="skos-mapping-row" style="margin-bottom:0px">
        <span class="skos-predicate" style="font-family:'JetBrains Mono',monospace;font-size:11px;color:#6b7280;margin-right:10px;display:inline-block;min-width:140px">${token}</span>
        <a class="detail-link" href="${iri}" target="_blank">${iri}</a>${confHtml}
      </div>`;
  }).filter(r => r).join('');

  const justHtml = justifications.length > 0
    ? `<span style="font-style:italic;color:#9ca3af;font-size:12px;margin-left:10px">— ${justifications.join('; ')}</span>`
    : '';

  const noMapRow = hasNoMapping && valid.length === 0
    ? `<div class="skos-mapping-row" style="margin-bottom:6px"><span class="skos-no-mapping" style="font-style:italic;color:#9ca3af;font-size:13px">no mapping assigned</span>${justHtml}</div>`
    : '';

  return `
    <div class="detail-section">
      <div class="detail-section-label">External Mappings (SKOS)</div>
      ${rows}${noMapRow}
    </div>`;
}

// ── Render curation status ──
function renderCurationStatus(iri) {
  if (!iri) return '—';
  const labels = {
    'http://purl.obolibrary.org/obo/IAO_0000122': 'IAO_0000122 — ready for release',
    'http://purl.obolibrary.org/obo/IAO_0000123': 'IAO_0000123 — metadata incomplete',
    'http://purl.obolibrary.org/obo/IAO_0000124': 'IAO_0000124 — uncurated',
    'http://purl.obolibrary.org/obo/IAO_0000125': 'IAO_0000125 — pending final vetting'
  };
  const label = labels[iri] || iri;
  return `<a class="detail-link" href="${iri}" target="_blank">${label}</a>`;
}

// ── Render detail panel ──
function renderDetail(className) {
  const panel = document.getElementById('detailPanel');
  const ann = ANNOTATIONS[className];
  const tree = TREE_DATA[className];

  if (!ann) {
    panel.innerHTML = `
      <div class="detail-empty">
        <div class="detail-empty-icon">📋</div>
        <div class="detail-empty-text">No annotation data available for ${className.replace(/_/g, ' ')}</div>
      </div>`;
    return;
  }

  const breadcrumb = getBreadcrumb(className);
  const terms = parseAlternativeTerms(ann.alternative_term);
  const bfo = tree && tree.bfo ? tree.bfo : null;

  panel.innerHTML = `
    <div class="detail-content">
      <!-- Breadcrumb -->
      <div class="detail-breadcrumb">
        ${breadcrumb.map((c, i) =>
          i < breadcrumb.length - 1
            ? `<span onclick="handleTreeClick('${c}', event)">${c.replace(/_/g, ' ')}</span> › `
            : ''
        ).join('')}
      </div>

      <!-- Title -->
      <h1 class="detail-title">${className.replace(/_/g, ' ')}</h1>
      ${bfo ? `<div class="detail-bfo-tag">${bfo}${tree.label ? ' — ' + tree.label : ''}</div>` : ''}

      <!-- Definition -->
      <div class="detail-section">
        <div class="detail-section-label">Definition</div>
        <div class="detail-section-text definition">${ann.definition}</div>
      </div>

      <!-- Alternative Terms -->
      <div class="detail-section">
        <div class="detail-section-label">Alternative Terms</div>
        ${terms.en.length ? `
          <div class="terms-group">
            <div class="terms-lang-label en">English</div>
            <div class="term-tags">${terms.en.map(t => `<span class="term-tag en">${t}</span>`).join('')}</div>
          </div>` : ''}
        ${terms.de.length ? `
          <div class="terms-group">
            <div class="terms-lang-label de">Deutsch</div>
            <div class="term-tags">${terms.de.map(t => `<span class="term-tag de">${t}</span>`).join('')}</div>
          </div>` : ''}
      </div>

      <!-- Example of Usage -->
      <div class="detail-section">
        <div class="detail-section-label">Example of Usage</div>
        <div class="detail-section-text">${ann.example_of_usage}</div>
      </div>

      <!-- Editor Note -->
      <div class="detail-section">
        <div class="detail-section-label">Editor Note</div>
        <div class="detail-section-text">${ann.editor_note}</div>
      </div>

      <!-- External Mappings (SKOS) -->
      ${renderExternalMappings(ann.external_mapping)}

      <!-- Curation Status -->
      <div class="detail-section">
        <div class="detail-section-label">Curation Status</div>
        <div class="detail-section-text">${renderCurationStatus(ann.has_curation_status)}</div>
      </div>

      <!-- Definition Source -->
      <div class="detail-section">
        <div class="detail-section-label">Definition Sources</div>
        <div class="source-entry">${ann.definition_source}</div>
      </div>
    </div>`;
}


// ============================================================================
//  SEARCH ENGINE
// ============================================================================

function buildSearchIndex() {
  const index = [];
  for (const [className, ann] of Object.entries(ANNOTATIONS)) {
    const terms = parseAlternativeTerms(ann.alternative_term);
    index.push({
      className,
      searchText: [
        className.replace(/_/g, ' ').toLowerCase(),
        ann.definition.toLowerCase(),
        ...terms.en.map(t => t.toLowerCase()),
        ...terms.de.map(t => t.toLowerCase()),
        ann.editor_note.toLowerCase()
      ].join(' ')
    });
  }
  return index;
}

const SEARCH_INDEX = buildSearchIndex();

function performSearch(query) {
  if (!query || query.length < 2) return [];
  const q = query.toLowerCase();
  const results = [];

  for (const entry of SEARCH_INDEX) {
    const pos = entry.searchText.indexOf(q);
    if (pos !== -1) {
      // Find matching context
      const start = Math.max(0, pos - 30);
      const end = Math.min(entry.searchText.length, pos + q.length + 50);
      let context = entry.searchText.substring(start, end);
      if (start > 0) context = '…' + context;
      if (end < entry.searchText.length) context += '…';

      results.push({
        className: entry.className,
        context,
        relevance: entry.className.replace(/_/g, ' ').toLowerCase().includes(q) ? 0 : 1
      });
    }
  }

  results.sort((a, b) => a.relevance - b.relevance);
  return results.slice(0, 10);
}

// ── Search UI ──
const searchInput = document.getElementById('searchInput');
const searchDropdown = document.getElementById('searchDropdown');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim();
  const results = performSearch(query);

  if (results.length === 0) {
    searchDropdown.classList.remove('visible');
    return;
  }

  searchDropdown.innerHTML = results.map(r => `
    <div class="search-result-item" onclick="selectSearchResult('${r.className}')">
      <div class="search-result-class">${r.className.replace(/_/g, ' ')}</div>
      <div class="search-result-match">${r.context}</div>
    </div>
  `).join('');
  searchDropdown.classList.add('visible');
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    searchDropdown.classList.remove('visible');
    searchInput.blur();
  }
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-box')) {
    searchDropdown.classList.remove('visible');
  }
});

function selectSearchResult(className) {
  searchDropdown.classList.remove('visible');
  searchInput.value = '';

  // Expand path to node
  const path = getBreadcrumb(className);
  path.forEach(c => {
    if (TREE_DATA[c] && TREE_DATA[c].children && TREE_DATA[c].children.length > 0) {
      toggleNode(c, null, true);
    }
  });

  handleTreeClick(className, null);

  // Scroll tree to node
  const nodeEl = document.querySelector(`[data-class="${className}"] > .tree-node-row`);
  if (nodeEl) nodeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
}


// ============================================================================
//  RESIZABLE PANELS
// ============================================================================

const resizeHandle = document.getElementById('resizeHandle');
const treePanel = document.getElementById('treePanel');
let isResizing = false;

resizeHandle.addEventListener('mousedown', (e) => {
  isResizing = true;
  resizeHandle.classList.add('active');
  document.body.style.cursor = 'col-resize';
  document.body.style.userSelect = 'none';
});

document.addEventListener('mousemove', (e) => {
  if (!isResizing) return;
  const newWidth = Math.max(220, Math.min(600, e.clientX));
  treePanel.style.width = newWidth + 'px';
});

document.addEventListener('mouseup', () => {
  isResizing = false;
  resizeHandle.classList.remove('active');
  document.body.style.cursor = '';
  document.body.style.userSelect = '';
});


// ============================================================================
//  KEYBOARD NAVIGATION
// ============================================================================

document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + F → focus search
  if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
    e.preventDefault();
    searchInput.focus();
  }
});

// ============================================================================
//  INIT
// ============================================================================
renderTree();
document.getElementById('loadStatus').textContent =
    Object.keys(ANNOTATIONS).length + ' classes loaded';

/*
  end of vvo_browser_js.js
 */