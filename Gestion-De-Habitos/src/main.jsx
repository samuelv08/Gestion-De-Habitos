import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Body, Titulo, Texto1, Texto2, AgregarHabito} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Body />
    <Titulo />
    <Texto1 />
    <Texto2 />
    <AgregarHabito />
  </StrictMode>,
)
