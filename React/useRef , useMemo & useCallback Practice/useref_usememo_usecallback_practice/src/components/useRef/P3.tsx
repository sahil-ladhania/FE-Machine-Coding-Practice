import { useRef, useState } from "react";

export default function P3() {
    // State Variables
    const [text , setText] = useState("");

    // useRef
    const inputRef = useRef(null);

    // Handler Functions
    const clearStateAndFocus = () => {
        setText("");
        inputRef?.current?.focus();
    };

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q3. Build a component with an input — a "Clear" button that both clears the state AND focuses the input using ref.
                </h1>

                <div>
                    <input onChange={(e) => setText(e.target.value)} ref={inputRef} value={text} className="border p-2" type="text" placeholder="Enter something..."/>
                    <button onClick={clearStateAndFocus} className="border p-2">Clear</button>
                </div>
            </div>
        </>
    )
};