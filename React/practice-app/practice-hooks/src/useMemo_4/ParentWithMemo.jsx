/*
Task : useMemo se child component re-render prevent karo.
*/

import React, { useMemo, useState } from "react";

export default function ParentWithMemo() {
    const [count, setCount] = useState(0);
    const [filter, setFilter] = useState('all');

    console.log('👨 Parent rendered!');

    // ❌ Without useMemo - new object every render
    // const data = { items: ['a', 'b', 'c'], filter };

    // ✅ With useMemo - stable reference
    const data = useMemo(() => {
        console.log('📦 Creating data object');
        return { items: ['a', 'b', 'c'], filter };
    }, [filter]);

    return (
        <div className="m-10">
            <p className="m-4">Parent Count: {count}</p>
            <button className="bg-blue-400 rounded p-2 cursor-pointer m-4" onClick={() => setCount(c => c + 1)}>
                Increment (shouldn't re-render child)
            </button>
            <button className="bg-blue-400 rounded p-2 cursor-pointer m-4" onClick={() => setFilter(f => f === 'all' ? 'active' : 'all')}>
                Toggle Filter (should re-render child)
            </button>
            <ExpensiveChild data={data} />
        </div>
    );
};

const ExpensiveChild = React.memo(({ data }) => {
    console.log('👶 Child rendered! Data:', data);
    return (
        <div style={{ border: '1px solid blue', padding: 10 }}>
            <p>Child Component</p>
            <p>Items: {data.items.join(', ')}</p>
        </div>
    );
});

/*
👀 Kya Observe Karna Hai :-
    - Increment click — sirf "Parent rendered" (child nahi)
    - Toggle Filter — dono render (because data changed)
    - useMemo hata do — dono buttons pe child render hoga

💡 Learning Outcome :-
    - useMemo + React.memo: Powerful optimization combo
    - Reference Stability: Same object = React.memo skips render
    - Fiber Connection: Same reference = reconciliation skipped
*/