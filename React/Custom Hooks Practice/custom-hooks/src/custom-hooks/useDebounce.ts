import { useEffect, useState } from "react";

export const useDebounce = (value , delay) => {
    // State Variables
    const [debouncedValue, setDebouncedValue] = useState(value);

    // useEffect
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timerId);
        };
    }, [value , delay]);

    return debouncedValue;
};