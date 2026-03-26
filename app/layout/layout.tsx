import { NavLink, Outlet } from "react-router";
import { FaGithub } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { ImMail4 } from "react-icons/im";
export default function Layout() {
  return (
    <div className="h-screen">
      <div className=" overflow-x-hidden">
        <div className="fixed top-0 right-0 left-0 bg-white shadow">
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
            </div>
          </header>
        </div>

        <div id="main" className="h-screen">
          <main>
            <Outlet />
          </main>
        </div>
        <div id="footer">
          <footer className="w-screen">
            <div className="bg-black text-center whitespace-pre-wrap text-white  p-10">
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
      </div>
    </div>
  );

  // return (
  //   <div className="h-screen relative">
  //     <div className="fixed z-30 top-0 right-0 left-0  bg-white shadow">
  //       <header>
  //         <div className="flex justify-between items-center p-6">
  //           <div className="text-2xl">Jericho James Villahermosa</div>
  //           <nav
  //             id="hover-underline"
  //             className="flex flex-between space-x-10 items-center"
  //           >
  //             <NavLink to="/">
  //               <div>Home</div>
  //             </NavLink>
  //             <NavLink to="/project">
  //               {" "}
  //               <div>Projects</div>
  //             </NavLink>
  //             <NavLink to="/contact">
  //               <div>Contact</div>
  //             </NavLink>
  //             <NavLink to="/about" end>
  //               <div>About Me</div>
  //             </NavLink>
  //           </nav>
  //         </div>
  //       </header>
  //     </div>
  //     <div className="pb-36 pt-20 pl-10 pr-10 break-words">
  //       <div className="relative h-full overflow-none scroll-smooth">
  //         <div className="">
  //           <main>
  //             <Outlet />
  //           </main>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="w-screen bg-black fixed bottom-0 left-0">
  //       <footer>
  //         <div className="p-14 text-white">hjjdddkkkkkk</div>
  //       </footer>
  //     </div>
  //   </div>
  // );
}
