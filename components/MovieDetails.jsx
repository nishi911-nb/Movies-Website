import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../src/services/api-client";
import { useParams } from "react-router-dom";
import { Box, Divider, Heading, SimpleGrid, Stack, Text, VStack, Icon, Image, AspectRatio } from "@chakra-ui/react";
import { AiFillStar } from 'react-icons/ai';
import MoviesList from '../components/MoviesList'
import Zoom from 'react-medium-image-zoom'
import DetailSkeleton from "./DetailSkeleton";

const MoviesDetails = () => {
    
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
            .get('/movie/' + id, { signal: controller.signal,  params: {
                append_to_response: 'credits,images,recommendations,alternative_titles,videos'
              } })
            .then(res => {
                setDetails(res.data);
                setLoading(false);
            })
            .catch(err => {
                if(err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            })        

        return () => controller.abort();
    }, [])
    
    let genreArr = details.genres?.map(genre => genre.name);
    let genreStr = genreArr?.join('/');

    function toHoursAndMinutes(totalMinutes) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours} hr ${minutes} mins`;
    }
    let titlesArr = details.alternative_titles?.titles.slice(0,11).map(title => title.title);
    let titlesStr = titlesArr?.join(' / ');

    let companyArr = details.production_companies?.map(c => c.name);
    let companyStr = companyArr?.join(', ');

    let countryArr = details.production_countries?.map(c => c.name);
    let countryStr = countryArr?.join(', ');

    let crew = details.credits?.crew.find(obj => obj.job == "Director")
    let director = crew?.name;

    let cast = details.credits?.cast.slice(0,10);

    let pictures = details.images?.backdrops.slice(0,10);

    let recommend = details.recommendations?.results.slice(0,6);

    let trailer = details.videos?.results.find(video => video.name == 'Official Trailer');

    return ( 
        <>
        {error && <Text>{error.message}</Text>}
        {loading && <DetailSkeleton />}
        <Box paddingX={{ base: '20px', md: '90px', lg: '150px', xl: '250px' }} mt="20px">
            <Stack direction={['column', 'row']} justifyContent="space-around">
                <Box>
                <Heading>{details.title}</Heading>
                <Text color='gray'>{details.tagline}</Text>
                <Text>Run time: {toHoursAndMinutes(details.runtime)}</Text>
                <Text>Genre: {genreStr}</Text>
                </Box>
                <Box>
                <Icon as={AiFillStar} color='yellow' boxSize={4} /> {details.vote_average?.toFixed(1)} / 10
                </Box>
            </Stack>
            <Divider my='20px' borderColor='gray'/>
            <Stack direction={['column', 'row']} paddingX={{ base: '0px', md: '40px', lg: '70px', xl: '150px' }} spacing="40px">
                <Box>
                <Image src={`https://image.tmdb.org/t/p/original/${details.poster_path}`} />
                </Box>
                <Box>
                    <Text>Native Title: {details.original_title}</Text>
                    Also known as: <Text color='blue'>{titlesStr}</Text>
                    <Text>Production Companies: {companyStr}</Text>
                    <Text>Director: {director}</Text>
                    <Text>Country: {countryStr}</Text>
                    <Text>Budget: ${details.budget}</Text>
                    <Text>Status: {details.status}</Text>
                    <Text>Released: {details.release_date}</Text>
                    <Text>Overview: {details.overview}</Text>
                </Box>
            </Stack>
            <Box paddingX={{ base: '0px', md: '60px', lg: '120px', xl: '220px' }} marginY='80px'>
                <Heading fontSize='3xl'>Watch Trailer</Heading>
                <Divider my='20px'/>
                <AspectRatio maxW='700px' >
                <iframe
                    src={`https://www.youtube.com/embed/${trailer?.key}`}
                    allowFullScreen
                />
                </AspectRatio>
            </Box>
            <Box mb='20px'>
                <Heading fontSize='3xl'>Director</Heading>
                <Divider my='20px'/>
                <Image borderRadius='full' boxSize='150px' src={`https://image.tmdb.org/t/p/original/${crew?.profile_path}`} alt={director}
                fallbackSrc='https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg'/>
                <Text p='10px'>{director}</Text>
            </Box>
            <Box mb='60px'>
                <Heading fontSize='3xl'>Top Cast</Heading>
                <Divider my='20px'/>
                <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacingY='30px'>
                 {cast?.map(obj => {
                    return(
                    <VStack key={obj.cast_id}>
                        <Image borderRadius='full' boxSize='150px' src={`https://image.tmdb.org/t/p/original/${obj.profile_path}`} alt={obj.name}
                        fallbackSrc='https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg'/>
                        <Heading fontSize='lg'>{obj.name}</Heading >
                        <Text color='grey'>{obj.character}</Text>
                    </VStack>   
                    )
                 })}
                </SimpleGrid>
            </Box>
            <Box mb='40px'>
                <Heading fontSize='3xl'>Images</Heading>
                <Divider my='20px'/>
                <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing='20px'>
                {pictures?.map((obj, index) => {
                    return(
                        <Zoom key={index}> 
                            <Image src={`https://image.tmdb.org/t/p/original/${obj.file_path}`} alt='movie images'
                               fallbackSrc='https://fakeimg.pl/300x150'/>
                        </Zoom>
                    )
                 })}
                </SimpleGrid>
            </Box>
            <Box>
              <MoviesList movies={recommend} error={error} loading={loading} title="Recommendation"/>
            </Box>
        </Box>
    </>
    );
}
 
export default MoviesDetails;