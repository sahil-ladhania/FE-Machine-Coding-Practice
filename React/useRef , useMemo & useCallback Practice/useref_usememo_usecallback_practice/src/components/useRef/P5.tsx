import { useRef, useState } from "react";

export default function P5() {
    // State Variables
    const [counter , setCounter] = useState(0);

    // useRef
    const prevCounterRef = useRef(0);

    // Handler Functions
    const Increment = () => {
        prevCounterRef.current = counter;
        setCounter(prev => prev + 1);
    };

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q5. Build a component that stores the previous value of a state variable using useRef. Show both current and previous value on screen.
                </h1>

                <div className="flex items-center gap-4">
                    <button onClick={Increment} className="border p-2">Increment</button>
                    <p className="text-blue-800 mx-2">Current Value : {counter}</p>
                    <p className="text-blue-800 mx-2">Previous Value : {prevCounterRef?.current}</p>
                </div>
            </div>
        </>
    )
};