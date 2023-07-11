import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useUpcoming = () => {

    const [upcoming, setUpcoming] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient
            .get('/movie/upcoming', { signal: controller.signal })
            .then(res => {
                setUpcoming(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if(err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            })    

        return () => controller.abort();
    }, [])
    
    return {upcoming, error, loading};
}
 
export default useUpcoming;