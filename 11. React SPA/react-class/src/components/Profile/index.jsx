import { useParams } from "react-router-dom";

export default function Profile() {
    const { name } = useParams();

    return (
        <>
            <h1>Perfil {name}</h1>
        </>
    );
}