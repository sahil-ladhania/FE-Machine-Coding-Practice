import { useState } from "react";

export default function P1(){
    // State Variables
    const [counter , setCounter] = useState(0);

    // Handler Functions
    const Increment = () => {
        console.log("Incrementing");
        setCounter(prev => prev + 1);
    };

    const Decrement = () => {
        console.log("Decrementing");
        if(counter > 0){
            setCounter(prev => prev - 1);
        }
        else{
            alert("You cannot decrement below 0 !!!");
        };
    };

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q1. Build a counter component — display count, 2 buttons: Increment and Decrement. Decrement should not go below 0.
                </h1>

                {/* Counter Display and Buttons */}
                <div className="flex gap-4 items-center"> 
                    <button onClick={Increment} className="border p-2">Increment</button>
                    <p>Counter Value : {counter}</p>
                    <button onClick={Decrement} className="border p-2">Decrement</button>
                </div>
            </div>
        </>
    )
};