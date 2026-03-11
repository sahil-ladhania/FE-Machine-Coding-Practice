import { useState } from "react";
import { usePrevious } from "../custom-hooks/usePrevious"

export default function P2() {
    // State Variables
    const [counter , setCounter] = useState(0);

    // usePrevious
    const previousValue = usePrevious(counter);

    // Handler Functions
    const Increment = () => {
        setCounter(prev => prev + 1);
    };

    const Decrement = () => {
        if(counter > 0){
            setCounter(prev => prev - 1);
        };
    };

    return (
        <div className="m-20">
            <h1 className="text-red-800 mb-4 text-lg font-bold">
                usePrevious Hook - Kisi bhi value ka pichla (previous) value yaad rakhta hai. Jab state change ho, toh pehle wali value access karne ke liye use karo.
            </h1>

            <div className="flex items-center gap-4">
                <button onClick={Increment} className="border p-2">Increment</button>
                <p>{counter}</p>
                <button onClick={Decrement} className="border p-2">Decrement</button>
            </div>

            <div className="mt-4">
                <p className="text-blue-800">
                    Current Value : {counter}
                </p>
                <p className="text-blue-800">
                    Previous Value : {previousValue}
                </p>
            </div>
        </div>
    )
};