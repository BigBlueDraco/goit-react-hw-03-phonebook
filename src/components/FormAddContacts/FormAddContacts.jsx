import { Button } from 'components/Button/Button';
import { Section } from 'components/Section/Section';
import PropTypes from 'prop-types';

export const FormAddContacts = ({ inputFunc, submitFunc }) => {
  return (
    <>
      <Section title="Add contact">
        <form action="" onSubmit={e => submitFunc(e)}>
          <input
            onInput={e => inputFunc(e)}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <input
            onInput={e => inputFunc(e)}
            name="number"
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Button type="submit" text="submit"></Button>
        </form>
      </Section>
    </>
  );
};
FormAddContacts.propTypes = {
  inputFunc: PropTypes.func.isRequired,
  submitFunc: PropTypes.func.isRequired,
};
