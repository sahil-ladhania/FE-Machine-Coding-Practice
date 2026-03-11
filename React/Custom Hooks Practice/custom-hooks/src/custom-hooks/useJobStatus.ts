import { useEffect, useRef, useState } from "react";

// Helper Mock Job API
let callCount = 0;
export function mockJobAPI(jobID) {
    callCount++;

    if (callCount === 1){
        return Promise.resolve({ status: "pending", result: null });
    };

    if (callCount === 2){
        return Promise.resolve({ status: "processing", result: null });
    };

    return Promise.resolve({ status: "done", result: "Job completed successfully!" });
}

export const useJobStatus = (jobID: number | null) => {
    // State Variables
    const [status, setStatus] = useState<string | null>(null);
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);

    // useRef
    const timerRef = useRef(null);

    useEffect(() => {
        if (!jobID){
            return;
        };

        timerRef.current = setInterval(async () => {
            try {
                const response = await mockJobAPI(jobID);
                setStatus(response.status);
                setResult(response.result);

                if (response.status === "done" || response.status === "failed") {
                    clearInterval(timerRef.current);
                };
            } 
            catch (error) {
                setError("Something went wrong");
                clearInterval(timerRef.current);
            };
        }, 2000);

        return () => clearInterval(timerRef.current);
    }, [jobID]);

    return { status, result, error };
};