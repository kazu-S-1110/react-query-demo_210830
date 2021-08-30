import { ChakraProvider } from '@chakra-ui/react';
import { FetchData } from './components/FetchData';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  // 2. Use at the root of your app
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <FetchData />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
