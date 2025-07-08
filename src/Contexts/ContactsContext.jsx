import React, { createContext, useState } from 'react'
import getContactsList from '../services/contactService';

export const ContactsContext = createContext({
    contactsData: [],
    isLoadingContact: true,
});

function ContactsContextProvider({children}) {
    
    const [contactsData, setContactsData] = useState([]);

    const [isLoadingContact, setIsLoadingContact] = useState(true);
    
    setTimeout(()=>{
        const contactsList = getContactsList();
        setContactsData(contactsList);
        setIsLoadingContact(false);
    }, 500);

    const contextValue = {
        contactsData: contactsData,
        isLoadingContact: isLoadingContact,
    }

    return (
        <ContactsContext.Provider value={contextValue}>
            {children}
        </ContactsContext.Provider>
    )
}

export default ContactsContextProvider;