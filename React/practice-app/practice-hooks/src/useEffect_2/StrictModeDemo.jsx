/*
Task : React 18 Strict Mode ka double effect observe karo.
*/

import { useEffect, useState } from "react"

export default function StrictModeDemo() {
    // State Variables
    const [count , setCount] = useState(0);

    console.log('🔄 Render');

    // useEffect
    useEffect(() => {
        console.log('⚡ Effect: Setting up subscription');

        const subscription = {
            id: Math.random().toString(36).substr(2, 9),
            active: true
        };

        console.log(`   Subscription ID: ${subscription.id}`);

        return () => {
            console.log(`🧹 Cleanup: Removing subscription ${subscription.id}`);
            subscription.active = false;
        };
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            <p><small>Check console for double invocation!</small></p>
        </div>
    )
};

/*
👀 Kya Observe Karna Hai :-
    - Development mode mein mount pe effect 2 baar run hoga
    - Pattern: Effect → Cleanup → Effect
    - Production build mein sirf 1 baar
    - Yeh intentional hai bugs catch karne ke liye

💡 Learning Outcome :-
    - Why Double?: React test karta hai ki cleanup sahi kaam kar rahi hai
    - Catch Bugs: Memory leaks, dangling subscriptions
    - Production: Normal single invocation
*/