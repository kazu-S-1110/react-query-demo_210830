import { ChakraProvider } from '@chakra-ui/react';
import { FetchData } from './components/FetchData';

function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <FetchData />
    </ChakraProvider>
  );
}

export default App;
