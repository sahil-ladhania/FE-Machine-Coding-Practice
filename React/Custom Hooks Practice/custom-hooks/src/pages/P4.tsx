import { useState } from "react";
import { useDebounce } from "../custom-hooks/useDebounce";

export default function P4() {
    // State Variables
    const [searchText, setSearchText] = useState("");

    // useDebounce
    const debouncedValue = useDebounce(searchText , 500);

    return (
        <div className="m-20">
            <h1 className="text-red-800 mb-4 text-lg font-bold">
                useDebounce Hook - Kisi value ko delay ke baad update karta hai. Jab user fast type kare ya fast changes aayein, toh har change pe action nahi lena — sirf ruk jaane ke baad lena. Ye wahi delay manage karta hai.
            </h1>

            <div>
                <input onChange={(e) => setSearchText(e.target.value)} className="border p-2" type="text" placeholder="Search Something..."/>
                <p>Searching for : {debouncedValue}...</p>
            </div>
        </div>
    )
};