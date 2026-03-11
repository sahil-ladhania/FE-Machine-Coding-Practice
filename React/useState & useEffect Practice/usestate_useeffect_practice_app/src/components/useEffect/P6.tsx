import { useEffect } from "react";

export default function P6({userId}) {
    // useEffect
    useEffect(() => {
        const getUser = async() => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            const data = await response.json();
            console.log(data);
        };

        getUser();
    }, [userId]);

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q6. Write a component with a userId prop — fetch https://jsonplaceholder.typicode.com/users/userId every time userId changes.
                </h1>
            </div>
        </>
    )
};