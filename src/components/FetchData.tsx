import { Button, Flex, Text } from '@chakra-ui/react';
import axios from 'axios';

export const FetchData = () => {
  const fetchData = async () => {
    const { data } = await axios('http://localhost:8000/api/Favo/');
    return data;
  };

  console.log(fetchData());
  return (
    <Flex m={10} direction="column">
      <Text
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        I'm testing FetchData
      </Text>
      <Button onClick={() => fetchData}>Fetch Data</Button>
    </Flex>
  );
};
