import { Navbar } from "../Navbar/Navbar"
import './Main.css'


export function Main(){

return(
    <>
     <Navbar/>
     <div className="container-fluid home min-vh-100 ">
        <div className="py-4">
            <img src="./avataaars-removebg-preview.png" alt="avatar"  className="d-flex m-auto photo"/>
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