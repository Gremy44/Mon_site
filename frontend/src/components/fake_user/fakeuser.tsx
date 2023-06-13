import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface FormData {
  username: string;
}

const MyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/fake-users/", formData)
      .then((response) => {
        console.log("Requête POST réussie :", response.data);
        // Réinitialiser le formulaire si nécessaire
        setFormData({ username: ""});
      })
      .catch((error) => {
        console.error("Erreur lors de la requête POST :", error);
      });

    console.log(formData);
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
