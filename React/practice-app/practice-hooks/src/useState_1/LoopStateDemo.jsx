/*
Task : Loop mein setState call karo aur dekho final value kya aati hai.
*/

import { useState } from "react";

export default function LoopStateDemo() {
    // State Variables
    const [count , setCount] = useState(0);

    console.log('🔄 Rendered! Count:', count);

    // Handler Functions
    const incrementWrong = () => {
        console.log('----Wrong Way----');

        for(let i = 0 ; i < 5 ; i++){
            console.log(`Loop ${i}: count is ${count}`);
            setCount(count + 1);
        };
    };

    const incrementRight = () => {
        console.log('----Right Way----');
        for(let i = 0 ; i < 5 ; i++){
            setCount((prev) => {
                console.log(`Loop ${i}: c is ${prev}`);
                return (prev + 1);
            });
        };
    };

    return (
        <div className="m-10">
            <button className="bg-blue-400 rounded cursor-pointer p-2 m-2" onClick={incrementWrong}>Add 5 (Wrong)</button>
            <button className="bg-blue-400 rounded cursor-pointer p-2 m-2" onClick={incrementRight}>Add 5 (Correct)</button>
            <button className="bg-blue-400 rounded cursor-pointer p-2 m-2" onClick={() => setCount(0)}>Reset</button>
            <p className="m-2">Count: {count}</p>
        </div>
    )
};

/*
👀 Kya Observe Karna Hai :-
    - "Add 5 (Wrong)" — Count sirf 1 badhega, 5 nahi!
    - Console mein dekho — har loop mein count 0 hai
    - "Add 5 (Correct)" — Count 5 se badhega
    - Console mein dekho — c progressively increase ho raha hai (0,1,2,3,4)

💡 Learning Outcome :-
    - Update Queue: Updates queue mein jaate hai, immediately apply nahi hote
    - Functional Updates: React latest value inject karta hai
    - Fiber Connection: Queue process hoti hai next render mein
*/