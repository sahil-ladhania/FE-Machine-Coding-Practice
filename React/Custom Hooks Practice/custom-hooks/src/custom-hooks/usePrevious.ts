import { useEffect, useRef } from "react";

export const usePrevious = (value) => {
    // useRef
    const counterRef = useRef(value);

    useEffect(() => {
        counterRef.current = value;
    }, [value]);

    return counterRef.current;
};