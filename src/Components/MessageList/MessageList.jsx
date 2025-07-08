import React, { useContext, useEffect } from 'react'
import Message from "../Message/Message";
import { MessagesContext } from "../../Contexts/MessagesContext";
import { useParams } from 'react-router';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

function MessageList() {
    const { messagesData } = useContext(MessagesContext);

    return (
        <>
            {messagesData.map((message) => {
                return (
                    <Message
                        key={message.id}
                        id={message.id}
                        text={message.text}
                        sender={message.sender}
                        time={message.time}
                        status={message.status}
                    />
                );
            })} 
        </>
    )
}

export default MessageList