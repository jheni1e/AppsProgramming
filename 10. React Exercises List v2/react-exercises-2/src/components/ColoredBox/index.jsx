export default function ColoredBox({ width, height, color }) {
    return (
        <>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{width: width, height: height, backgroundColor: color }}></div>
        </div>
        <br/>
        </>
    );
}