import { useEffect, useState } from 'react'
import axios from 'axios'

export default function List() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
    }

  return (
    <>
        {users.map(user => (
        <li key={user.id}>Olá, {user.name}</li>
      ))}
    </>
  )
}