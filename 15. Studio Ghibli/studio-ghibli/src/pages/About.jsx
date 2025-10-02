import './index.css'
import sticker4 from "../assets/sticker4.gif"

export default function About() {
    return (
        <>
            <h1 className="font-sans">About the Application</h1>

            <p className="text-xl w-200">
                This webpage was made to practice the use of React Hooks, such as UseEffect and UseState,
                API requests using Axios, routes through React Router and styling with Tailwind, which
                was learned in the Applications Programming classes at SENAI.
            </p>

            <img src={sticker4} className="ml-50" />
        </>
    );
}