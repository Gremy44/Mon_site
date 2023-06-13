import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
    id: number;
    username: string;
    password: string;
    fake_username: string;
    age: number;
}



const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<User[]>('http://127.0.0.1:8000/api/fake-users/');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePostSuccess = (newUser: User) => {
    setUsers([newUser, ...users]);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
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
    </div>
  );
};

export default UserTable;
