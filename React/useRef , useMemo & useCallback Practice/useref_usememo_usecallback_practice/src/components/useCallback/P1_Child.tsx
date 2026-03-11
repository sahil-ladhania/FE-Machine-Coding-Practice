import { memo } from "react";

const P1_Child = memo(({ Increment }) => {
    console.log("Child re-rendered!");
    return (
        <div>
            <button className="border p-2" onClick={Increment}>Increment</button>
        </div>
    );
});

export default P1_Child;