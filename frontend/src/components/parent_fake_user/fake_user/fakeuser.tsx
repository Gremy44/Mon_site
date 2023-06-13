import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

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

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    axios
      .post<User>('http://127.0.0.1:8000/api/fake-users/', formData)
      .then((response) => {
        console.log('Requête POST réussie :', response.data);
        setFormData({ username: '' });
        onPostSuccess(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la requête POST :', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
