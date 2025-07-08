import React from 'react'
import "./ContactItem.css";
import { Link } from 'react-router';

function ContactItem({id, name, img, lastTimeConnected, lastMessage, phoneNumber}) {
  
  const imgDefault = "/assets/images/contacts/default-image.png"

  return (
    <div className='contact'>
      <div className='contact_container_img'>
        <img src={img ? img : imgDefault} alt={name + "image profile"} className='contact_img'></img>
      </div>
      <Link className="contact_container_info" to={`/contacts/chat/${id}`}>
        <div className='contact_info'>
          <span className='contact_info-name'>{name ? name : phoneNumber}</span>
          <span className='contact_info-last_message'>{lastMessage.text}</span>
        </div>
        <span className='contactcontact_info-last_time_conected'>{lastTimeConnected}</span>
      </Link>
    </div>
  )
}

export default ContactItem;