import React, { useState, FormEvent } from 'react';
import axios from 'axios';

import { useEffect, useRef } from "react";
import { fadeX, simpleFade, popElement } from "../../animations/myFadeAnimation"

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fadeX(".contact-input", 0, 0.5, .2, -100, 0, '-100', 'none');
    simpleFade(".contact-text", 0.4, 0.5, 0.4, '0', 'none');
    popElement(".contact-btn", 2, 0.5, 0.2, '-600vh');
  }, []);

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
          <h3 className='contact-text'>Envie de me contacter ?</h3>
          <p className='contact-text'>Je me tiens à votre disposition pour toutes discussions</p>
        </div>
        <div className="contact-form--input">
          <div>
            <label htmlFor="name" className='contact-text'>Nom :</label>
            <input
              type="text"
              id="name"
              className="contact-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className='contact-text'>Email :</label>
            <input
              type="email"
              id="email"
              className="contact-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message" className='contact-text'>Message :</label>
            <textarea
              id="message"
              className="contact-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button id='submit' type="submit" className='contact-btn'>Envoyer</button>
      </form>
    </div>
  );
};

export default ContactForm;
