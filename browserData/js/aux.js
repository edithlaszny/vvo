
var lastModifDate = "VVO &mdash; Vitis Vinifera Ontology | V. 2-006 | 2026/05/11" ;

function writeFooterUp()
{
    document.write(
    "<span>" + lastModifDate +
    "      &nbsp; &nbsp; | &nbsp; &nbsp;" +
    "      <a href=\"./browserData/technOverview.html\"       target=\"_blank\">Technical Overview</a>" +
    "      &nbsp; &nbsp; | &nbsp; &nbsp;" +
    "      <a href=\"./vvo_browser.html\"         target=\"_blank\">VVO Browser</a>" +
    "      &nbsp; &nbsp; | &nbsp; &nbsp;" +
    "      Download:  &nbsp;" +
    "      <a href=\"./browserData/OWL_XML_encoding/vvo.owl\" target=\"_blank\">OWL</a> |" +
    "      <a href=\"./browserData/OWL_RDF_encoding/vvo.owl\" target=\"_blank\">RDF/XML</a>" +
    "      &nbsp; &nbsp; | &nbsp; &nbsp;" +
    "      <a href=\"./browserData/vvo-mappings.sssom.tsv\"         target=\"_blank\">SSSOM</a>" +
    "      &nbsp; &nbsp; | &nbsp; &nbsp;" +
    "      <a href=\"./browserData/disclaimer.html\"          target=\"_blank\">Disclaimer</a>" +
    "</span>") ;

}   /* end of function writeFooter() */

function writeFooterDown()
{
    document.write(
    "<span>" + lastModifDate +
    "      &nbsp; &nbsp; | &nbsp; &nbsp;" +
    "      <a href=\"./technOverview.html\"       target=\"_blank\">Technical Overview</a>" +
    "      &nbsp; &nbsp; | &nbsp; &nbsp;" +
    "      <a href=\"../vvo_browser.html\"         target=\"_blank\">VVO Browser</a>" +
    "      &nbsp; &nbsp; | &nbsp; &nbsp;" +
    "      Download:  &nbsp;" +
    "      <a href=\"./OWL_XML_encoding/vvo.owl\" target=\"_blank\">OWL</a> |" +
    "      <a href=\"./OWL_RDF_encoding/vvo.owl\" target=\"_blank\">RDF/XML</a>" +
    "      &nbsp; &nbsp; | &nbsp; &nbsp;" +
    "      <a href=\"./vvo-mappings.sssom.tsv\"         target=\"_blank\">SSSOM</a>" +
    "      &nbsp; &nbsp; | &nbsp; &nbsp;" +
    "      <a href=\"./disclaimer.html\"          target=\"_blank\">Disclaimer</a>" +
    "</span>") ;

}   /* end of function writeFooter() */


function show2figures(_name, Ppic, Pwidth, Bpic, Bwidth)
{
    /*
    document.write(
        "<table border=\"0px\">" +
        "    <tr><td width=\"20px\">&nbsp;</td><td>" +
        "        <p /><h5>In Protégé:</h5><p />" +
        "    </td></tr>" +
        "    <tr><td width=\"20px\">&nbsp;</td><td>" +
        "        <img src=\"./doc/" + Ppic + "\"" +
        "             loading=\"lazy\"" +
        "             alt=\"./doc/" + Ppic + " : " + _name+ " in protege\"" +
        "             width=\"850 px\">" +
        "    </td></tr>" +
        "    <tr><td width=\"20px\">&nbsp;</td><td>" +
        "        <p /><p /><h5>In VVO Browser:</h5><p /><p />" +
        "    </td></tr>" +
        "    <tr><td width=\"20px\">&nbsp;</td><td>" +
        "        <img src=\"./doc/" + Bpic + "\"" +
        "             loading=\"lazy\"" +
        "             alt=\"./doc/" + Bpic + " : " + _name+ " in browser\"" +
        "             width=\"850 px\">" +
        "        <p /><p />" +
        "    </td></tr>" +
        "</table>") ;
     */

}   /* end of function show2figures() */
