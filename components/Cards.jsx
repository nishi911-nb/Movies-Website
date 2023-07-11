import useGenres from "../src/hooks/useGenres";
import {Card, Image, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, 
    Icon, Button, Text, Box, Flex, Heading} from "@chakra-ui/react";
import { AiFillStar } from 'react-icons/ai';
import { BiCaretRightCircle } from "react-icons/bi"
import { useNavigate } from "react-router-dom";

const Cards = ({movie}) => {

    const navigate = useNavigate();
    const {genres} = useGenres();

    const movieGenre = (genreIdArray) => {
        let array = genreIdArray.map(id => {
            let genreName = '';
            genres.find(genre => {
                if(id == genre.id){
                    genreName = genre.name
                }
            })
            return genreName;
        })
        return array.join();
    }

    const handleClick = (id) => {
        navigate('/moviesdetails/' + id);
        navigate(0);
    }
    
    return ( 
        <Popover placement='right' trigger="hover">
        <PopoverTrigger>
            <Card borderRadius={10} overflow="hidden" boxShadow= 'dark-lg'
            _hover={{ filter: 'auto', brightness: '50%' }} onClick={() => handleClick(movie.id)}>
                <Image src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} alt={movie.title}/>
            </Card>
        </PopoverTrigger>
        <PopoverContent>
            <PopoverHeader>
                <Heading fontSize="xl" mb="5px">{movie.title}</Heading>
                <Icon as={AiFillStar} color='yellow' boxSize={4} /> {movie.vote_average}
            </PopoverHeader>
            <PopoverBody>
                Genre: {movieGenre(movie.genre_ids)} <br />
                Released on: {movie.release_date} <br />
                <Box my="15px">
                   <Text as='i'>{movie.overview}</Text>
                </Box>
                <Flex align="center" justify="center" mb="5px">
                <Button size='md' height='48px' width='170px' justifyContent="center" rightIcon={<BiCaretRightCircle size="30px"/>} colorScheme="purple" 
                onClick={() => handleClick(movie.id)}>
                    Watch Trailer
                </Button>
                </Flex>
            </PopoverBody>
        </PopoverContent>
        </Popover>
    );
}
 
export default Cards;