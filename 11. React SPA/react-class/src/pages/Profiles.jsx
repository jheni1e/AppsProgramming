import { useParams } from "react-router-dom";

export default function Profiles() {
    const { name } = useParams();

    return (
        <>
            <h1>Perfil: {name}</h1>
        </>
    );
}