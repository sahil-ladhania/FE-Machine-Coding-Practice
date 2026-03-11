import { useState } from "react"

export default function P3(){
    // State Variables
    const [charCount , setCharCount] = useState(0);

    // Handler Functions
    const CountCharacters = () => {
        const text = e.target.value;
        setCharCount(text.length);
    };

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q3. Build a component with a text input — display the live character count below the input as user types.
                </h1>

                <div>
                    <input onChange={(e) => CountCharacters(e)} className="border p-2 mb-4" type="text" placeholder="Enter something...."/>
                    <p className="text-blue-800">Character Count as of now : {charCount}</p>
                </div>
            </div>
        </>
    )
};