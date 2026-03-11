import { useRef, useState } from "react";

export default function P6() {
    // State Variables
    const [user , setUser] = useState(null);

    // useRef
    const intervalRef = useRef(null);

    // Handler Functions
    const startPolling = () => {
        intervalRef.current = setInterval(async() => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            const data = await response.json();
            setUser(data);
        }, 3000);
    };

    const stopPolling = () => {
        clearInterval(intervalRef?.current);
    };

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q6. Build a polling component — use useRef to store the interval ID so it can be cleared from anywhere in the component without stale closure issues.
                </h1>

                <div>
                    <button onClick={startPolling} className="border p-2 mx-2">Start Polling</button>
                    <button onClick={stopPolling} className="border p-2">Stop Polling</button>
                </div>
            </div>
        </>
    )
};