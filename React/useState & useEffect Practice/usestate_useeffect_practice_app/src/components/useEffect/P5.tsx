import { useEffect, useState } from "react";

export default function P5() {
    const [counter , setCounter] = useState(0);

    // useEffect
    useEffect(() => {
        const timerId = setInterval(() => {
            setCounter(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(timerId);
            console.log("Timer Clear Hogya");
        }
    }, []);

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q5. Write a component that starts a setInterval counter on mount — increments every second. Clear the interval on unmount.
                </h1>

                <span>{counter}</span>
            </div>
        </>
    )
};