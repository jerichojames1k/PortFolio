import { NavLink, Outlet } from "react-router";

export default function Layout() {
  return (
    <div className=" h-screen">
      <div className="bg-red-400 relative">
        <div className="fixed inset-x-0">
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

        {/* 🔹 Main Content (child routes render here) */}
        <div className="margin-[50px]">
          <main className="bg-gray-400">
            <Outlet />
          </main>
        </div>

        {/* <footer className="bg-black">
        <div className="p-14 text-white">hjjdddkkkkkk</div>
      </footer> */}
      </div>
      <footer className="bg-black">
        <div className="p-14 text-white">hjjdddkkkkkk</div>
      </footer>
    </div>
  );
}
