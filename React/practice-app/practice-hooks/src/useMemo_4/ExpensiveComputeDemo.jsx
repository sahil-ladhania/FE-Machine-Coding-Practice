/*
Task : Heavy computation ko memoize karo aur performance difference measure karo.
*/

import { useMemo, useState } from "react";

export default function ExpensiveComputeDemo() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    // Expensive computation
    const computeExpensive = (num) => {
        console.log('💰 Computing expensive value...');
        console.time('Computation');
        let result = 0;
        for (let i = 0; i < 100000000; i++) {
            result += num;
        }
        console.timeEnd('Computation');
        return result;
    };

    // ❌ Without useMemo - runs on EVERY render
    // const expensiveValue = computeExpensive(count);

    // ✅ With useMemo - runs only when count changes
    const expensiveValue = useMemo(() => {
        return computeExpensive(count);
    }, [count]);

    console.log('🔄 Render');

    return (
        <div className="m-10">
            <p>Expensive Value: {expensiveValue}</p>
            <p>Count: {count}</p>
            <button className="bg-blue-400 p-2 rounded cursor-pointer my-4" onClick={() => setCount(c => c + 1)}>
                Change Count (triggers compute)
            </button>
            <br /><br />
            <input
                className="border"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Type here (no compute)"
            />
        </div>
    );
}

/*
👀 Kya Observe Karna Hai :-
    - Input mein type karo — computation nahi honi chahiye
    - Count button — computation hogi
    - useMemo hata ke type karo — har keystroke pe lag!
    - console.time se actual ms difference dekho

💡 Learning Outcome :-
    - Memoization: Skip computation if deps unchanged
    - When to Use: >10ms computations
    - Deps Array: Same as useEffect — reference equality
*/