/*
Task : Expensive computation ko lazy initializer ke saath vs bina ke compare karo.
*/

import { useState } from "react";

export default function LazyInitDemo() {
    // State Variables
    const [trigger , setTrigger] = useState(0);
    // const [valueA , setValueA] = useState(expensiveComputation());
    const [valueB , setValueB] = useState(() => expensiveComputation());

    return (
        <div className="m-10">
            <p>Expensive Value: {valueB}</p>
            <p>Trigger: {trigger}</p>
            <button className="bg-blue-300 cursor-pointer rounded p-2" onClick={() => setTrigger(t => t + 1)}>
                Re-render (Trigger + 1)
            </button>
        </div>
    )
};

function expensiveComputation() {
    console.log('💰 Expensive computation running...');
    let sum = 0;

    for (let i = 0; i < 1000000; i++) {
        sum += i;
    };

    return sum;
};

/*
👀 Kya Observe Karna Hai :-
    - Page load pe "Expensive computation running" 1 baar print hoga.
    - Button click karo multiple times.
    - "Expensive computation" dubara nahi print hoga (lazy version mein).
    - Ab lazy initializer hata ke direct call karo aur difference dekho.

💡 Learning Outcome :-
    - Lazy Initialization: Arrow function sirf mount pe execute hoti hai.
    - Performance: Expensive computation har render pe waste nahi hoti.
    - Use Case: localStorage read, heavy calculations, initial data.
*/