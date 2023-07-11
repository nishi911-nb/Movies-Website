import {Box, Divider, Heading, SimpleGrid} from "@chakra-ui/react";
import Cards from "./Cards";
import CardSkeleton from "./CardSkeleton";

const MoviesList = ({movies, error, loading, title}) => {
    
    const skeletons = [1,2,3,4,5,6,7,8,9,10];
    
    return (
        <>
            {error && <Text>{error}</Text>}
            <Box m='60px' minW='500px'>
                <Heading fontSize='3xl'>{title} Movies</Heading>
                <Divider m='10px'/>
                <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding="15px" spacing={10}>
                    {loading && skeletons.map(skeleton => <CardSkeleton key={skeleton}/>)}
                    {movies?.map(movie => <Cards key={movie.id} movie={movie} />)}
                </SimpleGrid>
            </Box>
        </>
    );
}
 
export default MoviesList;