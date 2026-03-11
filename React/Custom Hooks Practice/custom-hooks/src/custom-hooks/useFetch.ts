import { useEffect, useState } from "react";

export const useFetch = (url , options) => {
    // State Variables
    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(false);
    const [error , setError] = useState(null);
    const [fetchTrigger, setFetchTrigger] = useState(0);

    // Handler Function
    function refetch() {
        setFetchTrigger(prev => prev + 1);
    };

    // useEffect
    useEffect(() => {
        if(options?.enabled === false){
            return;
        };

        const fetchData = async() => {
            try {
                setLoading(true);
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } 
            catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url , fetchTrigger , options.enabled]);

    return {
        data,
        loading,
        error,
        refetch
    }
};