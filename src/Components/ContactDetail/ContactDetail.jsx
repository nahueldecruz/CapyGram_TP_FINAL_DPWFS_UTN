import React, { useContext } from 'react';
import "./ContactDetail.css";
import { Link } from 'react-router';
import { LuArrowLeft, LuBan, LuBell, LuBookMarked, LuBookUser, LuClock9, LuEllipsisVertical, LuHeart, LuImage, LuLock, LuPhone, LuSearch, LuShieldAlert, LuThumbsDown, LuVideo } from "react-icons/lu";
import DropDownMenu from '../DropDownMenu/DropDownMenu';

function ContactDetail({id, info, name, img, phoneNumber}) {
  const imgDefault = "/assets/images/contacts/default-image.png";

  return (
    <div className='contact_detail'>
      <div className='contac_detail-header'>
        <Link to={`/contacts/chat/${id}`}>
          <LuArrowLeft className='contact_detail-icon'/>
        </Link>
        <div className='contact_detail-profile'>
          <img src={img ? img : imgDefault} className='contact_detail-img'></img>
          <span className='contact_detail-name'>{name }</span>
          <span className='contact_detail-phone_number'>{phoneNumber}</span>
        </div>
        <DropDownMenu
            options={
                [
                "Compartir",
                "Editar",
                "Verificar código de seguridad",
            ]}
        />
      </div>
      <div className='contact_detail-actions_container'>
        <div className='contact_detail-actions'>
          <LuPhone className='contact_detail-actions-icon'/>
          <span className='contact_detail-actions-text'>Llamar</span>
        </div>
        <div className='contact_detail-actions'>
          <LuVideo className='contact_detail-actions-icon'/>
          <span className='contact_detail-actions-text'>Video</span>
        </div>
        <div className='contact_detail-actions'>
          <LuSearch className='contact_detail-actions-icon'/>
          <span className='contact_detail-actions-text'>Buscar</span>
        </div>
      </div>
      <span className='contact_detail-info'>{info}</span>
      <div className='contact_detail-options_container'>
        <div className='contact_detail-option'>
          <LuBell className='contact_detail-option-icon'/>
          <span className='contact_detail-option-text'>Notificaciones</span>
        </div>
        <div className='contact_detail-option'>
          <LuImage className='contact_detail-option-icon'/>
          <span className='contact_detail-option-text'>Visibilidad de archivos multimedia</span>
        </div>
        <div className='contact_detail-option'>
          <LuBookMarked className='contact_detail-option-icon'/>
          <span className='contact_detail-option-text'>Mensajes conservados</span>
        </div>
        <div className='contact_detail-option'>
          <LuLock className='contact_detail-option-icon'/>
          <span className='contact_detail-option-text'>Cifrado</span>
        </div>
        <div className='contact_detail-option'>
          <LuClock9 className='contact_detail-option-icon'/>
          <span className='contact_detail-option-text'>Mensajes temporales</span>
        </div>
        <div className='contact_detail-option'>
          <LuShieldAlert className='contact_detail-option-icon'/>
          <span className='contact_detail-option-text'>Restringir chat</span>
        </div>
      </div>
      <div className='contact_detail-options-footer_container'>
        <div className='contact_detail-option-footer'>
          <LuHeart className='contact_detail-option-footer-icon'/>
          <span className='contact_detail-option-footer-text'>Añadir a favoritos</span>
        </div>
        <div className='contact_detail-option-footer'>
          <LuBookUser className='contact_detail-option-footer-icon'/>
          <span className='contact_detail-option-footer-text'>Añadir a la lista</span>
        </div>
        <div className='contact_detail-option-footer'>
          <LuBan className='contact_detail-option-footer-icon'/>
          <span className='contact_detail-option-footer-text'>{`Bloquear a ${name ? name : phoneNumber}`}</span>
        </div>
        <div className='contact_detail-option-footer'>
          <LuThumbsDown className='contact_detail-option-footer-icon'/>
          <span className='contact_detail-option-footer-text'>{`Reportar a ${name ? name : phoneNumber}`}</span>
        </div>
      </div>
    </div>
  )
}

export default ContactDetail;