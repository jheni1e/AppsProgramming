import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Button() {
    const [dog, setDog] = useState({});

    const getDog = async () => {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        setDog(response.data);
    }

    useEffect(() => {
        getDog();
    }, [])

    return (
        <>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <img src={dog.message}></img>
            <button onClick={getDog}>Click here</button>
        </div>
        </>
    );
}