import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
    id: number;
    username: string;
    password: string;
    fake_username: string;
    age: number;
}

interface MyTableProps {
    onPostSuccess: (newUser: User) => void;
}

const UserTable: React.FC<MyTableProps> = ({ onPostSuccess }) => {
  // fill default value for users
    const [users, setUsers] = useState<User[]>([
        {
            id: 500,
            username: 'Anonymous',
            password: 'Nope',
            fake_username: 'FakeAnonymous',
            age: 0,
        },
     ]);

    useEffect(() => {
        axios
            .get<User[]>('http://127.0.0.1:8000/api/fake-users/')
            .then((response) => {
                console.log('Requête GET réussie :', response.data);
                setUsers(response.data);
            })
            .catch((error) => {
                console.error('Erreur lors de la requête GET :', error);
            });
    }
        , [onPostSuccess]);

    return (
        <div id="table-fake-users">
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Fake Username</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.fake_username}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div id="table-fake-users__desc">
                <p>Voilà la liste des dernières personnes ayant rentré leurs prénoms ou pseudos, vous pouvez la retrouver à cette adresse : <br /> http://127.0.0.1:8000/api/fake-users/</p>
                <p>Votre prénom est joli mais un pseudo généré aléatoirement par un programme en faisant une requête API c'est bien mieux pour se vendre. Alors bonjour à vous <strong>{users[0]?.fake_username}</strong> !</p>
            </div>
        </div>
    );
}

export default UserTable;