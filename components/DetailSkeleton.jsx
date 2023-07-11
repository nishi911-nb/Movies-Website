import { Box, Stack, SkeletonText, Divider, Skeleton, SkeletonCircle, SimpleGrid } from "@chakra-ui/react";

const DetailSkeleton = () => {
    return ( 
        <Box paddingX={{ base: '20px', md: '90px', lg: '150px', xl: '250px' }} mt="20px">
              <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
              <Divider my='20px' borderColor='gray'/>
              <Stack direction={['column', 'row']} paddingX={{ base: '0px', md: '40px', lg: '70px', xl: '150px' }} spacing="40px"> 
                <Box>
                <Skeleton height='100px' />
                </Box> 
                <Box>
                <SkeletonText noOfLines={6} spacing='4' skeletonHeight='2' />
                </Box>
              </Stack>
              <Box paddingX={{ base: '0px', md: '60px', lg: '120px', xl: '220px' }} marginY='80px'>
                <Skeleton height='500px' />
            </Box>
            <Box mb='20px'>
            <SkeletonCircle size='150' />
            </Box>
            <Box mb='60px'>
                <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacingY='30px'>
                <SkeletonCircle size='150' />
                <SkeletonCircle size='150' />
                <SkeletonCircle size='150' />
                <SkeletonCircle size='150' />
                <SkeletonCircle size='150' />
                </SimpleGrid>
            </Box>
            <Box mb='40px'>
                <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing='20px'>
                  <Skeleton height='200px' />
                  <Skeleton height='200px' />
                  <Skeleton height='200px' />
                  <Skeleton height='200px' />
                  <Skeleton height='200px' />
                </SimpleGrid>
            </Box>
        </Box>
        
     );
}
 
export default DetailSkeleton;