import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({uniqueMovies}) => {

    const [value, setValue] = useState('');
    const [hasFocus, setFocus] = useState(false);
    const handleChange = (event) => setValue(event.target.value);
    const handleBlur = () => {
        setTimeout()
    };
    const filterArr = uniqueMovies.filter(item => item.title.includes(value));

    return ( 
        <Box>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                <SearchIcon color='gray.300' />
                </InputLeftElement>
                <Input isInvalid errorBorderColor='pink.400' placeholder='Search' width='auto'
                value={value}
                onChange={handleChange}
                onFocus={() => setFocus(true)}
                />
            </InputGroup>
            {
                hasFocus ? 
                <div className="dropdown-content" onBlur={() => setFocus(false)}>
                {value.length !== 0 && filterArr.map((item) => <Link to={'/moviesdetails/' + item.id} key={item.id}>{item.title}</Link>)}
                </div> 
                : null
            }
            
        </Box>
    );
}
 
export default Search;