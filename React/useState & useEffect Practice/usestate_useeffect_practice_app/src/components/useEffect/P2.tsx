import { useEffect, useState } from "react"

export default function P2() {
    // State Variables
    const [counter , setCounter] = useState(0);

    // Handler Functions
    const Increment = () => {
        setCounter(prev => prev + 1);
    };

    // useEffect
    useEffect(() => {
        console.log("Counter Changed to : " , counter);
    }, [counter]);

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4"> 
                    Q2. Write a component with a number state — use useEffect to log the number every time it changes.
                </h1>

                <button onClick={Increment} className="border p-2 mr-2">Increment</button>
                <span>{counter}</span>
            </div>
        </>
    )
};