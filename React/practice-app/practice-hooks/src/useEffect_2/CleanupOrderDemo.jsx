/*
Task : Multiple effects with cleanup — kis order mein cleanup aur effect run hote hai?
*/

import { useEffect, useState } from "react"

export default function CleanupOrderDemo() {
    // State Variables
    const [roomId , setRoomId] = useState('general');

    // useEffect
    useEffect(() => {
        console.log(`✅ Connected to room: ${roomId}`);

        return () => {
            console.log(`❌ Disconnected from room: ${roomId}`);
        };
    }, [roomId]);

    useEffect(() => {
        console.log(`📊 Analytics: Entered ${roomId}`);

        return () => {
            console.log(`📊 Analytics: Left ${roomId}`);
        };
    }, [roomId]);

    return (
        <div>
            <button className="bg-blue-400 p-2 m-4 rounded cursor-pointer" onClick={() => setRoomId('random')}>Go to Random</button>
            <button className="bg-blue-400 p-2 m-4 rounded cursor-pointer" onClick={() => setRoomId('general')}>Go to General</button>
            <button className="bg-blue-400 p-2 m-4 rounded cursor-pointer" onClick={() => setRoomId('tech')}>Go to Tech</button>
            <p className="m-4">Current Room: {roomId}</p>
        </div>
    )
};

/*
👀 Kya Observe Karna Hai :-
    - Initial mount — dono effects run (Connected, Analytics)
    - Room change karo — pehle DONO cleanup, phir DONO effects
    - Order: Cleanup1 → Cleanup2 → Effect1 → Effect2
    - Cleanup mein purana roomId hai, effect mein naya

💡 Learning Outcome :-
    - Cleanup Timing: Saare cleanup pehle, saare effects baad mein
    - Closure Capture: Cleanup function purani value remember karta hai
    - Use Case: WebSocket disconnect before new connect
*/