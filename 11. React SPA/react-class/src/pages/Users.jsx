import { useNavigate, useParams } from "react-router-dom";

export default function Users() {
    const { id } = useParams();
    const isAdmin = id === "1"

    const navigate = useNavigate();

    const handleNavigate = () => {
        console.log("navegando...");
        navigate("/userslist");
    }

    return (
        <>
        {isAdmin &&
        <h1>Admin: {id}</h1>}
        {!isAdmin &&
        <h1>Usuário comum: {id}</h1>}
        <button onClick={handleNavigate}>Voltar</button>
        </>
    );
}