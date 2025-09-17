import { useParams } from "react-router-dom";

export default function Products() {
    const { category, id } = useParams();

    return (
        <>
            <h1>Categoria: {category}<br/>ID: {id}</h1>
        </>
    );
}