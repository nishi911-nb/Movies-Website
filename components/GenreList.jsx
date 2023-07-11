import useGenres from "../src/hooks/useGenres";
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";

const GenreList = () => {

    const {genres} = useGenres();

    return (
        <Menu>
            <MenuButton as={Button} colorScheme='pink' variant='outline' rightIcon={<ChevronDownIcon />} > Movie Genre</MenuButton>
            <MenuList>
                {genres.map(genre => <MenuItem as={Link} to={`/genrelist/${genre.name}`} key={genre.id}>{genre.name}</MenuItem>)}
            </MenuList>
        </Menu>
     );
}
 
export default GenreList;