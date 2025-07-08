import React, { useContext, useEffect, useState } from "react";
import "./ChatScreen.css";
import Chat from "../../Components/Chat/Chat";
import { useParams } from "react-router";
import { MessagesContext } from "../../Contexts/MessagesContext";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import ChatForm from "../../Components/ChatForm/ChatForm";
import ChatScreenHeader from "../../Components/ChatScreenHeader/ChatScreenHeader";
import { getContactById } from "../../services/contactService";
import ContactsScreenHeader from "../../Components/ContactsScreenHeader/ContactsScreenHeader"
import ContactsList from "../../Components/ContactsList/ContactsList"
import ContactsScreenFooter from "../../Components/ContactsScreenFooter/ContactsScreenFooter"
import { IsDeskTopContext } from "../../Contexts/IsDesktopContext";

function ChatScreen() {

  const { loadMessagesContact, isLoadingMessages } =
      useContext(MessagesContext);

  const { idContact } = useParams();

  const {name, img, lastTimeConnected, phoneNumber} = getContactById(idContact);

  const { isDesktop } = useContext(IsDeskTopContext);

  useEffect(() => {
    loadMessagesContact(idContact);
  }, [idContact]);

  if (isLoadingMessages) {
    return <LoadingSpinner />;
  }
  
  if (isDesktop) {
    return (
      <div className="chat_screen_desktop_container">
        <div className="contact_screen">
          <ContactsScreenHeader />
          <div className="contact_screen-contacts">
            <ContactsList />
          </div>
          <ContactsScreenFooter />
        </div>
        <div className="chat_screen_container">
          <ChatScreenHeader 
            name={name}
            img={img}
            lastTimeConnected={lastTimeConnected}
            phoneNumber={phoneNumber}
            id={idContact}
          />
          <div className="chat_screen">
            <Chat />
            <ChatForm className="chat_screen-footer"/>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="chat_screen_container">
      <ChatScreenHeader 
        name={name}
        img={img}
        lastTimeConnected={lastTimeConnected}
        phoneNumber={phoneNumber}
        id={idContact}
      />
      <div className="chat_screen">
        <Chat />
        <ChatForm className="chat_screen-footer"/>
      </div>
    </div>
  )



  /* const { loadMessagesContact, isLoadingMessages } =
    useContext(MessagesContext);

  const { idContact } = useParams();

  const {name, img, lastTimeConnected, phoneNumber} = getContactById(idContact);

  useEffect(() => {
    loadMessagesContact(idContact);
  }, [idContact]);

  if (isLoadingMessages) {
    return <LoadingSpinner />;
  }
  
  return (
    <div className="chat_screen_container">
      <ChatScreenHeader 
        name={name}
        img={img}
        lastTimeConnected={lastTimeConnected}
        phoneNumber={phoneNumber}
      />
      <div className="chat_screen">
        <Chat />
        <ChatForm className="chat_screen-footer"/>
      </div>
    </div>
    ) */
}

export default ChatScreen;
