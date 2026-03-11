import { useRef, useState } from "react";

export default function P4() {
    // State Variables
    const [counter, setCounter] = useState(0);

    // useRef
    const renderCount = useRef(0);
    renderCount.current++;

    // Handler Functions
    const Increment = () => {
        setCounter(prev => prev + 1);
    };

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q4. Build a component with a counter — use useRef to track how many times the component has re-rendered. Display the render count (it should NOT cause additional renders when updated).
                </h1>

                <div className="flex gap-4 items-center">
                    <button onClick={Increment} className="border p-2">Increment</button>
                    <p className="text-blue-800">Counter : {counter}</p>
                    <p className="text-blue-800">Rendered : {renderCount.current} times</p>
                </div>
            </div>
        </>
    );
};