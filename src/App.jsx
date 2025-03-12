import React from 'react';
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
import './App.css'; // Ensure you import the CSS file

DocumentEditorContainerComponent.Inject(Toolbar);

function App() {
    let documentEditor;

    const onFileChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const fileContent = e.target.result;
                console.log('File Content:', fileContent); // Debugging line

                try {
                    if (file.name.endsWith('.docx')) {
                        const blob = new Blob([fileContent], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
                        console.log('Blob:', blob); // Debugging line
                        documentEditor.documentEditor.open(blob);
                    } else if (file.name.endsWith('.txt') || file.name.endsWith('.rtf')) {
                        documentEditor.documentEditor.open(fileContent);
                    } else {
                        alert('Unsupported file format. Please upload a .docx, .txt, or .rtf file.');
                    }
                } catch (error) {
                    console.error('Failed to load document:', error);
                    alert('Failed to load the document. Please check the file format and try again.');
                }
            };

            if (file.name.endsWith('.docx')) {
                reader.readAsArrayBuffer(file);
            } else {
                reader.readAsText(file);
            }
        }
    };

    return (
        <div>
            <input type="file" onChange={onFileChange} accept=".docx,.doc,.rtf,.txt" />
            <DocumentEditorContainerComponent
                ref={(scope) => { documentEditor = scope; }}
                id="container"
                style={{ height: '590px' }}
                serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
                enableToolbar={true}
                height='800'
            />
        </div>
    );
}

export default App;