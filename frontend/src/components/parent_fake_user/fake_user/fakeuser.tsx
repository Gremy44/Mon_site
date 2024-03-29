import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
// import dotenv from 'dotenv';

import { useEffect, useRef } from "react";
import { fadeX, simpleFade, popElement } from "../../../animations/myFadeAnimation"
import ee_3 from "../../../static/images/ee_3.png";

interface FormData {
  username: string;
}

// dotenv.config();
interface User {
  id: number;
  username: string;
  fake_username: string;
  age: number;
}

interface MyFormProps {
  onPostSuccess: (newUser: User) => void;
}

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    'Authorization': 'COUCOU LA', // Ma clef API
    'Content-Type': 'application/json',
  },
});

const MyForm: React.FC<MyFormProps> = ({ onPostSuccess }) => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
  });

  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [submittedUsername, setSubmittedUsername] = useState<string | null>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    setIsButtonPressed(true);
    setSubmittedUsername(formData.username);

    const newUser: User = {
      id: 0, // Remplacez la valeur appropriée pour id
      username: formData.username,
      fake_username: '', // Remplacez la valeur appropriée pour fake_username
      age: 0, // Remplacez la valeur appropriée pour age
    };
  
    if (formData.username === '') {
      newUser.username = 'Ms Smith';
      setSubmittedUsername('Ms Smith');
    }

    axiosInstance
      .post<User>('fake-users/', newUser)
      .then((response) => {
        console.log('Requête POST réussie :', response.data);
        setFormData({ username: '' });
        onPostSuccess(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la requête POST :', error);
      });
  };

  useEffect(() => {
    fadeX("#username", 0, 0.5, 0, -100, 0, '-400', 'none');
    simpleFade(".fake-user-text", 0, 0.5, 0.4, '-400', 'none');
    popElement("#btn-fake-user", 0, 0.5, 0, '-400');
  }, []);

  return (
    <div id="submit-fake-user">
      {!isButtonPressed && (
        <form onSubmit={handleSubmit}>
          <div>
            <h3 className='fake-user-text'>Faisons connaissance</h3>
            <label htmlFor="username" className='fake-user-text'>Entrez votre prénom :</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <button id='btn-fake-user' type="submit">Submit</button>
        </form>
      )}
      {isButtonPressed && submittedUsername && (
        <div>
          <p className="new-user">Bravo <strong className="new-user--name">- {submittedUsername} -</strong><br/>Bienvenu sur le <strong>'wall of fame'</strong></p>
          <img src={ee_3} alt="ee_3" className="ee_3" />
        </div>
      )}
    </div>
  );
};

export default MyForm;
