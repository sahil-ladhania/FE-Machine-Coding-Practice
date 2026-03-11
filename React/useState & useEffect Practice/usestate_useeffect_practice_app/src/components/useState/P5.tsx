import { useState } from "react";

const items = [
    'React',
    'Node',
    'SQL',
    'Express'
];

export default function P5(){
    // State Variables
    const [list , setList] = useState(items);

    // Handler Functions
    const addNewItem = () => {
        setList([
            ...list,
            "New Item"
        ]);
    };

    const removeItem = (listIndex) => {
        setList(list.filter((_ , index) => index !== listIndex));
    };

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q5. Build a component with a list of items ['React','Node','SQL'] — a button "Add Item" that adds a new hardcoded item to the list. Another button next to each item to remove it.
                </h1>

                <button onClick={addNewItem} className="border p-2 m-2">Add New Item</button>

                {
                    list?.map((element , index) => {
                        return <>
                            <div key={index} className="flex items-center gap-4 mb-2">
                                <li className="text-blue-800 list-none">
                                    {element}
                                </li>
                                <button onClick={() => removeItem(index)} className="border p-2">Delete</button>
                            </div>
                        </>
                    })
                }
            </div>
        </>
    )
};