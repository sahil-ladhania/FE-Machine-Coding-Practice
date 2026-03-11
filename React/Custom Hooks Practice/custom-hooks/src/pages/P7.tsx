import React, { useState } from "react";
import { useFetch } from "../custom-hooks/useFetch"

export default function P7() {
    // State Variables
    const [enabled , setEnabled] = useState(true);

    // API Endpoint
    const url = "https://jsonplaceholder.typicode.com/posts";

    // Options Config
    const options = { enabled };

    // useFetch
    const { data, loading, error, refetch } = useFetch(url, options);

    return (
        <div className="m-20">
            <h1 className="text-red-800 mb-4 text-lg font-bold">
                useFetch Hook - Kisi bhi URL se data fetch karta hai. Loading, error, aur data teeno states handle karta hai. refetch se manually dobara fetch kar sakte ho. enabled option se conditionally fetch rok sakte ho.
            </h1>

            <div className="flex items-center gap-4 mb-6">
                <button onClick={refetch} className="border px-4 py-2 cursor-pointer rounded hover:bg-gray-100">
                    Refetch Data
                </button>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input onChange={(e) => setEnabled(e.target.checked)} type="checkbox" name="enable-fetch" checked={enabled} className="w-4 h-4 cursor-pointer"/>
                    Enable Fetch
                </label>
            </div>

            {loading && "Loading...."}
            {error && `Something went wrong : ${error}`}

            <div className="">
                {
                    data?.map((post) => {
                        return (
                            <React.Fragment key={post.id}>
                                <div className="p-2 my-2 border rounded p-4">
                                    <h1 className="text-xs text-gray-400">{post.userId}</h1>
                                    <h2 className="font-semibold text-sm mt-1">{post.title}</h2>
                                    <p className="text-gray-600 text-sm mt-1">{post.body}</p>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}