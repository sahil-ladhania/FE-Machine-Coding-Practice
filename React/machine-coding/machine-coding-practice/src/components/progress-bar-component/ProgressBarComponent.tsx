import { useState } from "react";

export default function ProgressBarComponent() {
    // State Variables
    const [progress, setProgress] = useState<number>(0);

    let currentProgressColor = "bg-red-500";
    if (progress > 30 && progress <= 70) {
        currentProgressColor = "bg-yellow-400";
    }
    else if (progress > 70) {
        currentProgressColor = "bg-green-500";
    };

    // Handler Functions
    const decrement10 = () => {
        if(progress > 0){
            setProgress(p => p - 10);
        };
    };

    const increment10 = () => {
        if(progress < 100){
            setProgress(p => p + 10);
        };  
    };

    return (
        <div className="flex flex-col items-center justify-center p-10">
            <h1 className="text-xl font-bold my-10">Progress Bar</h1>

            {/* Container for the Progress Bar */}
            <div className="w-full max-w-md bg-gray-200 rounded-full h-8 relative overflow-hidden border flex items-center justify-start"> 
                {/* Percentage Text - Isko center mein rakhne ke liye w-full aur text-center add kiya hai */}
                <span className="absolute w-full text-center font-bold text-sm z-10 text-black">
                    {progress}%
                </span>

                {/* The Dynamic Bar */}
                <div className={`h-full transition-all duration-300 ${currentProgressColor}`} style={{ width: `${progress}%` }}></div>
            </div>

            <div className="mt-10">
                <button 
                    onClick={decrement10} 
                    className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded cursor-pointer mr-2 transition-colors"
                >
                    - 10%
                </button>
                <button 
                    onClick={increment10} 
                    className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded cursor-pointer ml-2 transition-colors"
                >
                    + 10%
                </button>
            </div>
        </div>
    );
};