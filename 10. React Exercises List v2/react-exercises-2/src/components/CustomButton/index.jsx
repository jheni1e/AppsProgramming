import './index.css'

export default function CustomButton({ color, text }) {
    return (
        <>
            <button className='button' style={{ backgroundColor: color }}>{text}</button>
            <br/><br/>
        </>
    );
}