import poert1 from '../assets/poert1.png';
import port2 from '../assets/port2 .png';
import port3 from '../assets/port3 .png';



// src\assets\poert1.png

export default function Portfolio() {
  return (
 <>
 <div className="container-fluid min-vh-100">
 <div className=" container pt-3 text-center">
            <h2 className="text-uppercase pt-3 fw-bold mb-3">portfolio component</h2>
            <div className="d-flex justify-content-center align-content-center mb-3">
            <div className="line bg-black me-3"  ></div>
            <i  className="fa-solid fa-star  fs-5 pe-3  "></i>
            <div className="line bg-black me-3"  ></div>
            </div>
        </div>
         <div className="container py-5 ">
  <div className="row g-5">
   <div className="col-lg-4 col-md-6">
  <div className="position-relative hover-effect  m-auto" >
  <img src={poert1} alt="Avatar" className="img-fluid image rounded" />
  <div className="middle">
    <div className="text"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
  </div>
</div>
</div>
   <div className="col-lg-4 col-md-6">
  <div className="position-relative hover-effect  m-auto" >
  <img src={port2} alt="Avatar" className="img-fluid image rounded" />
  <div className="middle">
    <div className="text"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
  </div>
</div>
</div>
   <div className="col-lg-4 col-md-6">
  <div className="position-relative hover-effect  m-auto" >
  <img src={port3} alt="Avatar" className="img-fluid image rounded" />
  <div className="middle">
    <div className="text"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
  </div>
</div>
</div>
   <div className="col-lg-4 col-md-6">
  <div className="position-relative hover-effect  m-auto" >
  <img src={poert1} alt="Avatar" className="img-fluid image rounded" />
  <div className="middle">
    <div className="text"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
  </div>
</div>
</div>
   <div className="col-lg-4 col-md-6">
  <div className="position-relative hover-effect  m-auto" >
  <img src={port2} alt="Avatar" className="img-fluid image rounded" />
  <div className="middle">
    <div className="text"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
  </div>
</div>
</div>
   <div className="col-lg-4 col-md-6">
  <div className="position-relative hover-effect  m-auto" >
  <img src={port3} alt="Avatar" className="img-fluid image rounded" />
  <div className="middle">
    <div className="text"><i className="text-white fa-solid fa-plus fa-6x"></i></div>
  </div>
</div>
</div>
</div>
</div>
 </div>
      



 
 
 
 
 </>
  )
}
