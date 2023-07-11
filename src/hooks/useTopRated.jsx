import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useTopRated = () => {

    const [topRated, setTopRated] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient
            .get('/movie/top_rated', { signal: controller.signal })
            .then(res => {
                setTopRated(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if(err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            })    

        return () => controller.abort();
    }, [])
    
    return {topRated, error, loading};
}
 
export default useTopRated;