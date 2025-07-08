import React from 'react'
import "./ContactsScreenHeader.css";
import { LuCamera } from 'react-icons/lu';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import { Link } from 'react-router';

function ContactsScreenHeader() {
  return (
    <div className="contacts_screen-header">
      <h1 className="contacts_screen-header-title">CapyGram</h1>
      <div className="contacs_screen-header-icons">
        <LuCamera className='contacs_screen-header-icon_camera'/>
        <DropDownMenu
            options={
                [
                <Link className="drop_down_menu-option" to={"/contacts/user-detail/"}>Ver perfil</Link>,
                "Nuevo grupo",
                "Nueva comunidad",
                "Nueva difusión",
                "Dispositivos vinculados",
                "Destacado",
                "Marcar todos como leídos",
                "Ajustes"
            ]}
        />
      </div>
      <form className="contact_secreen-header-searcher">
          <input className="contact_secreen-header-searcher-input" type="text" placeholder="Proximamente... 🚧 Gracias por su paciencia!!"/>
      </form>
    </div>
  )
}

export default ContactsScreenHeader;