/*
Task : Object/Array dependency ke saath infinite loop create aur fix karo.
*/

import { useEffect, useState } from "react"

export default function DependencyTrapDemo() {
    // State Variables
    const [count , setCount] = useState(0);
    const [effectRuns , setEffectRuns] = useState(0);

    // useEffect
    // const config = { id: 1 };

    console.log('🔄 Render #', effectRuns);

    useEffect(() => {
        console.log('⚡ Effect ran! Config:', config);
        setEffectRuns(e => e + 1);

        if (effectRuns > 5){
            return;
        };
    }, [config]);

    return (
        <div>
            <p>Effect Runs: {effectRuns}</p>
            <p>Count: {count}</p>
            <button onClick={() => setCount(c => c + 1)}>
                Trigger Re-render
            </button>
        </div>
    )
};

/*
👀 Kya Observe Karna Hai :-
    - Pehle useMemo hata ke dekho — infinite loop (5 pe ruk jayega safety se)
    - useMemo wapas lagao — stable, effect sirf 1 baar
    - Button click karo — useMemo ke saath effect nahi chalega

💡 Learning Outcome :-
    - Reference Equality: {} !== {} always true in JavaScript
    - Object.is(): React deps compare karta hai reference se
    - Solution: useMemo, primitive deps, ya move inside effect
*/