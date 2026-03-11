/*
Task : Ek component banao with 3 different states. Single click pe teeno states update karo aur dekho kitni baar re-render hota hai.
*/

import { useState } from "react";

export default function BatchingDemo() {
    // State Variables
    const [count , setCount] = useState(0);
    const [name , setName] = useState('');
    const [active , setActive] = useState(false);

    console.log("Component re-rendered !");

    // Handler Function
    const handleClick = () => {
        console.log("-----Button Clicked-----");

        setCount((prev) => prev + 1);
        console.log("-----setCount Called-----");

        setName("Sahil");
        console.log("-----setName Called-----");

        setActive(!active);
        console.log("-----setActive Called-----");

        console.log("-----All setState Done-----");
    };

    return (
        <div>
            <button className="p-2 bg-blue-400 rounded cursor-pointer m-10" onClick={handleClick}>Click Me</button>
            <p className="m-10">Count: {count}, Name: {name}, Active: {String(active)}</p>
        </div>
    )
}

/*
👀 Kya Observe Karna Hai :-
    - Button click karo
    - Console mein dekho — "Component Rendered" kitni baar print hua?
    - Kya teeno setState ke baad ek hi render hua?

💡 Learning Outcome :-
    - React 18 Automatic Batching: Chahe event handler ho ya setTimeout, React saare setState ko batch karta hai
    - Expected Output: "Component Rendered" sirf 1 baar print hoga, 3 baar nahi
    - Fiber Connection: Saare updates ek queue mein jaate hai, phir ek saath process hote hai
*/