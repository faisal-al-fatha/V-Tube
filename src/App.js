import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChannelDetails from "./components/ChannelDetails";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import SearchFeed from "./components/SearchFeed";
import VideoDetails from "./components/VideoDetails";
const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact element={<Feed />}></Route>
        <Route path="/video/:id" element={<VideoDetails />}></Route>
        <Route path="/channel/:id" element={<ChannelDetails />}></Route>
        <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
