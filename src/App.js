import React, { useState } from 'react';
import AddContact from './components/AddContact/AddContact';
import ContactsList from './components/ContactsList/ContactsList';
import EditedContact from './components/EditeContact/EditedContact';

const App = () => {
  let [contacts, setContacts] = useState([]);
  let [EditeContact, setEditContact] = useState({});
  let [isEdit, setIsEdit] = useState(false);

  function handleNewContact(newContact) {
    let newContactArr = [...contacts];
    newContactArr.push(newContact);
    setContacts(newContactArr);
  }
  function handleDeleteContact(id) {
    let newArr = contacts.filter(item => {
      return item.id != id
    });
    setContacts(newArr);
  }
  
  function handleEdit(index) {
    setIsEdit(true);
    setEditContact(contacts[index]);
  }

  function handleSaveEdit(newContacts) {
    let newContact = contacts.map(item => {
      if (item.id == newContacts.id) {
        return newContacts;
      }
      else {
        return item;
      }
    })
    setContacts(newContact);
    setIsEdit(false);
  }

  return (
    <div>
      <AddContact
        handleNewContact={handleNewContact} />
      {isEdit ?    <EditedContact
        EditeContact={EditeContact}
        handleSaveEdit={handleSaveEdit} /> : null}
     
      <ContactsList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
        handleEdit={handleEdit}
      />
    
    </div>
  );
};

export default App;