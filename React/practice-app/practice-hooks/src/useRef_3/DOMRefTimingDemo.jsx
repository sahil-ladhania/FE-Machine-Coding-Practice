/*
Task : DOM ref kab available hoti hai observe karo.
*/

import { useEffect, useLayoutEffect, useRef, useState } from "react"

export default function DOMRefTimingDemo() {
    // useRef
    const divRef = useRef(null);

    // State Variables
    const [dimensions , setDimensions] = useState({ width: 0 , height: 0 });

    console.log('During render, ref is:', divRef.current);

    // useLayoutEffect
    useLayoutEffect(() => {
        console.log('useLayoutEffect, ref is:', divRef.current);
        
        if (divRef.current) {
            const rect = divRef.current.getBoundingClientRect();
            console.log('Dimensions:', rect.width, rect.height);
        };
    }, []);

    // useEffect
    useEffect(() => {
        console.log('useEffect, ref is:', divRef.current);

        if (divRef.current) {
            setDimensions({
                width: divRef.current.offsetWidth,
                height: divRef.current.offsetHeight
            });
        };
    }, []);
    
    return (
        <div className="m-10">
            <div 
                ref={divRef} 
                style={{ 
                width: 200, 
                height: 100, 
                background: 'lightblue',
                padding: 20 
                }}
            >
                Measure Me!
            </div>
            <p>Width: {dimensions.width}px</p>
            <p>Height: {dimensions.height}px</p>
        </div>
    )
};

/*
👀 Kya Observe Karna Hai :-
    - Render phase mein ref = null (first render)
    - useLayoutEffect mein ref = DOM element
    - useEffect mein bhi ref = DOM element
    - Order: Render(null) → Layout(DOM) → Effect(DOM)

💡 Learning Outcome :-
    - Ref Timing: Attached during commit phase
    - useLayoutEffect: Best for DOM measurements
    - Render Phase: Don't rely on ref being set
*/