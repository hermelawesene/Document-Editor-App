


import React, { useEffect, useRef } from 'react';
import { DocumentEditorContainerComponent,Toolbar } from '@syncfusion/ej2-react-documenteditor'; 
DocumentEditorContainerComponent.Inject(Toolbar);
const DocumentEditorApp = () => {
  const editorRef = useRef(null);

  // Sample SFDT JSON (Replace this with your actual SFDT JSON)
  const sfdtJson ={"optimizeSfdt":true,"sec":[{"b":[{"i":[]},{"i":[]},{"i":[]},{"i":[]},{"i":[{"tlp":"nicee to your document!"}]},{"i":[]},{"i":[]},{"i":[]}],"hf":{},"secpr":{"hd":0.0,"fd":0.0,"pw":595.2999877929688,"ph":841.9000244140625,"lm":72.0,"rm":72.0,"tm":72.0,"bm":72.0,"dfp":0,"doep":0,"bi":0,"rpn":0,"psn":0,"enf":2,"fnf":0,"rif":0,"rie":0,"pgns":"Arabic","bc":"NewPage"}}],"fst":{"Liberation Serif":"Times New Roman","Liberation Sans":"Arial"},"cf":{"ff":"Times New Roman","ffbi":"Arial Unicode MS","ffa":"Times New Roman","fffe":"NSimSun","ffnfe":"Times New Roman","id":1033,"idfe":2052,"idbi":1081},"bg":{"c":"#FFFFFFFF"},"sty":[{"t":1,"n":"Default Paragraph Font"},{"t":0,"n":"Normal","nx":"Normal","cf":{"fsz":10.0,"ff":"Times New Roman","fc":"#00000000","fszbi":10.0,"ffbi":"Arial Unicode MS","ffa":"Times New Roman","fffe":"NSimSun","ffnfe":"Times New Roman","id":1033,"idfe":2052,"idbi":1081},"pf":{"bs":0.0,"as":0.0,"ta":0,"wc":1,"bi":0}},{"t":0,"n":"Heading 1","b":"Heading","nx":"Heading 1","cf":{"fsz":16.0,"fc":"#2E74B5FF","fszbi":16.0}},{"t":0,"n":"Heading 2","b":"Heading","nx":"Heading 2","cf":{"fsz":13.0,"fc":"#2E74B5FF","fszbi":13.0}},{"t":0,"n":"Heading 3","b":"Heading","nx":"Heading 3","cf":{"fsz":12.0,"fc":"#1F4D78FF","fszbi":12.0}},{"t":0,"n":"Heading 4","b":"Heading","nx":"Heading 4","cf":{"i":1,"fc":"#2E74B5FF","ibi":1}},{"t":0,"n":"Heading 5","b":"Heading","nx":"Heading 5","cf":{"fc":"#2E74B5FF"}},{"t":0,"n":"Heading 6","b":"Heading","nx":"Heading 6","cf":{"fc":"#1F4D78FF"}},{"t":1,"n":"Hyperlink","b":"Default Paragraph Font","cf":{"u":1,"fc":"#0563C1FF"}},{"t":1,"n":"Footnote Characters","b":"Default Paragraph Font","cf":{"ba":1}},{"t":1,"n":"Footnote Reference","b":"Default Paragraph Font","cf":{"ba":1}},{"t":1,"n":"Footnote Text Char","b":"Default Paragraph Font","cf":{"fsz":10.0,"fszbi":10.0}},{"t":0,"n":"Heading","b":"Normal","nx":"Body Text","cf":{"fsz":14.0,"ff":"Liberation Sans","fszbi":14.0,"ffbi":"Arial Unicode MS","ffa":"Liberation Sans","fffe":"Microsoft YaHei","ffnfe":"Liberation Sans"},"pf":{"bs":12.0,"as":6.0,"kwn":1}},{"t":0,"n":"Body Text","b":"Normal","nx":"Body Text","pf":{"bs":0.0,"as":7.0,"ls":1.149999976158142,"lst":0}},{"t":0,"n":"List","b":"Body Text","nx":"List","cf":{"ffbi":"Arial Unicode MS"}},{"t":0,"n":"Caption","b":"Normal","nx":"Caption","cf":{"i":1,"fsz":12.0,"ibi":1,"fszbi":12.0,"ffbi":"Arial Unicode MS"},"pf":{"bs":6.0,"as":6.0}},{"t":0,"n":"Index","b":"Normal","nx":"Index","cf":{"ffbi":"Arial Unicode MS"}},{"t":0,"n":"Title","b":"Heading","nx":"Title","cf":{"fsz":28.0,"fszbi":28.0}},{"t":0,"n":"Strong","nx":"Strong","cf":{"b":1,"fsz":10.0,"ff":"Times New Roman","fc":"#00000000","bbi":1,"fszbi":10.0,"ffbi":"Arial Unicode MS","ffa":"Times New Roman","fffe":"NSimSun","ffnfe":"Times New Roman","id":1033,"idfe":2052,"idbi":1081},"pf":{"bs":0.0,"as":0.0,"ta":0,"wc":1,"bi":0}},{"t":0,"n":"List Paragraph","nx":"List Paragraph","cf":{"fsz":10.0,"ff":"Times New Roman","fc":"#00000000","fszbi":10.0,"ffbi":"Arial Unicode MS","ffa":"Times New Roman","fffe":"NSimSun","ffnfe":"Times New Roman","id":1033,"idfe":2052,"idbi":1081},"pf":{"bs":0.0,"as":0.0,"ta":0,"wc":1,"bi":0}},{"t":0,"n":"Footnote Text","b":"Normal","nx":"Footnote Text","l":"Footnote Text Char","cf":{"fsz":10.0,"fszbi":10.0},"pf":{"bs":0.0,"as":0.0,"ls":1.0,"lst":0}}],"dtw":36.0,"fmt":0,"tc":0,"pt":0,"enf":0,"dhtml":0,"atrr":0,"ffs":1,"fn":{"s":[{"i":[{"tlp":"\u0003"}]}],"cs":[{"i":[{"tlp":"\u0004"}]}],"cn":[{"i":[]}]},"en":{"s":[{"i":[{"tlp":"\u0003"}]}],"cs":[{"i":[{"tlp":"\u0004"}]}],"cn":[{"i":[]}]},"comp":0,"stytbl":0}

  useEffect(() => {
    // Ensure the editor is initialized
    if (editorRef.current) {
      const editor = editorRef.current.documentEditor;

      // Check if the SFDT JSON is provided and load it into the editor
      if (sfdtJson) {
        editor.open(sfdtJson);
      }
    }
  }, [sfdtJson]); // Dependency array ensures effect runs when sfdtJson changes

  return (
    <div>
      <DocumentEditorContainerComponent
        id="container"
        style={{ height: '100%' }}
        serviceUrl="https://services.syncfusion.com/vue/production/api/documenteditor/" // Syncfusion service URL
        enableToolbar={true} // Enable toolbar
        height={"90vh"}      // Set height
        width={"100%"}       // Set width
        ref={editorRef}      // Attach ref to DocumentEditor container
      />
    </div>
  );
};

export default DocumentEditorApp;

