import { useParams } from "react-router-dom";
import useGenres from "../src/hooks/useGenres";
import MoviesList from '../components/MoviesList'

const Genre = ({uniqueMovies, error, loading}) => {

    const {id} = useParams();
    const {genres} = useGenres();
    
    let genreObj = genres.find(genre => genre.name == id)
    const filterMovies = uniqueMovies.filter(movie => {
        return movie.genre_ids.find(item => item == genreObj?.id)
    })
    
    return ( 
        <>
        <MoviesList movies={filterMovies} error={error} loading={loading} title={id}/>
        </>
       
     );
}
 
export default Genre;