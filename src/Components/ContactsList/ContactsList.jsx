import React, { useContext } from 'react'
import { ContactsContext } from "../../Contexts/ContactsContext";
import ContactItem from '../ContactItem/ContactItem';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'; 

function ContactsList() {
    const { contactsData, isLoadingContact } = useContext(ContactsContext);

    if(isLoadingContact){
        return(
            <LoadingSpinner />
        )
    }

    return (
        <>
            {contactsData.map((contact) => {
                const lastMessage = contact.messagesList[contact.messagesList.length - 1];
                return (
                <ContactItem
                    key={contact.id}
                    id={contact.id} 
                    name={contact.name}
                    img={contact.img}
                    lastTimeConnected={contact.lastTimeConnected}
                    lastMessage={lastMessage}
                    phoneNumber={contact.phoneNumber}
                />
                )
            })}
        </>
    )
}

export default ContactsList;