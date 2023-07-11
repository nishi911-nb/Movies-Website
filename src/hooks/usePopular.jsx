import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const usePopular = () => {

    const [popular, setPopular] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient
            .get('/movie/popular', { signal: controller.signal })
            .then(res => {
                setPopular(res.data.results);
                setLoading(false);
            })
            .catch(err => {
                if(err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            })        

        return () => controller.abort();
    }, [])
    
    return {popular, error, loading};
}
 
export default usePopular;