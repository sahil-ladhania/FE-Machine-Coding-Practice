import { useEffect } from "react";

export default function P1() {
    // useEffect
    useEffect(() => {
        console.log("component mounted");

        return () => {
            console.log("component unmounted");
        };
    }, []);

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q1. Write a component that logs "component mounted" once on mount and "component unmounted" on cleanup.
                </h1>
            </div>
        </>
    )
};