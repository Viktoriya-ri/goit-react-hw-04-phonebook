import { useState } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { Form, Input, Button, Text } from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();


  const handleSubmit = event => {
    event.preventDefault();

   
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };


  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
    return (
      <Form onSubmit={handleSubmit}>
        <Text>Name</Text>
        <Input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />
        <Text>Number</Text>
        <Input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
        />
        <Button type="submit">Add Contact</Button>
      </Form>
    );
  }


export default ContactForm;


