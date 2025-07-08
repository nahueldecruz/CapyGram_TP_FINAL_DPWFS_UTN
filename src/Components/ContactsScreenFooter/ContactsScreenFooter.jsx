import React from 'react'
import "./ContactsScreenFooter.css";
import { TbMessages } from "react-icons/tb";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdOutlineCall, MdOutlineGroups } from "react-icons/md";

function ContactsScreenFooter() {
  return (
    <div className='contacts_screen-footer'>
        <div className='contacts_screen-footer-action'>
            <TbMessages className='contacts_screen-footer-icon'/>
            <span className='contacts_screen-footer-text'>
                Chats
            </span>
        </div>
        <div className='contacts_screen-footer-action'>
            <AiOutlineExclamationCircle className='contacts_screen-footer-icon'/>
            <span className='contacts_screen-footer-text'>
                Novedades
            </span>
        </div>
        <div className='contacts_screen-footer-action'>
            <MdOutlineGroups className='contacts_screen-footer-icon'/>
            <span className='contacts_screen-footer-text'>
                Comunidades
            </span>
        </div>
        <div className='contacts_screen-footer-action'>
            <MdOutlineCall className='contacts_screen-footer-icon'/>
            <span className='contacts_screen-footer-text'>
                Llamadas
            </span>
        </div>
    </div>
  )
}

export default ContactsScreenFooter