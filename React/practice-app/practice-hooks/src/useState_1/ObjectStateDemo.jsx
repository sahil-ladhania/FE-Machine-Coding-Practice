/*
Task : Object state ke saath mutation vs new object ka difference observe karo.
*/

import { useState } from "react"

export default function ObjectStateDemo() {
    // State Variables
    const [user , setUser] = useState({
        name: 'Sahil',
        age: 25
    });

    console.log('🔄 Rendered! User:', user);

    // Handler Functions
    const mutateAge = () => {
        user.age = user.age + 1;
        console.log('After mutation:', user);
        setUser(user);
    };

    const updateAge = () => {
        const newUser = {
            ...user,
            age: user.age + 1
        };
        console.log('New object:', newUser);
        console.log('Same reference?', newUser === user);
        setUser(newUser);
    };

    return (
        <div className="m-10">
            <p className="m-2">Name: {user.name}, Age: {user.age}</p>
            <button className="bg-blue-300 p-2 rounded cursor-pointer m-2" onClick={mutateAge}>Mutate Age (Wrong)</button>
            <button className="bg-blue-300 p-2 rounded cursor-pointer m-2" onClick={updateAge}>Update Age (Correct)</button>
        </div>
    )
};

/*
👀 Kya Observe Karna Hai :-
    - "Mutate Age" click karo — UI update nahi hoga!
    - Console mein age change dikhega, but "Rendered" nahi print hoga
    - "Update Age" click karo — UI update hoga
    - "Same reference?" false dikhega

💡 Learning Outcome :-
    - Object.is() Comparison: React reference equality check karta hai
    - Immutability: Naya object banana zaroori hai re-render ke liye
    - Fiber Connection: Same reference = bailout, no re-render scheduled
*/