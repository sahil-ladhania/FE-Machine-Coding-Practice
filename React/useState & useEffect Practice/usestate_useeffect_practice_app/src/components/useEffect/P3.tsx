import { useEffect, useState } from "react"

export default function P3() {
    // State Variables
    const [user , setUser] = useState({
        userId: null,
        title: "",
        completed: false
    });
    
    // useEffect
    useEffect(() => {
        const getUser = async() => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
            const data = await response.json();
            setUser(data);
        };

        getUser();
    }, []);

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q3. Write a component that fetches from https://jsonplaceholder.typicode.com/todos/1 on mount and displays the title.
                </h1>

                <div>
                    <h1>User Details : </h1>
                    <ul>
                        <li>userId: {user?.userId}</li>
                        <li>title: {user?.title}</li>
                        <li>completed: {String(user?.completed)}</li>
                    </ul>
                </div>
            </div>
        </>
    )
};