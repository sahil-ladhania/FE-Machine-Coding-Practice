/*
Task : useRef aur useState ka re-render behavior compare karo.
*/

import { useRef, useState } from "react";

export default function RefVsStateDemo() {
    // State Variables
    const [stateCount , setStateCount] = useState(0);
    const refCount = useRef(0);
    const renderCount = useRef(0);

    renderCount.current = renderCount.current + 1;
    console.log('🔄 Render #', renderCount.current);

    // useRef

    // Handler Functions
    const incrementState = () => {
        setStateCount(prev => prev + 1);
        console.log('State will be:', stateCount + 1);
    };

    const incrementRef = () => {
        refCount.current = refCount.current + 1;
        console.log('Ref is now:', refCount.current);
        console.log('But UI shows:', refCount.current);
    };

    const forceRender = () => {
        setStateCount(prev => prev);
    };

    return (
        <div>
            <button className="bg-blue-400 p-2 rounded cursor-pointer m-4" onClick={incrementState}>Increment State</button>
            <button className="bg-blue-400 p-2 rounded cursor-pointer m-4" onClick={incrementRef}>Increment Ref (no re-render!)</button>
            <button className="bg-blue-400 p-2 rounded cursor-pointer m-4" onClick={forceRender}>Force Re-render</button>

            <p className="m-4">State Count: {stateCount}</p>
            <p className="m-4">Ref Count (from render): {refCount.current}</p>
            <p className="m-4">Render Count: {renderCount.current}</p>
        </div>
    )
};

/*
👀 Kya Observe Karna Hai :-
    - "Increment State" — UI updates, render count badhta hai
    - "Increment Ref" — Console mein value badhi, but UI same!
    - "Force Re-render" — Ab ref ki value UI mein dikhti hai

💡 Learning Outcome :-
    - useRef: Mutate without re-render
    - useState: Triggers re-render
    - Use Case: Values that don't need UI update (timers, previous values)
*/