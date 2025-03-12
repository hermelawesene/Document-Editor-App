import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import { registerLicense } from '@syncfusion/ej2-base'
import WordEditor from './WordEditor.jsx'
import Populate from './populate.jsx'
registerLicense('Ngo9BigBOggjHTQxAR8/V1NMaF1cXmhNYVJ2WmFZfVtgcF9EZlZVQ2YuP1ZhSXxWdkZiWH9acnJQRmVdU0Y=')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    

    <WordEditor/>
  </StrictMode>,
)
