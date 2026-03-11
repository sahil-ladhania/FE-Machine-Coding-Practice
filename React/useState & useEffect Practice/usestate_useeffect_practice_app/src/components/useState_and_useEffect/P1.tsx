import { useState } from "react";

const names = [
    "sahil",
    "harshit",
    "asha",
    "binod",
    "hamd",
    "gorak"
];

export default function P1() {
    // State Variables
    const [searchText , setSearchText] = useState("");

    // Handler Functions
    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q1. Build a searchable list — input + array of names. Filter the list live as user types (no extra library).
                </h1>

                <div>
                    <input onChange={(e) => handleInputChange(e)} value={searchText} className="border p-2" type="text" placeholder="search..."/>

                    {
                        names?.filter((name) => name.includes(searchText)).map((name , index) => {
                            return <>
                                <li className="list-none my-2" key={index}>{name}</li>
                            </>
                        })
                    }
                </div>
            </div>
        </>
    )
};