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
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
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
        <Link className="btn btn-ghost text-xl" to="/">
          Brandon Ritchie
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Links />
        </ul>
      </div>
    </div>
  );
};

const Links = () => (
  <>
    <li>
      <Link to="/">Item 1</Link>
    </li>
    <li>
      <Link to="/">Item 2</Link>
    </li>
    <li>
      <Link to="/">Item 3</Link>
    </li>
  </>
);

export default PageLayout;
