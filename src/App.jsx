import React from "react"
import { Routes, Route, Navigate } from "react-router";
import ChatScreen from "./Screens/ChatScreen/ChatScreen";
import ContactsScreen from "./Screens/ContactsScreen/ContactsScreen";
import ContactDetailScreen from "./Screens/ContactDetailScreen/ContactDetailScreen";
import UserProfileScreen from "./Screens/UserProfileScreen/UserProfileScreen";

function App() {

  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element={<Navigate to="/contacts" />}
        />
        <Route 
          path="/contacts/chat/:idContact" 
          element={<ChatScreen />}
        />
        <Route 
          path="/contacts" 
          element={<ContactsScreen/>}
        />
        <Route 
          path="/contacts/contact-detail/:idContact" 
          element={<ContactDetailScreen/>}
        />
        <Route 
          path="/contacts/user-detail/" 
          element={<UserProfileScreen />}
        />
      </Routes>
    </>
  )
}

export default App;
