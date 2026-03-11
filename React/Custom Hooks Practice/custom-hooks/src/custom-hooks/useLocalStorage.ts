import { useState } from "react";

export const useLocalStorage = (key , initialValue) => {
    // State Variables
    const [storedValue , setStoredValue] = useState(() => {
        const stored = localStorage.getItem(key);
        return (stored !== null) ? JSON.parse(stored) : initialValue;
    });

    function setValue (newValue) {
        setStoredValue(newValue);
        localStorage.setItem(key , JSON.stringify(newValue));
    };

    return {
        value: storedValue,
        setValue
    };
};