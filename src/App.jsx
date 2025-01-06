
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import  Layout  from './Layout/Layout'; 
import Home from './HOME/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Portfolio from './Portfolio/Portfolio';

function App() {

  let R = createHashRouter([

    { path: '' , element: <Layout/> , children:[
      { index: true  , element: <Home/> },
      { path: 'Home'  , element: <Home/> },
      { path: 'About'  , element:<About/> },
      { path: 'Portfolio' , element:<Portfolio/> },
      { path: 'Contact' , element:<Contact/> },
  
    ]}
  ])

  return <RouterProvider router={R} ></RouterProvider>
}

export default App
