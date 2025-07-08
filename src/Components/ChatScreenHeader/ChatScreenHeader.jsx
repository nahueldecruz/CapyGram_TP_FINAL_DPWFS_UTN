import React, { useContext } from 'react';
import "./ChatScreenHeader.css";
import { LuArrowLeft, LuPhone, LuVideo } from "react-icons/lu";
import { Link } from 'react-router';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

function ChatScreenHeader({id, name, img, lastTimeConnected, phoneNumber}) {
    const imgDefault = "../../public/assets/images/contacts/default-image.png";
    return (
        <div className='chat_screen-header'>
            <Link to={"/contacts"}>
                <LuArrowLeft className='chat_screen-header-icon' />
            </Link>
            <div className='chat_screen-header_profile'>
                <img src={img ? img : imgDefault} className='chat_screen-header-image'></img>
                <div className='chat_screen-header-text'>
                    <span className='chat_screen-header-name'>{name ? name : phoneNumber}</span>
                    <span className='chat_screen-header-last_time_connected'>{lastTimeConnected}</span>
                </div>
            </div>
            <div className='chat_screen-header-actions_container'>
                <LuVideo className='chat_screen-header-action-icon'/>
                <LuPhone className='chat_screen-header-action-icon'/>
                <DropDownMenu
                    options={
                        [
                        <Link className="drop_down_menu-option" to={`/contacts/contact-detail/${id}`}>Ver detalle</Link>,
                        "Buscar",
                        "Archivos, enlaces y docs.",
                        "Mensajes temporales",
                        "Tema del chat",
                        "Mas..."
                    ]}
                />
            </div>
        </div>
    )
}

export default ChatScreenHeader;