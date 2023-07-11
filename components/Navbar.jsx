import { HStack, Image } from "@chakra-ui/react";
import Logo from '../src/assets/design.jpg';
import ColorModeSwitch from "./ColorModeSwitch";
import GenreList from "./GenreList";
import Search from "./Search";

const Navbar = ({uniqueMovies}) => {

    return (
        <>
        <HStack justifyContent='space-between' p={4} minW='625px'>
            <Image src={Logo} boxSize="70px"></Image>
            <Search uniqueMovies={uniqueMovies}/>
            <GenreList />
            <ColorModeSwitch />
        </HStack>
        </>
     );
}
 
export default Navbar;