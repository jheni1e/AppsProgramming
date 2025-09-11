export default function CustomWelcome({ name, hour }) {
    return (
        <>
            {hour === "manhã" &&
            <h3 style={{ fontWeight: 'normal', fontFamily: 'Helvetica' }}>Bom dia, {name}!</h3>}
            {hour === "tarde" &&
            <h3 style={{ fontWeight: 'normal', fontFamily: 'Helvetica' }}>Boa tarde, {name}!</h3>}
            {hour === "noite" &&
            <h3 style={{ fontWeight: 'normal', fontFamily: 'Helvetica' }}>Boa noite, {name}!</h3>}
        </>
    );
}