import React, { useContext } from "react";
import "./Message.css";
import { MessagesContext } from "../../Contexts/MessagesContext";
import { BsTrash } from "react-icons/bs";

function Message({id, sender, time, text, status}){
    const { handleDeleteMessage } = useContext(MessagesContext);

    let messageClass = "message";
    let messageClassStatus = "message_status";
    
    if(sender === "USER"){
        messageClass = messageClass + " message--user";
    } else if(sender === "OTHER"){
        messageClass = messageClass + " message--other";
    }

    if(status === "sent"){
        messageClassStatus = messageClassStatus + " message_status-sent";
    } else if(status === "seen"){
        messageClassStatus = messageClassStatus + " message_status-seen";
    } else if(status === "delivered"){
        messageClassStatus = messageClassStatus + " message_status-delivered";
    }

    return (
        <>
            <div className={messageClass}>
                <p className="message_text"><span className="message_text-span">{text}</span></p>
                <div className="message_footer">
                    <span 
                        className={"message_button-delete"}
                        onClick={() => {handleDeleteMessage(id)}}
                    >
                        <BsTrash />
                    </span>
                    <span className="message_time">{time}</span>
                    <div className={messageClassStatus}>
                        <i className="bi bi-check-all"></i>
                        <i className="bi bi-check"></i>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Message;