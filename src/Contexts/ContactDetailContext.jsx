import React, { createContext, useState } from 'react';
import { getContactById } from '../services/contactService';

export const ContactDetailContext = createContext({
    "contactDetail": {},
    "loadContact": (idContact) => {},
    "isLoadingContactDetail": true,
});

function ContactDetailContextProvider({children}) {
    const [contactDetail, setContactDetail] = useState(null);

    const [isLoadingContactDetail, setIsLoadingContactDetail] = useState(true);

    function loadContact(idContact){
        setIsLoadingContactDetail(true);
        setTimeout(()=>{
            const contact = getContactById(idContact);
            setContactDetail(contact);
            setIsLoadingContactDetail(false);
        }, 500);
        
    }

    const contextValue  = {
        "contactDetail": contactDetail,
        "loadContact": loadContact,
        "isLoadingContactDetail": isLoadingContactDetail
    }
    return (
        <ContactDetailContext.Provider value={ contextValue }>
            {children}
        </ContactDetailContext.Provider>
    )
}

export default ContactDetailContextProvider;