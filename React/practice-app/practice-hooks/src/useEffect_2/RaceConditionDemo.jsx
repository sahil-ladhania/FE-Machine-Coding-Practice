/*
Task : Fast ID change pe race condition create aur fix karo.
*/

import { useEffect, useState } from "react"

export default function RaceConditionDemo() {
    // State Variables
    const [userId , setUserId] = useState(1);
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(false);

    // useEffect
    useEffect(() => {
        let cancelled = false;
        console.log(`🚀 Fetching user ${userId}...`);
        setLoading(true);
        
        // Simulate API with random delay
        const delay = Math.random() * 2000 + 500;
        console.log(`User ${userId} will take ${delay.toFixed(0)}ms`);
        
        setTimeout(() => {
            if (cancelled) {
                console.log(`🚫 User ${userId} fetch CANCELLED`);
                return;
            }
            console.log(`✅ User ${userId} data received`);
            setUser({ id: userId, name: `User ${userId}` });
            setLoading(false);
        }, delay);
        
        return () => {
            console.log(`🧹 Cleanup: Cancelling user ${userId} fetch`);
            cancelled = true;
        };
    }, [userId]);

    return (
        <div className="m-10">
            <p className="m-2">Selected: User {userId}</p>
            <p className="m-2">Loaded: {user ? user.name : 'None'} {loading && '(Loading...)'}</p>
            <button className="bg-blue-400 p-2 rounded cursor-pointer m-2" onClick={() => setUserId(1)}>User 1</button>
            <button className="bg-blue-400 p-2 rounded cursor-pointer m-2" onClick={() => setUserId(2)}>User 2</button>
            <button className="bg-blue-400 p-2 rounded cursor-pointer m-2" onClick={() => setUserId(3)}>User 3</button>
            <p className="m-2"><small>Quickly click different users!</small></p>
        </div>
    )
};

/*
👀 Kya Observe Karna Hai :-
    - Quickly User 1, 2, 3 click karo
    - Console mein dekho — purane fetches cancel ho rahe hai
    - Sirf last clicked user ka data show hoga
    - Without cancelled flag — wrong user data show ho sakta hai

💡 Learning Outcome :-
    - Race Condition: Slow response fast response ko overwrite kar sakti hai
    - Cancelled Flag: Cleanup mein set, effect mein check
    - Real World: API calls, WebSocket, timers mein zaroori
*/