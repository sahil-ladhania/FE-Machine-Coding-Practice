import { useCallback, useState } from "react";
import P1_Child from "./P1_Child";

export default function P1() {
    // State Variables
    const [counter , setCounter] = useState(0);

    const Increment = useCallback(() => {
        console.log("Increment function created!");
    }, []);

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q1. Build a parent component that passes a function to a child component. Without useCallback, the function is recreated every render. Wrap it in useCallback and explain when the reference stays stable.
                </h1>

                <button onClick={() => setCounter(c => c + 1)} className="border p-2 mb-4">
                    Re-render Parent ({counter})
                </button>

                <P1_Child Increment={Increment}/>
            </div>
        </>
    )
};