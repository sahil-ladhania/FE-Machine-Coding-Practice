/*
Task : useEffect, useLayoutEffect aur render phase ka execution order observe karo.
*/

import { useEffect, useLayoutEffect, useState } from "react"

export default function EffectTimingDemo() {
    // State Variables
    const [count , setCount] = useState(0);

    console.log("1. Render Phase - count:", count);

    // useLayoutEffect
    useLayoutEffect(() => {
        console.log("2. useLayoutEffect (sync, before paint)");
        return () => {
            console.log('🧹 useLayoutEffect cleanup');
        };
    }, [count]);

    // useEffect
    useEffect(() => {
        console.log("3. useEffect (async, after paint)");
        return () => {
            console.log('🧹 useEffect cleanup');
        };
    }, [count]);

    console.log('4. Render Phase End');

    return (
        <div>
            <button className="bg-blue-400 rounded p-2 cursor-pointer m-4" onClick={() => setCount(c => c + 1)}>Increment</button>
            <p className="m-4">Count: {count}</p>
        </div>
    )
};

/*
👀 Kya Observe Karna Hai :-
    - Initial mount pe order dekho: Render → Layout Effect → Effect
    - Button click karo aur order dekho
    - Cleanup kab run ho raha hai observe karo
    - Order hamesha same rahega

💡 Learning Outcome :-
Execution Order -
    - Render Phase (sync)
    - DOM Mutation
    - useLayoutEffect (sync, before paint)
    - Browser Paint
    - useEffect (async, after paint)
Cleanup Order - Previous cleanup → New effect
*/