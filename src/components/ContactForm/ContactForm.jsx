import { Button } from 'components/Button/Button';
import { Section } from 'components/Section/Section';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

const INITIAL_FORM_DATA = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  static propTypes = {};

  state = {
    name: '',
    number: '',
  };

  changeHandler = e => {
    const { name, value } = e.target;
    console.log(value);
    this.setState(state => ({ [name]: value }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitFunc(this.state);
    this.reset();
  };

  reset() {
    console.log(1);
    this.setState({ ...INITIAL_FORM_DATA });
  }
  render() {
    return (
      <>
        <Section title="Add contact">
          <form action="" onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor="">
              <span>Name</span>
              <input
                value={this.state.name}
                onInput={e => this.changeHandler(e)}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>

            <label htmlFor="">
              <span>Number</span>
              <input
                value={this.state.number}
                onChange={e => this.changeHandler(e)}
                name="number"
                type="tel"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>

            <Button type="submit" text="submit"></Button>
          </form>
        </Section>
      </>
    );
  }
}
ContactForm.propTypes = {
  submitFunc: PropTypes.func.isRequired,
};
