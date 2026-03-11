import { useState } from "react";

export default function P7(){
    // State Variables
    const [user , setUser] = useState({
        user: {
            name: "",
            age: 0
        }
    });

    // Handler Functions
    const handleNameChange = (nameValue) => {
        setUser(prev => ({
            ...prev,
            user: {
                ...prev.user,
                name: nameValue
            }
        }));
    };

    const handleAgeChange = (ageValue) => {
        setUser(prev => ({
            ...prev,
            user: {
                ...prev.user,
                age: ageValue
            }
        }));
    };

    return (
        <>
            <div className="m-10">
                <h1 className="text-red-800 mb-4">
                    Q7. Build a component with a nested object state — update only name without losing age using spread.
                </h1>

                <div>
                    <input className="border p-2 mr-2" onChange={(e) => handleNameChange(e.target.value)} value={user.user.name} type="text" name="name" placeholder="Enter Name..."/>
                    <input className="border p-2" onChange={(e) => handleAgeChange(e.target.value)} value={user.user.age} type="number" name="age" placeholder="Enter Age..."/>
                    <p className="text-blue-800">                
                        Name: {user?.user?.name}
                    </p>
                    <p className="text-blue-800">
                        Age: {user?.user?.age}
                    </p>
                </div>
            </div>
        </>
    );
};