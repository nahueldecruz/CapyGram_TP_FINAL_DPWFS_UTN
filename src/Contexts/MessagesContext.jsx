import React, {createContext, useEffect, useState} from 'react'
import { v4 as uuidv4 } from "uuid";
import getMenssagesListByContactId from '../services/messageService';

export const MessagesContext = createContext({
    messagesData: [],
    "handleDeleteMessage": () => {},
    "handleCreateMessage": () => {},
    "loadMessagesContact": (idContact) => {},
    "isLoadingMessages": true,
});

function MessagesContextProvider({children}){
    const [messagesData, setMessageData] = useState([]);

    const [isLoadingMessages, setIsLoadingMessages] = useState(true);
    
    function loadMessagesContact(idContact){
        setIsLoadingMessages(true);
        setTimeout(()=>{
            const messagesList = getMenssagesListByContactId(idContact);
            setMessageData(messagesList);
            setIsLoadingMessages(false);
        }, 500);
    }

    function handleDeleteMessage(idMessage){
        const newListMessage = messagesData.filter(message => {
            return message.id !== idMessage
        });
        setMessageData(newListMessage);
    }
    
    function handleCreateMessage(text, timeNow){
        const randomId = uuidv4();
        const newMessage = {
            id: randomId,
            sender: "USER", 
            time: timeNow, 
            text: text, 
            status: "sent"
        }

        const newListMessage = [...messagesData];
        newListMessage.push(newMessage);
        setMessageData(newListMessage);
    }

    const contextValue = {
        "messagesData": messagesData,
        "handleDeleteMessage": handleDeleteMessage,
        "handleCreateMessage": handleCreateMessage,
        "loadMessagesContact": loadMessagesContact,
        "isLoadingMessages": isLoadingMessages
    }

    return (
        <MessagesContext.Provider value={contextValue}>
            {children}
        </MessagesContext.Provider>
    )
}

export default MessagesContextProvider;