import { useState } from "react";

export const useToggle = (initianValue?: boolean) => {
    // State Variables
    const [isTrue , setIsTrue] = useState(initianValue ?? false);

    // Handler Functions
    function toggle() {
        setIsTrue(prev => !prev);
    };

    return {
        value: isTrue,
        toggle
    };
};