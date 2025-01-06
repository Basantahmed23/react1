

export default function Contact() {
  return (
 <>
 <div className="container-fluid min-vh-100">
 <div className=" container  pt-5 text-center">
            <h2 className="text-uppercase pt-3 fw-bold mb-3">Contact section</h2>
            <div className="d-flex justify-content-center align-content-center mb-3">
            <div className="line bg-black me-3"  ></div>
            <i  className="fa-solid fa-star  fs-5 pe-3  "></i>
            <div className="line bg-black me-3"  ></div>
            </div>
        </div>
   <form className="w-50 pt-4 m-auto">
  <div className="mb-4">
    <input type="email" className="form-control" placeholder="username" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-4">
    <input type="email" className="form-control" placeholder="userAge" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-4">
    <input type="email" className="form-control" placeholder="userEmail" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-4">
    <input type="password" className="form-control " placeholder="userPassword" id="exampleInputPassword1" />
  </div>
  <button type="submit" className="btn btn-success ">Submit</button>
</form>





 </div>
 </>
  )
}
