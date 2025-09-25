import { useLocation } from "react-router-dom";
import './index.css';

export default function User() {
    const location = useLocation();
    const { user } = location.state || {};

    if (!user) return <p>Nenhum usuário selecionado.</p>


    return (
        <>
        <div className="m-10 bg-slate-200 text-black w-100 h-50 rounded-lg flex justify-center flex-col">
            <h2 className="font-bold text-3xl">Perfil do Usuário:</h2>
            <p className="text-md"><strong>Nome:</strong> {user.name}</p>
            <p className="text-md"><strong>Email:</strong> {user.email}</p>
            <p className="text-md"><strong>Telefone:</strong> {user.phone}</p>
        </div>
        </>
    );
}