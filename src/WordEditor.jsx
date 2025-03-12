import React, { useRef } from "react";
import { DocumentEditorContainerComponent, Toolbar } from "@syncfusion/ej2-react-documenteditor";
import "./App.css";

DocumentEditorContainerComponent.Inject(Toolbar);

function App() {
    // Reference for the Document Editor
    const editorRef = useRef(null);

    // Function to handle file upload
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = (e) => {
            const base64String = e.target.result.split(",")[1]; // Extract Base64
            if (editorRef.current && editorRef.current.documentEditor) {
                editorRef.current.documentEditor.open(base64String, file.type.includes("word") ? "Docx" : "Txt");
            }
        };

        reader.readAsDataURL(file); // Convert file to Base64
    };

    return (
        <div>
            {/* File Upload Input */}
            <input type="file" accept=".docx,.txt" onChange={handleFileUpload} />

            {/* Document Editor */}
            <DocumentEditorContainerComponent
                id="container"
                style={{ height: "100%" }}
                serviceUrl="https://services.syncfusion.com/vue/production/api/documenteditor/"
                enableToolbar={true}
                height="100%"
                width="100%"
                ref={editorRef} // Attach ref to Document Editor
            />
        </div>
    );
}

export default App;
