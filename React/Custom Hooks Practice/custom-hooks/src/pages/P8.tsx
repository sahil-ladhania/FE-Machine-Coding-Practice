import { useState } from "react";
import { useJobStatus } from "../custom-hooks/useJobStatus";

export default function P8() {
    // State Variables
    const [jobID, setJobID] = useState(null);

    // useJobStatus
    const { status, result, error } = useJobStatus(jobID);

    return (
        <div className="m-20">
            <h1 className="text-red-800 mb-4 text-lg font-bold">
                useJobStatus Hook - Polling hook jo har 2 sec pe status check karta hai.
            </h1>

            <div className="mt-10 flex flex-col gap-4">
                <button
                    onClick={() => setJobID(1)}
                    className="border px-4 py-2 w-fit cursor-pointer rounded hover:bg-gray-100"
                >
                    Start Job
                </button>

                {
                    status 
                    && 
                    (
                        <div className="flex flex-col gap-2">
                            <p>{status === "pending" && "⏳ Pending..."}</p>
                            <p>{status === "processing" && "🔄 Processing..."}</p>
                            <p>{status === "done" && "✅ Done!"}</p>
                            <p>{status === "failed" && "❌ Failed"}</p>
                            {result && <p className="text-green-600">{result}</p>}
                            {error && <p className="text-red-600">{error}</p>}
                        </div>
                    )
                }
            </div>
        </div>
    );
}