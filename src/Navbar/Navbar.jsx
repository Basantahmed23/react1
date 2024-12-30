import './Navbar.css'
export function Navbar(){


    return<>
    <nav className="navbar navbar-expand-lg bg-c">
  <div className="container my-4">
    <a className="navbar-brand fs-3 fw-bold text-white text-uppercase " href="#">Start Framework
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse  navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto text-uppercase gap-3 fs-5 fw-bold text-white mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link text-white" href="#">portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">contact</a>
        </li>
       
      
      </ul>
   
    </div>
  </div>
</nav>

    
    
    </>



}