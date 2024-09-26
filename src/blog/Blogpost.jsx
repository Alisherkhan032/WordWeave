import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Allblogs from "./Allblogs";
import About from "./About";
import Newblog from "./Newblog";
import Home from "./Home";
import Singleblog from "./Singleblog";
import Createblog from "./Createblog";
import Login from "./Login";
import Signup from "./Signup";
import Error from "./Error";
// import Logout from "./Logout";

const Blogpost = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/allblogs" element={<Allblogs />} />
          <Route path="/newblog" element={<Newblog />} />
          <Route path="/blogs/:id" element={<Singleblog />} />
          <Route path="/createblog" element={<Createblog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/error" element={ <Error />} />
        </Routes>
      </Router>
    </>
  );
};

export default Blogpost;
