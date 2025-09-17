import { useParams } from "react-router-dom";

export default function Users() {
    const { id } = useParams();
    const isAdmin = id === "1"

    return (
        <>
        {isAdmin &&
        <h1>Admin: {id}</h1>}
        {!isAdmin &&
        <h1>Usuário: {id}</h1>}
        </>
    );
}