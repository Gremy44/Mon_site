import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

import { useEffect, useRef } from "react";
import { fadeX, simpleFade, popElement } from "../../../animations/myFadeAnimation"

interface FormData {
  username: string;
}

interface User {
  id: number;
  username: string;
  password: string;
  fake_username: string;
  age: number;
}

interface MyFormProps {
  onPostSuccess: (newUser: User) => void;
}

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
      password: '', // Remplacez la valeur appropriée pour password
      fake_username: '', // Remplacez la valeur appropriée pour fake_username
      age: 0, // Remplacez la valeur appropriée pour age
    };
  
    if (formData.username === '') {
      newUser.username = 'Ms Smith';
      setSubmittedUsername('Ms Smith');
    }

    axios
      .post<User>('http://127.0.0.1:8000/api/fake-users/', newUser)
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
        <p className="new-user">Bravo <strong className="new-user--name">- {submittedUsername} -</strong><br/>Bienvenu sur le <strong>'wall of fame'</strong></p>
      )}
    </div>
  );
};

export default MyForm;
