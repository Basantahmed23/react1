import'./footer.css'
export function Footer(){

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
        <a href="#"><i className=" text-white fa-brands fa-facebook"></i></a>
        <a href="#"><i className="text-white fa-brands fa-twitter"></i></a>
        <a href="#"><i className="text-white fa-brands fa-linkedin"></i></a>
        <a href="#"><i className=" text-white fa-solid fa-earth-europe"></i></a>
       
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
      <p>Copyright © Your Website 2021</p>
    </div>
  </div>
</div>



   </>
)


}