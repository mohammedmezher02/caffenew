import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Pricing from "./pages/Pricing"
import Support from "./pages/Support"


const Layout = () => {
  return (
  <>
  <NavBar/>
  <Outlet/>
  <Footer/>
  
  </>
  )
}

// pages
const App = () => {
  const router =createBrowserRouter(createRoutesFromElements(
<Route>  {/* parent*/}
<Route path="/" element ={<Layout/>} >        {/** child*/}
<Route index element={<Home/>}></Route>
<Route path="/about" element={<About/>}></Route>

</Route>
<Route path="/contact" element={<Contact/>}></Route>

<Route path="/pricing" element={<Pricing/>}></Route>
<Route path="/support" element={<Support/>}></Route>

</Route>
    
  ))
  
  return (
    <div>
      <RouterProvider router={router}/>
      
    </div>
  )
}

export default App