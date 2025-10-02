import './index.css';
import ghibli from "../assets/ghibli.jpg"

export default function Home() {
    return (
        <>
            <h1>Studio Ghibli Guide</h1>
            <img src={ghibli} />
        </>
    );
}