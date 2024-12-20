
import { Box, Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import Navbar from "./components_2/Navbar.jsx";

function App() {

  return (
      <Box minH={"100vh"} bgGradient="to-r" gradientFrom={"#F8F8FF"} gradientTo={"#000000"}>
        <Navbar/>
        <Routes>
          <Route path="/" element = {<HomePage />}/>
          <Route path="/create" element = {<CreatePage />}/>
        </Routes>
      </Box>
  )
}

export default App
