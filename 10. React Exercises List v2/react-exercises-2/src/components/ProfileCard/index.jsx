import './index.css'

export default function ProfileCard({ name, age, job }) {
    return (
        <>
            <div className='card'>
                <h4 className='text'>Nome: {name}<br/>Idade: {age}<br/>Job: {job}</h4>
            </div>
            <br/>
        </>
    );
}