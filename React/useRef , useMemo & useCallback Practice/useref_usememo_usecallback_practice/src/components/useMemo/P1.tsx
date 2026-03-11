import { useMemo, useState } from "react"

export default function P1() {
    // State Variables
    const [text, setText] = useState("");
    const [numbers] = useState(() => 
        Array.from({length: 10000}, (_, i) => i + 1)
    );

    function calculateSum() {
        let s = 0;
        for(let i = 0; i < numbers.length; i++) {
            for(let j = 0; j < 1000000; j++) {} // fake delay
            s = s + numbers[i];
        }
        return s;
    };

    const sum = useMemo(() => {
        return calculateSum();
    }, [numbers]);

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q1. Build a component with a large number array (generate [1..10000] in state) and an input. Compute the sum of the array using useMemo so it doesn't recompute on every input keystroke.
                </h1>

                <div>
                    <input className="border p-2 mb-2" onChange={(e) => setText(e.target.value)} value={text} type="text" placeholder="Type Something..."/>
                    <p>Sum : {sum}</p>
                </div>
            </div>
        </>
    )
};