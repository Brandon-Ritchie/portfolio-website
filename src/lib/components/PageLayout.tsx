import { Link, Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <main className="h-screen">
      <NavBar />
      <Outlet />
    </main>
  );
};

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 w-full">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to="/">
          Brandon Ritchie
        </Link>
      </div>

      <nav className="flex-none">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <Links />
          </ul>
        </div>
      </nav>
      <nav className="navbar-end hidden flex-none lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Links />
        </ul>
      </nav>
    </div>
  );
};

const Links = () => (
  <>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/software">Software</Link>
    </li>
    <li>
      <Link to="/music">Music</Link>
    </li>
  </>
);

export default PageLayout;
