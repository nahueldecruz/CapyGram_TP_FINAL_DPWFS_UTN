import mock_data from "../data/contact-mock";

function getMenssagesListByContactId(idContact){
    for(const contact of mock_data.contacts){
        if(contact.id == idContact){
            return contact.messagesList;
        }
    }
    return null;
}

export default getMenssagesListByContactId;