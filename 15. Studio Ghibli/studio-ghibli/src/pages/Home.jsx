import './index.css';
import ghibli from "../assets/ghibli.jpg"

export default function Home() {
    return (
        <>
            <h1 className="mt-15">Studio Ghibli Guide</h1>
            <p className="text-2xl font-extralight mb-15">
                Get to know all the movies made by Studio Ghibli through this guide.
            </p>
            <img src={ghibli} className="w-280"/>
        </>
    );
}