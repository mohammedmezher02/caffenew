
import { Link } from "react-router"
import { logo } from "../assets"
import { useState } from "react"
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
const Links = [
  { id: 1, page: "Home", path: "/" },
  { id: 2, page: "About", path: "/about" },
  { id: 3, page: "Contact ", path: "/contact" },
  { id: 4, page: "Pricing", path: "/pricing" },
  { id: 5, page: "Support", path: "/support" },



]

function NavBar() {
  const [openPar, setopenBar] = useState(false);
  return (
    <div className=" bg-red-950 h-[70px]">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* logo+text */}
        <div className=" text-white flex items-center gap-2">
          <img className="w-10 " src={logo} alt="Logo" />
          <h1 className="text-3xl font-bold">Cofee</h1>
        </div>
        {/* links */}
        <ul className="hidden mdl:flex items-center text-white gap-8 text-lg">
          {Links.map(iteam => (
            <li key={iteam.id} className="px-2 py-1 hover:bg-[#7b3f45ad] transition duration-500 rounded">
              <Link to={iteam.path} >{iteam.page}</Link>
            </li>

          ))}
        </ul>

        {/* nav buuton */}
        <div className=" hidden mdl:flex text-white gap-4  ">
          <button className="bg-transparent px-4 py-2 rounded border border-white hover:border-orange-400 hover:text-orange-300 transition duration-300">Get started </button>
        </div>

        {/* bar */}
        <div className="text-white mdl:hidden cursor-pointer" onClick={() => setopenBar(!openPar)}>

          {!openPar ? (
            <FaBars fontSize="20px" />
          )
            :
            (
              <IoMdClose fontSize="20px" />
            )
          }
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 bg-red-950 w-[200px] h-[100vh] transform ${openPar ? "translate-x-0" : "translate-x-full"} transition-transform duration-500 ease-in-out`}>
        {/* Close Icon */}
        <div className="absolute top-4 left-2 text-white cursor-pointer"onClick={() => setopenBar(false)}>
          <IoMdClose fontSize="24px" />
        </div>
        {/* retriev data link */}
        <ul className="flex flex-col gap-7 text-white px-4 mt-16">
                    {Links.map((link) => (
                        <li key={link.id} className="  px-2 py-1 hover:bg-[#7b3f45ad] transition duration-500 rounded">
                            <Link to={link.path}>{link.page}</Link>
                        </li>
                    ))}
                </ul>
                <div className="text-white flex flex-col mt-7 px-4 gap-4">
                    
                    <button className="bg-transparent px-4 py-2 rounded font-medium border border-white  hover:border-orange-400  hover:text-orange-300  transition duration-300">
                        Get Started
                    </button>
                </div>
      </div>
    </div>
  )
}

export default NavBar