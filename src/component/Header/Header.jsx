import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
import logo from "../../Images/Logo.png";
import {Project} from '../index'
function Header() {
  const navRef = useRef();
  const [menuOn, setMenuOn] = useState(false);

  const toggle = () => {
    setMenuOn(!menuOn);
    
  };

  return (
    <header className="bg-[#00585E] font-winky w-full fixed top-0 z-50 shadow-md ">
      <nav className="flex items-center m-auto justify-between w-[92%] mx-auto">
        <div>
          <Link 
          to="Home" 
          smooth={true} 
          duration={500}
          className="cursor-pointer">
          <img src={logo} alt="Image" className="w-16 h-16" />
          </Link>
        </div>
        <div
  className={`nav-links duration-500 absolute md:static left-0 w-full md:w-auto min-h-[60vh] md:min-h-fit flex items-center px-5 bg-[#00585E]
    ${menuOn ? 'top-[9%] opacity-100 pointer-events-auto' : 'top-[-100%] opacity-0 pointer-events-none'}
    md:opacity-100 md:pointer-events-auto
    transition-all ease-in-out
    
  `
  }
>

          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-12">
            <li>
              <Link to="Home" smooth={true} duration={500}
                 className="text-white hover:text-white hover:border-b-2 hover:border-white border-transparent cursor-pointer py-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="About" smooth={true} duration={500}
                className="text-white hover:text-white hover:border-b-2 hover:border-white border-transparent cursor-pointer py-2"
              >
                About
              </Link>
            </li>
            <li>
              <Link
              to="Experience"  smooth={true} duration={500}
                className="text-white hover:text-white hover:border-b-2 hover:border-white border-transparent cursor-pointer py-2"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}
                className="text-white hover:text-white hover:border-b-2 hover:border-white border-transparent cursor-pointer py-2"
              >
                Projects
              </Link>
            </li>
            
            
            <li>
              <Link
               to="Contact"  smooth={true} duration={500}
                className="text-white hover:text-white hover:border-b-2 hover:border-white border-transparent cursor-pointer py-2"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <Link 
           to="Contact"  smooth={true} duration={500}
          className="rounded-3xl bg-[#00585E] px-5 py-2 border border-white text-white cursor-pointer">
            Connect{" "}
          </Link>
          <ion-icon
            name={menuOn ? "close" : "menu"}
            className="text-3xl cursor-pointer md:hidden text-white"
            onClick={toggle}
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
