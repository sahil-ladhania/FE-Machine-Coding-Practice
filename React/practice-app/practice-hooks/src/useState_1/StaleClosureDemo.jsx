/*
Task : Ek counter banao with setInterval. Direct count use karo (functional update nahi) aur dekho kya hota hai.
*/

import { useState } from "react";

export default function StaleClosureDemo() {
    // State Variable
    const [count, setCount] = useState(0);

    console.log('Render - Count : ' , count);

    // Handler Functions
    const startBrokenTimer = () => {
        setInterval(() => {
            console.log('Timer sees count:', count);
            setCount(count + 1);
        }, 1000);
    };

    const startFixedTimer = () => {
        setInterval(() => {
            setCount((prev) => {
                console.log('Timer sees count:', prev);
                return (prev + 1);
            });
        }, 1000);
    };

    return (
        <div className="m-10">
            <button className="m-4 p-2 bg-blue-300 rounded cursor-pointer" onClick={startBrokenTimer}>Start Broker Timer</button>
            <button className="m-4 p-2 bg-blue-300 rounded cursor-pointer" onClick={startFixedTimer}>Start Fixed Timer</button>
            <p className="m-4">Count: {count}</p>
        </div>
    )
};

/*
👀 Kya Observe Karna Hai :-
    - Pehle "Broken Timer" click karo — count 0 se 1 pe atak jayega
    - Page refresh karo
    - Ab "Fixed Timer" click karo — count properly increment hoga
    - Console logs compare karo

💡 Learning Outcome :-
    - Closure Capture: count variable closure mein capture hota hai creation time pe
    - Functional Update: c => c + 1 mein React latest value pass karta hai
    - Interview Gold: Yeh common interview question hai!
*/