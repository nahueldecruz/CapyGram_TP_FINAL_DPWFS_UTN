import React, { useContext } from "react";
import "./ContactsScreen.css";
import ContactsList from "../../Components/ContactsList/ContactsList";
import ContactsScreenHeader from "../../Components/ContactsScreenHeader/ContactsScreenHeader";
import ContactsScreenFooter from "../../Components/ContactsScreenFooter/ContactsScreenFooter";
import ChatScreenHeader from "../../Components/ChatScreenHeader/ChatScreenHeader";
import { IsDeskTopContext } from "../../Contexts/IsDesktopContext";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

function ContactsScreen() {

  const { isDesktop } = useContext(IsDeskTopContext);

  if (isDesktop) {
    return (
      <div className="contact_screen_desktop_container">
        <div className="contact_screen">
          <ContactsScreenHeader />
          <div className="contact_screen-contacts">
            <ContactsList />
          </div>
          <ContactsScreenFooter />
        </div>
        <div className="contact_screen-chat_default">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  return (
    <div className="contact_screen">
      <ContactsScreenHeader />
      <div className="contact_screen-contacts">
        <ContactsList />
      </div>
      <ContactsScreenFooter />
    </div>
  )
}

export default ContactsScreen;