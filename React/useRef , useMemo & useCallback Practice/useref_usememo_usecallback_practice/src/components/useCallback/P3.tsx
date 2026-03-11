import { useCallback, useState } from "react";
import P3_Child from "./P3_Child";

export default function P3() {
    // State Variables
    const [searchText , setSearchText] = useState("");

    // Hander Functions
    const handleSearch = useCallback((e) => {
        setSearchText(e.target.value);
    }, []);

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q3. Build a search component — pass a handleSearch function to a child SearchBar. Wrap it in useCallback with the correct dependency array.
                </h1>

                <P3_Child handleSearch={handleSearch} searchText={searchText}/>
            </div>
        </>
    )
};