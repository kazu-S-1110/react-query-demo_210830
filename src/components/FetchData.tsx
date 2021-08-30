import { Flex, Text, Link } from '@chakra-ui/react';
import axios from 'axios';
import { useQueryUrls } from '../hooks/useQueryUrls';

export const FetchData = () => {
  const { status, data } = useQueryUrls();
  console.log(data);

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
      {data?.map((url) => (
        <Link>
          <Text key={url.id} fontSize="xl" fontWeight="extrabold">
            {url.title}
            {'  '}
            {url.url}
          </Text>
        </Link>
      ))}
    </Flex>
  );
};
