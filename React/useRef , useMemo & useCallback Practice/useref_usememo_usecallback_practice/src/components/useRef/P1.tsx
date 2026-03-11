import { useRef } from "react";

export default function P1() {
    // useRef
    const inputRef = useRef(null);

    // Handler Functions
    const focusOnInput = () => {
        inputRef?.current?.focus();
    };

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q1. Build a component with a text input and a "Focus" button — clicking the button focuses the input using useRef.
                </h1>

                <div>
                    <input className="border p-2" ref={inputRef} type="text" placeholder="Enter something..."/>
                    <button className="border p-2 ml-2" onClick={focusOnInput}>Focus on Input</button>
                </div>
            </div>
        </>
    )
};