import React, { useRef, useEffect } from 'react';
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';

// Enable toolbar for the Document Editor
DocumentEditorContainerComponent.Inject(Toolbar);

const DocumentEditorWithHTML = () => {
    const documentEditorRef = useRef(null);

    // HTML content to be injected
    const htmlContent = `
        <p>Contact Information</p>
        <p style="text-align: center"><strong>Hermela Wesene</strong></p> 
        <p style="text-align: center"><strong>CEO</strong></p>
        <p style="text-align: center">Hermi</p> 
        <p style="text-align: center">Addis Ababa</p> 
        <p style="text-align: center">12345678980</p> 
        <p style="text-align: center">hermelawesene@gmail.com</p> 
        <p style="text-align: center">wwwwwwwwwwwwwwwwwwwwwwwwwwwww</p> 
        <p></p>
        <p>Proposal date: dateeeeeee</p> 
        <p>This proposal is valid until: ____</p>
        <p>We hope our proposal meets your expectations and leads to a fruitful cooperation with you.</p>
        <p style="text-align: center"><strong>Yaye</strong></p>
    `;

    useEffect(() => {
        // Inject the HTML content into the Document Editor
        if (documentEditorRef.current) {
            documentEditorRef.current.documentEditor.open(htmlContent);
        }
    }, [htmlContent]);

    return (
        <div>
            <DocumentEditorContainerComponent
                ref={documentEditorRef}
                id="documenteditor"
                height={'800px'}
                enableToolbar={true}
            />
        </div>
    );
};

export default DocumentEditorWithHTML;