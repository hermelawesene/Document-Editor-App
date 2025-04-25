import React, { useState } from 'react';
import HTMLtoDOCX from 'html-to-docx';
import { saveAs } from 'file-saver';
import './App.css';

function Convert() {
  const [htmlInput, setHtmlInput] = useState('<h1>Hello, World!</h1><p>This is a sample paragraph.</p>');

  const convertToDocx = async () => {
    try {
      const docxBuffer = await HTMLtoDOCX(htmlInput, null, {
        table: { row: { cantSplit: true } },
        footer: true,
        pageNumber: true,
      });

      const blob = new Blob([docxBuffer], {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      });
      saveAs(blob, 'converted-document.docx');
    } catch (error) {
      console.error('Error converting to DOCX:', error);
      alert('Failed to convert HTML to DOCX. Please check your HTML input.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">HTML to DOCX Converter</h1>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter HTML Content
          </label>
          <textarea
            className="w-full h-64 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={htmlInput}
            onChange={(e) => setHtmlInput(e.target.value)}
            placeholder="Enter your HTML content here..."
          />
        </div>

        <button
          onClick={convertToDocx}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Convert and Download DOCX
        </button>
      </div>
    </div>
  );
}

export default Convert;