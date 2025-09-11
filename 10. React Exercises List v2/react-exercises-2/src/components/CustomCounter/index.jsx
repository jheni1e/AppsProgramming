import { useState } from "react";
import './index.css'

export default function CustomCounter({ start, step }) {
    const [count, setCount] = useState(start);

    const increase = () => {
        setCount(count => count + step)
    }

    const decrease = () => {
        setCount(count => count - step)
    }

    return (
        <>
            <div className="buttons">
                <button onClick={increase} style={{ width: '80px', height: '80px'}}>+</button>
                <h3>O contador agora está em {count}</h3>
                <button onClick={decrease} style={{ width: '80px', height: '80px'}}>-</button>
            </div>
        </>
    );
}