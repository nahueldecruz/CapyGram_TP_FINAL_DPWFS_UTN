import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { BrowserRouter } from 'react-router'
import ContactsContextProvider from './Contexts/ContactsContext.jsx'
import MessagesContextProvider from './Contexts/MessagesContext.jsx'
import ContactDetailContextProvider from './Contexts/ContactDetailContext.jsx'
import IsDesktopContextProvider from './Contexts/IsDesktopContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <IsDesktopContextProvider>
            <ContactDetailContextProvider>
                <ContactsContextProvider>
                    <MessagesContextProvider>
                        <App />
                    </MessagesContextProvider>
                </ContactsContextProvider>
            </ContactDetailContextProvider>
        </IsDesktopContextProvider>
    </BrowserRouter>
)
