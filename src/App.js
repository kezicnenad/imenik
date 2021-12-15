import React, {useState} from 'react';
import { contactsDB as contactList } from './components/ContactsDB';
import ContactList from './components/ContactList';
import Brojac from './components/Brojac';
import './App.css';

export default function App() {
  const [contacts, setContacts] = useState(contactList);

  /* Ovaj (id) dobija onaj id kontakta iz kontakt liste te sa njim hendla */
  const handleRemoveContact = (id) => {
    const filteredContacts = contacts.filter(contact => contact.id !== id)
    setContacts(filteredContacts);
  }

  return(
    <div className='container'>
      <h1 className='naslov'>Brojač (REDUX)</h1>
        <Brojac />
      <h1 className='naslov'>Kontakti</h1>
        <ContactList contacts={contacts} 
        removeContact={handleRemoveContact}
        />
    </div>
  );
}