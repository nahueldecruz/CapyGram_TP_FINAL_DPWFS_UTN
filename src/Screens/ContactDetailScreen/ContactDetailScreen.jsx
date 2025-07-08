import React, { useContext, useEffect } from 'react'
import "./ContactDetailScreen.css";
import ContactDetail from '../../Components/ContactDetail/ContactDetail';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import { ContactDetailContext } from '../../Contexts/ContactDetailContext';
import { useParams } from 'react-router';

function ContactDetailScreen() {
  const { contactDetail, isLoadingContactDetail, loadContact } = useContext(ContactDetailContext);

  const {idContact} = useParams();

  useEffect(() => {
      loadContact(idContact)
    }, [idContact]
  )

  if (isLoadingContactDetail) {
    return <LoadingSpinner />;
  }
  
  return (
    <>
      <ContactDetail
        img={contactDetail.img}
        id={contactDetail.id}
        name={contactDetail.name}
        phoneNumber={contactDetail.phoneNumber}
        info={contactDetail.info}
      />
    </>
  )
}

export default ContactDetailScreen;