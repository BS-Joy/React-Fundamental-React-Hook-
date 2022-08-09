import React from "react";

export default function Click() {

    const [count, setCount] = React.useState(0);
    const [date, setDate] = React.useState(new Date());

    const tick = () => {
        console.log('ticking')
        setDate(new Date());
    }

    // for count state
    React.useEffect(() => {
        document.title = 'Clicked ' + count + ' times';
    }, [count]);

    // for date state
    React.useEffect(() => {
        console.log('Mount ticking');
        const interval = setInterval(tick, 1000);

        // do the cleanup 
        return () => {
            console.log('component unmounted')
            clearInterval(interval);
        };
    }, []);

    const clickHandle = () => {
        setCount((prevCount) => prevCount + 1);
    }

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <button type="button" onClick={clickHandle}>Clicke {count} time</button>

        </div>
    );
}