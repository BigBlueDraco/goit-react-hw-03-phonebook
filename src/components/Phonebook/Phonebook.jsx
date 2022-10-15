import React from 'react';
import nextId from 'react-id-generator';

import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';

export class Phonebook extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };
  searcheHandler = e => {
    this.setState(state => ({ filter: e.target.value.toLowerCase() }));
  };
  onSubmit = data => {
    console.log(data);
    if (this.state.contacts.findIndex(elem => elem.name === data.name) !== -1) {
      alert('Contact already exists');
      return;
    }
    this.setState(state => {
      return {
        contacts: [
          ...state.contacts,
          { id: nextId(), name: data.name, number: data.number },
        ],
      };
    });
  };

  deleteContact = e => {
    const index = this.state.contacts.findIndex(
      elem => elem.id === e.target.dataset.id
    );

    this.setState(state => {
      const contacts = state.contacts;
      contacts.splice(index, 1);
      console.log(contacts);
      return {
        contacts: [...contacts],
      };
    });
  };

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  componentDidMount() {
    this.setState(() => ({
      contacts: JSON.parse(localStorage.getItem('contacts')),
    }));
  }
  render() {
    return (
      <>
        <ContactForm
          inputFunc={this.changeHandler}
          submitFunc={this.onSubmit}
        />
        <Section title="Contacts">
          <Filter searcheFunc={this.searcheHandler} />
          <ContactsList
            contacts={this.state.contacts}
            filter={this.state.filter}
            deletFunc={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
