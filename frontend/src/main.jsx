import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider"
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider>
        <BrowserRouter>
          <ToastContainer/>
            <App />
        </BrowserRouter>
      </Provider>
    </StrictMode>,

);
