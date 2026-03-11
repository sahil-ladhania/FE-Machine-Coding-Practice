import { useState } from "react";

export default function P2(){
    // State Variables
    const [isOn , setIsOn] = useState(false);

    // Handler Functions
    const toggleBehaviour = () => {
        console.log("Toggling");
        setIsOn(!isOn);
    };
    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q2. Build a toggle component — a button that toggles between "ON" and "OFF" text and changes background color accordingly.
                </h1>
                
                <div className={`min-h-screen ${isOn ? "bg-blue-300" : "bg-white"}`}>
                    <button onClick={toggleBehaviour} className="border p-2">
                        {isOn ? "ON" : "OFF"}
                    </button>
                </div>
            </div>
        </>
    )
};
