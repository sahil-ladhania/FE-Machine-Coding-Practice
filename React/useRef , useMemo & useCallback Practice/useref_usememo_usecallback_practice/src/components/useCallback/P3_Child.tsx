import { memo } from "react";

const P3_Child = memo(({ handleSearch, searchText }) => {
    console.log("Child re-rendered!");
    return (
        <div>
            <input onChange={handleSearch} value={searchText} className="border p-2" placeholder="Search..."/>
        </div>
    );
});

export default P3_Child;