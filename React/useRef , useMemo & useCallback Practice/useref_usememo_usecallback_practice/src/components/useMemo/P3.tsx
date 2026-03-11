import { useMemo, useState } from "react"

export default function P3() {
    // State Variables
    const [isOn , setIsOn] = useState(false);

    // Handler Functions
    const handleToggle = () => {
        setIsOn(!isOn);
    };

    function expensiveOperation() {
        console.log("Expensive function ran!");
        for(let i = 0; i < 1000000; i++) {};
        return "Done";
    };

    const result = useMemo(() => expensiveOperation() , []);

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q3. Build a component that does an "expensive" operation (just a loop running 1 million times returning a value). Wrap it in useMemo. Add a separate unrelated state toggle to show that the expensive function does NOT rerun on unrelated re-renders.
                </h1>

                <div>
                    <button onClick={handleToggle} className="border p-2">{isOn ? "ON" : "OFF"}</button>
                </div>
            </div>
        </>
    )
};