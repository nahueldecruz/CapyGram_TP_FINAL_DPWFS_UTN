import mock_data from "../data/contact-mock";

function getContactsList(){
    return mock_data.contacts;
}

export function getContactById(idContact){
    for(const contact of mock_data.contacts){
        if(contact.id == idContact){
            return contact;
        }
    }
    return null;
}

export default getContactsList;