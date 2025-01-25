import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import VideoDetail  from "./pages/VideoDetail";
import Navbar from "./Components/navbar";
import ChannelDetail from "./pages/ChannelDetail";
import SearchFeed from "./pages/SearchFeed";

export default function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route index element={<Feed/>}/>
                <Route path="video/:id" element={<VideoDetail/>}/>
                <Route path="channel/:id" element={<ChannelDetail/>}/>
                <Route path="search/:searchTerm" element={<SearchFeed/>}/>
            </Routes>
        </Router>
    );
}