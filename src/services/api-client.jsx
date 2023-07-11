import axios from "axios";

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '175cae7d4ff30c5b90da6207e5bbf6b3'
    }
})