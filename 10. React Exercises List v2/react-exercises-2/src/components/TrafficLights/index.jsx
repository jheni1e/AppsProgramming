import './index.css'

export default function TrafficLights({ currColor }) {
    return (
        <>
        {currColor === "green" &&
        <div className="column">
            <div className="light" style={{ backgroundColor: 'gainsboro' }}></div>
            <div className="light" style={{ backgroundColor: 'gainsboro' }}></div>
            <div className="light" style={{ backgroundColor: currColor }}></div>
        </div>}
        {currColor === "yellow" &&
        <div className="column">
            <div className="light" style={{ backgroundColor: 'gainsboro' }}></div>
            <div className="light" style={{ backgroundColor: currColor }}></div>
            <div className="light" style={{ backgroundColor: 'gainsboro' }}></div>
        </div>}
        {currColor === "red" &&
        <div className="column">
            <div className="light" style={{ backgroundColor: currColor }}></div>
            <div className="light" style={{ backgroundColor: 'gainsboro' }}></div>
            <div className="light" style={{ backgroundColor: 'gainsboro' }}></div>
        </div>}
        </>
    );
}