export default function CustomTitle({ text, size }) {
    return (
        <>
            {size === 1 &&
            <h1 style={{ fontWeight: 'normal', fontFamily: 'Helvetica' }}>{text}</h1>}
            {size === 2 &&
            <h2 style={{ fontWeight: 'normal', fontFamily: 'Helvetica' }}>{text}</h2>}
            {size === 3 &&
            <h3 style={{ fontWeight: 'normal', fontFamily: 'Helvetica' }}>{text}</h3>}
        </>
    );
}