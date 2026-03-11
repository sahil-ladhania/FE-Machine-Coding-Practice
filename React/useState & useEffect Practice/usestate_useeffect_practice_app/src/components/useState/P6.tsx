import { useState } from "react";

export default function P6(){
    // State Vairables
    const [items , setItems] = useState<string[]>([]);

    // Handler Functions
    const AddItem = () => {
        setItems(prev => [
            ...prev,
            "New Item"
        ]);
    };

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q6. Build a component where clicking "Add" pushes a new item to an array state — use functional updater so you never mutate the previous array directly.
                </h1>

                <div>
                    <button onClick={AddItem} className="border p-2 mb-4">Add</button>
                    {
                        items?.map((element , index) => {
                            return <>
                                <li key={index}>{element}</li>
                            </>
                        })
                    }
                </div>
            </div>
        </>
    );
};