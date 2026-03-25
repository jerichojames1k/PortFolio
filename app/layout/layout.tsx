import { NavLink, Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="h-screen relative">
      <div className="fixed z-30 top-0 right-0 left-0  bg-white shadow">
        <header>
          <div className="flex justify-between items-center p-6">
            <div className="text-2xl">Jericho James Villahermosa</div>
            <nav
              id="hover-underline"
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
      <div className="pb-36 pt-20 pl-10 pr-10 break-words">
        <div className="relative h-full overflow-none scroll-smooth">
          {/* 🔹 Main Content (child routes render here) */}
          <div className="">
            <main className="">
              <Outlet />
            </main>
          </div>
        </div>
      </div>

      <div className="w-screen bg-black fixed bottom-0 left-0">
        <footer>
          <div className="p-14 text-white">hjjdddkkkkkk</div>
        </footer>
      </div>
    </div>
  );
}
