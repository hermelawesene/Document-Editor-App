import React from "react";
import {
  RichTextEditorComponent,
  Toolbar,
  Image,
  Link,
  Table,
  HtmlEditor,
  QuickToolbar,
  Inject
} from "@syncfusion/ej2-react-richtexteditor";
import "@syncfusion/ej2-richtexteditor/styles/material.css";

const App = () => {
  // Your HTML content
  const data = `
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

  // Define a full toolbar with all rich features
  const toolbarSettings = {
    items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
      'LowerCase', 'UpperCase', '|',
      'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
      'Outdent', 'Indent', '|',
      'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
      'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
  };
  const quickToolbarSettings = {
    image: ['Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-', 'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension'],
    link: ['Open', 'Edit', 'UnLink']
};

  return (
    <div>
      <h2>Syncfusion Rich Text Editor</h2>
      <RichTextEditorComponent height={450} value={data} quickToolbarSettings={quickToolbarSettings} toolbarSettings={toolbarSettings}>
        <Inject services={[Toolbar, Image, Link, Table, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default App;
