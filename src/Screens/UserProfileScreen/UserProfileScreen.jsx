import React, { useState } from 'react'
import "./UserProfileScreen.css";
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import getUserData from "../../services/userService.js"
import { Link } from 'react-router';
import { LuArrowLeft, LuCircleAlert, LuLink2, LuPhone, LuUser } from 'react-icons/lu';

function UserProfileScreen() {
    const imgDefault = "/assets/images/contacts/default-image.png";
    const { img, name, phoneNumber, info } = getUserData();

    const [ isLoadingUserDetail, setIsLoadingUserDetail ] = useState(true);

    setTimeout(()=>{
        setIsLoadingUserDetail(false);
    }, 500);

    if (isLoadingUserDetail) {
        return <LoadingSpinner />;
    }

    return (
        <div className='user_detail'>
            <Link to={`/contacts/`}>
            <LuArrowLeft className='user_detail-icon user_detail-icon--arrow-back'/>
            </Link>
            <img src={img ? img : imgDefault} className='user_detail-img'></img>
            <span className='user_detail-update-btn'>Editar</span>
            <div className='user_detail-data'>
                <LuUser className='user_detail-icon'/>
                <div className='user_detail-data-text'>
                    <span className='user_detail-subtittle'>Nombre</span>
                    <span className='user_detail-text'>{name}</span>
                </div>
            </div>
            <div className='user_detail-data'>
                <LuCircleAlert className='user_detail-icon'/>
                <div className='user_detail-data-text'>
                    <span className='user_detail-subtittle'>Info</span>
                    <span className='user_detail-text'>{info}</span>
                </div>
            </div>
            <div className='user_detail-data'>
                <LuPhone className='user_detail-icon'/>
                <div className='user_detail-data-text'>
                    <span className='user_detail-subtittle'>Teléfono</span>
                    <span className='user_detail-text'>{phoneNumber}</span>
                </div>
            </div>
            <div className='user_detail-data'>
                <LuLink2 className='user_detail-icon'/>
                <div className='user_detail-data-text'>
                    <span className='user_detail-subtittle'>Enlaces</span>
                    <span className='user_detail-text'>Añadir enlaces</span>
                </div>
            </div>
        </div>    
    )
}

export default UserProfileScreen;