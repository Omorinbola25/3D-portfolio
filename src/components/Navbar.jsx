import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import LiveAvatar from "./LiveAvatar";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const handletToggle = () => {
setToggle((prev) => !prev)
  }

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary shadow-2xl`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
         < LiveAvatar/>
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Omorinbola &nbsp;<span className="sm:block hidden">| Akinwunmi</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(({ id, title }) => (
            <li
              key={id}
              className={`${
                active === title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px]
            font-medium cursor-pointer`}
              onClick={() => setActive(title)}
            >
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}

        <a href="https://www.instagram.com/akinwunmi_busayo"><i class="fa-brands fa-instagram"></i></a>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={`${
            toggle ? close : menu
          }`} alt="" onClick={handletToggle} />
        </div>
        <div className="sm:hidden">
          <ul className={`${
            toggle ? "translate-x-0 " : "translate-x-60"
          } absolute top-16 gap-2 right-0 mx-4 my-2 min-w-[80px] z-10 rounded-xl list-none flex justify-end items-start flex-col p-6 bg-gray-600 transition duration-300`}>
            {navLinks.map((link) =>(
              <li key={link.id}
               className= {`${
                active === link.title ? "text-white" : "text-gray-300"
              } hover:text-white text-[18px]
              font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
              >

               <a href={`#${link.id}`}>{link.title}</a>

              </li>
            ))}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
