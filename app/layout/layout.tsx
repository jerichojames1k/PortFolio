import { NavLink, Outlet } from "react-router";
import { FaGithub } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { ImMail4 } from "react-icons/im";
import { useState } from "react";
export default function Layout() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        {/* <div className="fixed top-0 right-0 left-0 bg-white shadow">
          <header>
            <div className="flex justify-between items-center p-6">
              <div className="text-2xl">Jericho James Villahermosa</div>
              <nav
                id="hover-nav"
                className="flex flex-between space-x-10 items-center"
              >
                <NavLink to="/">
                  <div>Home</div>
                </NavLink>
                  <NavLink to="/skills">
                  {" "}
                  <div>Skills</div>
                </NavLink>
                <NavLink to="/project">
                  {" "}
                  <div>Projects</div>
                </NavLink>
                <NavLink to="/contact">
                  <div>Contact</div>
                </NavLink>
                <NavLink to="/about" end>
                  <div>About Me</div>
                </NavLink>
              </nav>
            </div >
          </header>
        </div> */}
    <div className="fixed top-0 right-0 left-0 bg-white shadow z-50">
      <header>
          <div className="flex justify-between items-center">
          <div className="text-[1.5rem]">Jericho James Villahermosa</div>

          {/* Desktop Navigation */}
          <nav  id="hover-nav" className="hidden min-[1200px]:flex space-x-10 items-center text-[1.2rem]">
            <NavLink  className="hover:text-black transition duration-300" to="/">Home</NavLink>
            <NavLink className="hover:text-black transition duration-300" to="/skills">Skills</NavLink>
            <NavLink className="hover:text-black transition duration-300" to="/project">Projects</NavLink>
            <NavLink className="hover:text-black transition duration-300" to="/contact">Contact</NavLink>
            <NavLink className="hover:text-black transition duration-300" to="/about">About Me</NavLink>
          </nav>

          {/* Hamburger Button */}
          <button
            className="min-[1200px]:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav  className="min-[1200px]:hidden flex flex-col bg-gray-400 border-t h-screen">
            <NavLink
              to="/"
              className="p-4 border-b hover:text-white transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/skills"
              className="p-4 border-b hover:text-white transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </NavLink>
            <NavLink
              to="/project"
              className="p-4 border-b hover:text-white transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="p-4 border-b hover:text-white transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
            <NavLink
              to="/about"
              className="p-4 hover:text-white transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </NavLink>
          </nav>
        )}
      </header>
    </div>
          <main id="main">
            <Outlet />
          </main>   

        <footer className="absolute w-full">
            <div className="relative w-[100%] bottom-0  bg-black text-center whitespace-pre-wrap text-white  p-10">
              <div className="flex space-x-4 items-center justify-center p-10">
                <a
                  href="https://www.linkedin.com/in/jerichojames-villahermosa-8865b5195/"
                  target="_blank"
                >
                  <TiSocialLinkedinCircular className=" hover:animate-spin size-10" />
                </a>
                <a href="https://github.com/jerichojames1k" target="_blank">
                  <FaGithub className=" hover:animate-spin size-7" />
                </a>
                <a
                  href="mailto:jerichojames.villahermosa@student.passerellesnumeriques.org"
                  target="_blank"
                >
                  <ImMail4 className=" size-7 hover:motion-safe:animate-spin" />
                </a>
              </div>
              <p className="text-[1rem]">
                Copyright © Jericho James Villahermosa
              </p>
            </div>
         </footer>
    </div>
  );

}