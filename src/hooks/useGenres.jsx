import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useGenres = () => {

    const [genres, setGenre] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true)
        apiClient
            .get('/genre/movie/list', { signal: controller.signal })
            .then(res => {
                setGenre(res.data.genres);
                setLoading(false);
            })
            .catch(err => {
                if(err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false)
            })    

        return () => controller.abort();
    }, [])
    
    return {genres, error, loading};
}
 
export default useGenres;