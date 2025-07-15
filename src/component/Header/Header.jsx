import React, { useRef, useState } from "react";
import { Link } from "react-scroll";
import logo from "../../Images/Logo.png";
function Header() {
  const navRef = useRef();

  const [menuOn, setMenuOn] = useState(false);

  const toggle = () => {
    setMenuOn(!menuOn);
    navRef.current.classList.toggle("top-[9%]");
  };
  return (
    <header className="bg-[#00585E] font-winky">
      <nav className="flex items-center m-auto justify-between w-[92%] mx-auto">
        <div>
          <img src={logo} alt="Image" className="w-16 h-16" />
        </div>
        <div
          ref={navRef}
          className=" nav-links duration-500 absolute md:static  top-[-100%] left-0 w-full md:w-auto min-h-[60vh] md:min-h-fit  flex items-center px-5 bg-[#00585E]"
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-12">
            <li>
              <Link className="hover:text-gray-500 text-white" >
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 text-white" >
                Projects
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 text-white" >
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 text-white">
                Experience
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 text-white ">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="rounded-3xl bg-[#00585E] px-5 py-2 border border-white text-white">
            Connect{" "}
          </button>
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
