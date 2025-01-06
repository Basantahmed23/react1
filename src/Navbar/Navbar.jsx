import {  Link, NavLink } from 'react-router-dom';



export default function Navbar(){


    return<>
    <nav className="navbar navbar-expand-lg bg-c">
  <div className="container my-4">
    <Link className="navbar-brand fs-3 fw-bold text-white text-uppercase" to="Home">Start Framework
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse  navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto text-uppercase gap-3 fs-5 fw-bold text-white mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-white"  to="About">About</NavLink>
        </li>
      
        <li className="nav-item ">
          <NavLink className="nav-link text-white" to="Portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white" to="Contact">Contact</NavLink>
        </li>
       
      
      </ul>

    </div>
  </div>
</nav>

    
    
    </>



}