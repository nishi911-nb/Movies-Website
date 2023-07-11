import { Box, Heading, Text, Icon } from "@chakra-ui/react";
import { CiFaceFrown } from 'react-icons/ci'

const NotFound = () => {
    return ( 
        <Box textAlign='center' m='5rem'>
            <Heading fontSize='6xl'>Oops !!</Heading>
            <Text my='30px' fontSize='30px'>Error 404
            <Icon boxSize={10} mx='20px' as={CiFaceFrown} />
            </Text>
            <Text color='gray'>Sorry, but the requested URL does not exist.</Text>
        </Box>
    );
}
 
export default NotFound;