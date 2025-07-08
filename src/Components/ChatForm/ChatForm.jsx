import React, {useContext, useState} from "react";
import "./ChatForm.css";
import { MessagesContext } from "../../Contexts/MessagesContext";
import { IoSend } from "react-icons/io5";

function ChatForm(){
    const { handleCreateMessage } = useContext(MessagesContext);

    function createMessage(event){
        event.preventDefault();
        const formData = event.target;
        const text = formData.inputText.value;
        const time = new Date();
        const timeNow = time.getHours() + ":" + time.getMinutes();

        formData.reset();
        handleCreateMessage(text, timeNow);
    }

    return(
        <>
            <form className="message_form_create" onSubmit={createMessage}>
                <input 
                    placeholder="Mensaje..."
                    type="text"
                    id="inputText"
                    name="inputText"
                    className="message_form_create-texarea"
                    required
                ></input>
                <button className="message_form_create-button" type="submit"><IoSend /></button>
            </form>
        </>
    )
}

export default ChatForm;