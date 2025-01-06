import { Link } from "react-router-dom";

export default function Footer(){

return(
   <>
  <div className="container-fluid footer">
  <div className="container m-auto py-5 row text-white text-center">
    <div className="col-md-4">
      <h5 className="fw-bold fs-4 ">LOCATION</h5>
      <p>2215 John Daniel Drive</p>
      <p>Clark, MO 65243</p>
    </div>
    <div className="col-md-4">
      <h5 className="fw-bold fs-4">AROUND THE WEB</h5>
      <div className="social-icons d-flex gap-3  justify-content-center">
        <Link to="#"><i className=" text-white fa-brands fa-facebook"></i></Link>
        <Link to="#"><i className="text-white fa-brands fa-twitter"></i></Link>
        <Link to="#"><i className="text-white fa-brands fa-linkedin"></i></Link>
        <Link to="#"><i className=" text-white fa-solid fa-earth-europe"></i></Link>
       
      </div>
    </div>
    {/* About Section */}
    <div className="col-md-4">
      <h5 className="fw-bold fs-4">ABOUT FREELANCER</h5>
      <p>Freelance is a free to use, licensed Bootstrap theme created by Route.</p>
    </div>
  </div>




  <div className="row copyright text-center mt-4">
    <div className="col-12 text-white ">
      <p>Copyright © Basant 2025</p>
    </div>
  </div>
</div>



   </>
)


}