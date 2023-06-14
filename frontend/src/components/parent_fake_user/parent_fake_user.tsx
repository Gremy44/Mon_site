import React, { useState } from 'react';
import axios from 'axios';
import MyForm from './fake_user/fakeuser';
import UserTable from './fake_user_table/fakeusertable';


interface User {
    id: number;
    username: string;
    password: string;
    fake_username: string;
    age: number;
}

const ParentComponent: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    const handlePostSuccess = async (newUser: User) => {
        setUsers([...users, newUser]);
        console.log(users, typeof(users))
        console.log(MyForm, typeof(MyForm))
        refreshData(); // Appeler la fonction refreshData pour actualiser les données
    };

    const refreshData = async () => {
        try {
            const response = await axios.get<User[]>('http://127.0.0.1:8000/api/fake-users/');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } 
    };

    return (
        <div>
            <MyForm onPostSuccess={handlePostSuccess} />
            <UserTable onPostSuccess={handlePostSuccess} />
        </div>
    );
};

export default ParentComponent;
