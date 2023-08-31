import { ChakraProvider } from "@chakra-ui/react";

import Motivation from "./components/Motivation/Motivation";

import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Motivation />
      </div>
    </ChakraProvider>
  );
}

export default App;
