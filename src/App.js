import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const result = await axios.get(
                    `https://react-app.onrender.com/users`
                );
                setUsers(result.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="App">
            {users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
};

export default App;
