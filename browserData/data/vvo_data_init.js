/*
    TITLE:          vvo_data_init.js
    VERSION:        1-001
    AUTHOR(S):      Claude Opus 4.6 Extended  [Claude]
    SUPERVISED BY:  [HED]
    CREATION DATE:  14-FEB-2026

    CONTENT:        Initializes the ANNOTATIONS_RAW accumulator object.
                    Must be loaded BEFORE any category data files.
                    Each category file uses Object.assign() to add
                    its entries into this shared object.

    MODIFICATION HISTORY:
        date        modified by
        14-FEB-2026 Claude   1-001 initial creation
 */

const ANNOTATIONS_RAW = {};

/*
  end of vvo_data_init.js
 */
