import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLogout(){
    fetch('http://localhost:4000/auth/logout', {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(data => {
      console.log(data);
      navigate('/login');
    })
    .catch(err => console.log(err));
  }
  return (
    <nav>
      <div className="site-title">
        <Link to="/">Blogsapp</Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/allblogs">All Blogs</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to='/createblog'>Create Blog</Link>
          </li>
          <li>
            <Link to='/signup'>Sign up</Link>
          </li>
          <li>
            <Link to='/login'>Log in</Link>
          </li>
          <li>
          <button className="delete_but" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
