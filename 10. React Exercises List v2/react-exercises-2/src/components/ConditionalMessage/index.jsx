export default function ConditionalMessage({ isLogged }) {
    return (
        <>
            {isLogged &&
            <h4 style={{ fontWeight: 'normal', fontFamily: 'Helvetica' }}>Bem-vindo de volta!</h4>}
            {!isLogged &&
            <h4 style={{ fontWeight: 'normal', fontFamily: 'Helvetica' }}>Por favor, faça login.</h4>}
        </>
    );
}