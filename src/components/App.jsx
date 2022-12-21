import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyles } from './GlobalStyles';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Wrapper } from './wrapper.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    try {
      const savedContacts = JSON.parse(localStorage.getItem('contacts'));
      if (savedContacts) {
        setContacts(savedContacts);
      }
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    if (contacts.length !== 0) {
      const isAlredyContact = contacts.some(item => {
        return item.name.toLowerCase() === contact.name.toLowerCase();
      });

      if (isAlredyContact) {
        alert(`${contact.name} is alrady in contacts`);
        return;
      }

      contact.id = nanoid(5);
      setContacts(prevState => {
        return [...prevState, contact];
      });
    } else {
      contact.id = nanoid(5);
      setContacts([contact]);
    }
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const hendleFilterChange = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={addContact} />

        <h2>
          {contacts.length === 0
            ? 'Here will be your contacts. Add contacts'
            : 'Contacts'}
        </h2>
        {contacts.length > 1 && (
          <Filter value={filter} onInputChange={hendleFilterChange} />
        )}
        {contacts.length !== 0 && (
          <ContactList
            contacts={getFilteredContacts()}
            deleteContact={deleteContact}
          />
        )}
      </Wrapper>
    </>
  );
};
