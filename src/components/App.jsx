import React from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../redux/store';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<h3>Loading...</h3>}>
          <h1 className="title">Phonebook</h1>
          <ContactForm />
          <h2 className="title">Contacts</h2>
          <Filter />
          <ContactList />
        </PersistGate>
      </Provider>
    </>
  );
};
