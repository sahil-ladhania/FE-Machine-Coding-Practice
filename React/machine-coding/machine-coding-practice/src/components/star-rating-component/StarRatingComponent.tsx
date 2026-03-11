import { Star } from "lucide-react";
import { useState } from "react";

export default function StarRatingComponent() {
    // State Variables
    const [currentRating , setCurrentRating] = useState<number>(0);
    const [tempRating , setTempRating] = useState<number>(0);

    // Handler Functions
    const rateStar = (starIndex: number) => {
        setCurrentRating(starIndex + 1);
    };

    const hoverStar = (starIndex: number) => {
        setTempRating(starIndex + 1);
    };

    const resetRating = () => {        
        setCurrentRating(0);
    };

    return (
        <div className="flex flex-col items-center"> 
            <h1 className="text-3xl p-10 m-10">Star Rating</h1>
            <div className="flex items-center cursor-pointer p-4">
                {
                    Array.from({length: 5}).map((_ , index) => (
                        <Star 
                            key={index} 
                            onClick={() => rateStar(index)} 
                            onMouseEnter={() => hoverStar(index)}
                            onMouseLeave={() => setTempRating(0)}
                            className={`size-20 ${index < tempRating ? "fill-yellow-500 stroke-yellow-500" : ""} ${index < currentRating ? "fill-yellow-500 stroke-yellow-500" : ""}`} 
                        />
                    ))
                }
            </div>
            <p className="m-10 text-xl font-semibold">Current Rating : {currentRating}</p>
            <button onClick={resetRating} className="bg-blue-400 px-6 py-4 rounded m-10 cursor-pointer">Reset Rating</button>
        </div>
    )
};