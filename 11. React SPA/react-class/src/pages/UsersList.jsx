import { Link } from "react-router-dom";

export default function UsersList() {
    const users = [1, 2, 3, 4, 5];

    return (
        <>
        <h2>Lista de Usuários</h2>
        <ul>
            {users.map((id) => (
                <li key={id}>
                    <Link to={`/users/${id}`}>Usuário {id}</Link>
                </li>
            ))}
        </ul>
        </>
    )
}