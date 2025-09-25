import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './index.css';

export default function List() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
    }

    const openUserProfile = (user) => {
        navigate('/user', { state: { user }})
    }

  return (
    <>
        <h1 className="font-bold">Users</h1>
        <br/>
        <ul className="w-100 h-110 bg-slate-200 flex justify-center flex-col rounded-lg">
            {users.map(user => (
                <li
                key={user.id}
                onClick={(() => openUserProfile(user))}
                style={{ cursor: 'pointer', marginBottom: '8px' }}
                className="font-mono text-xl">
                    ▸ {user.name}
                </li>
            ))}
      </ul>
    </>
  );
}