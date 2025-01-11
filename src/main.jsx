import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import ItemListManager from './ans.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode><ItemListManager /></StrictMode>
);
