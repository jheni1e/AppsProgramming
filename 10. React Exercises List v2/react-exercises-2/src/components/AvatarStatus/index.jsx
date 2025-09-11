export default function AvatarStatus({ image, isOnline }) {
    return (
        <>
            <img src={image} style={{ width: '300px', height: '300px' }}></img>
            {isOnline &&
            <h3>🟢 Online</h3>}
            {!isOnline &&
            <h3>🔴 Offline</h3>}
        </>
    );
}