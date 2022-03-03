import Selling from "./Pages/Selling";
import Blogs from "./Pages/Blogs";
import Donation from "./Pages/Donation";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Front from "./Pages/Front";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sell" element={<Selling />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/donate" element={<Donation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
