import React, { useState, FormEvent } from 'react';
import axios from 'axios';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/contact/', {
        name,
        email,
        message
      });

      // Traitez ici la réponse de la requête si nécessaire
      console.log('request post contact form : ', response);
      // Réinitialisez les champs après l'envoi du formulaire
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      // Gérez ici les erreurs de la requête si nécessaire
      console.error(error);
    }
  };

  return (
    <div id='contact-form'>
      <form onSubmit={handleSubmit}>
        <div className='contact-form--title'>
          <h3>Envie de me contacter ?</h3>
          <p>Je me tiens à votre disposition pour toutes discussions</p>
        </div>
        <div className="contact-form--input">
          <div>
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button id='submit' type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;
