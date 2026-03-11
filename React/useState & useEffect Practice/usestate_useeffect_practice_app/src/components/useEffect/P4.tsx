import { useEffect, useState } from "react"

export default function P4() {
    // State Variables
    const [text , setText] = useState("");

    // Handler Functions
    const handleTextChange = (e) => {
        setText(e.target.value);
    };
    
    // useEffect
    useEffect(() => {
        const timerId = setTimeout(() => {
            console.log(text);
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q4. Write a component with an input — after 500ms of no typing (debounce), log the current value. Use useEffect + clearTimeout in cleanup.
                </h1>

                <input className="border p-2" onChange={(e) => handleTextChange(e)} type="text" value={text} placeholder="Type Something..."/>
            </div>
        </>
    )
};