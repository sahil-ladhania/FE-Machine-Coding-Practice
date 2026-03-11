import { useState } from "react";

export default function P4(){
    // State Variables
    const [user , setUser] = useState({
        name: "",
        email: ""
    });

    // Handler Functions
    const handleNameChange = (name) => {
        setUser({
            ...user,
            name
        });
    };

    const handleEmailChange = (email) => {
        setUser({
            ...user,
            email
        })
    };

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q4. Build a component that stores as a single state object — two inputs that update the correct field without losing the other.
                </h1>

                <div>
                    <input onChange={(e) => handleNameChange(e.target.value)} value={user.name} className="border p-2 mr-2" type="text" name="name" placeholder="Enter Name..." />
                    <input onChange={(e) => handleEmailChange(e.target.value)} value={user.email} className="border p-2" type="text" name="email" placeholder="Enter Email..." />
                    <p className="text-blue-800 m-2">
                        Name : {user.name}
                    </p>
                    <p className="text-blue-800 m-2">
                        Email : {user.email}
                    </p>
                </div>
            </div>
        </>
    )
};