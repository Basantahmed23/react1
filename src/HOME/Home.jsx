import avataaars from '../assets/avataaars.svg';
export default function Home(){

return(
    <>
   
     <div className="container-fluid bg-g min-vh-100 ">
        <div className="py-4">
            <img src={avataaars} alt="avatar"  className="d-flex m-auto photo"/>
        </div>
        <div className=" content text-center">
            <h2 className="text-uppercase text-white fw-bold mb-3">start Framework</h2>
            <div className="d-flex justify-content-center align-content-center mb-3">
            <div className="line me-3 bg-white"  ></div>
            <i  className="fa-solid fa-star text-white fs-5 pe-3  "></i>
            <div className="line me-3 bg-white"  ></div>
            </div>
        </div>
        <p className="text-center fs-6 text-white fw-medium">Graphic Artist - Web Designer - Illustrator</p>
     </div>
     </>
     )

}