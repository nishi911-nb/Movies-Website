import { Card, Skeleton } from "@chakra-ui/react";

const CardSkeleton = () => {
    return (
        <Card width='250px' borderRadius={10} overflow="hidden" >
            <Skeleton height='350px' mx={5}/>
        </Card>
     );
}
 
export default CardSkeleton;