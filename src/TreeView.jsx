import React, { useEffect, useRef, useState } from "react";
import { TreeViewComponent } from "@syncfusion/ej2-react-navigations";
import {
  DocumentEditorContainerComponent,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-documenteditor";

const App = () => {
  const editorRef = useRef(null);
  const [headings, setHeadings] = useState([]);

  // Extract headings from the document
  const extractHeadings = () => {
    if (!editorRef.current) return;
    
    const editor = editorRef.current.documentEditor;
    const sections = editor.document?.sections || []; // Ensure sections exist
    const extractedHeadings = [];

    sections.forEach((section, secIndex) => {
      section.blocks.forEach((block, blockIndex) => {
        if (block.hasOwnProperty("paragraphFormat")) {
          const styleName = block.paragraphFormat.styleName || "";
          if (styleName.includes("Heading")) {
            extractedHeadings.push({
              id: `section-${secIndex}-${blockIndex}`,
              name: block.inlines?.map((inline) => inline.text).join(" ") || "Untitled",
            });
          }
        }
      });
    });

    setHeadings(extractedHeadings);
  };

  // Handle navigation click
  const onNodeClick = (event) => {
    if (editorRef.current) {
      let editor = editorRef.current.documentEditor;
      let sectionName = event.nodeData.text;
      let range = editor.search.find(sectionName, "None");
      if (range) editor.selection.selectRange(range);
    }
  };

  // Load the document and extract headings on mount
  useEffect(() => {
    setTimeout(() => {
      extractHeadings();
    }, 2000); // Ensure the document is loaded
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Navigation Panel */}
      <div style={{ width: "250px", borderRight: "1px solid #ccc", padding: "10px" }}>
        <h3>Document Outline</h3>
        <TreeViewComponent
          fields={{ dataSource: headings, id: "id", text: "name" }}
          nodeClicked={onNodeClick}
        />
      </div>

      {/* Document Editor */}
      <div style={{ flex: 1, padding: "10px" }}>
        <DocumentEditorContainerComponent
          id="document-editor"
         height="0%"
          enableToolbar={true}
          ref={editorRef}
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
          documentChange={extractHeadings} // Re-extract headings when document changes
        >
          <Inject services={[Toolbar]} />
        </DocumentEditorContainerComponent>
      </div>
    </div>
  );
};

export default App;
