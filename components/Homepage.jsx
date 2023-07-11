import Carousel from '../components/Carousel'
import MoviesList from '../components/MoviesList'
import { Box } from '@chakra-ui/react'

const Homepage = ({popular, topRated, upcoming, error, loading}) => {

  return ( 
    <Box>
      <Carousel />
      <MoviesList movies={popular} error={error} loading={loading} title="Popular"/>
      <MoviesList movies={topRated} error={error} loading={loading} title="Top-Rated"/>
      <MoviesList movies={upcoming} error={error} loading={loading} title="Upcoming"/>
    </Box>
  );
}
 
export default Homepage;