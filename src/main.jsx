import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css'
//import App from './App.jsx'
import { registerLicense } from '@syncfusion/ej2-base'
import WordEditor from './WordEditor.jsx'
import Populate from './populate.jsx'
import TreeView from './TreeView.jsx';
//import Convert from './conversion.jsx';
registerLicense('Ngo9BigBOggjHTQxAR8/V1NMaF1cXmhNYVJ2WmFZfVtgcF9EZlZVQ2YuP1ZhSXxWdkZiWH9acnJQRmVdU0Y=')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <nav style={{ display: "flex", justifyContent: "center", gap: "20px", margin: "20px" }}>
        <Link to="/wordeditor"><button>Word Editor</button></Link>
        <Link to="/populate"><button>AI Generated Proposal Sample</button></Link>
       <Link to="/treeview"><button>test</button></Link>
      </nav>
      <Routes>
        <Route path="/populate" element={<Populate />} />
        <Route path="/wordeditor" element={<WordEditor />} />
        <Route path="/treeview" element={<TreeView />} />
        <Route path="*" element={<WordEditor />} /> {/* Default to Populate */}
      </Routes>
    </Router>
  </StrictMode>,
)
