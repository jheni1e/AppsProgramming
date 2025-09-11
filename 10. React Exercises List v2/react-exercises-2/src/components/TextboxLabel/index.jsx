export default function TextboxLabel({ label, placeholder }) {
    return (
        <>
            <h3 style={{ fontFamily: 'Helvetica' }}>
                {label}
                <br/>
                <input type="text" placeholder={placeholder}>
            </input></h3>
        </>
    );
}