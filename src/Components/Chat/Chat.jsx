import React from "react";
import "./Chat.css";
import ChatForm from "../ChatForm/ChatForm";
import MessageList from "../MessageList/MessageList";

function Chat(){

    return (
        <>
            <div className="chat">
                <MessageList />
            </div>
        </>
    );
}

export default Chat;