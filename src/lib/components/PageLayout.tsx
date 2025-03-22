import { Link, Outlet } from "react-router-dom";

export const PageLayout = () => {
  return (
    <main className="h-screen">
      <NavBar />
      <Outlet />
    </main>
  );
};

const NavBar = () => {
  return (
    <nav className="d-flex navbar w-full justify-between bg-base-100">
      <NameHomeLink />

      <MobileMenu />

      <NonMobileMenu />
    </nav>
  );
};

function NameHomeLink() {
  return (
    <Link className="btn btn-ghost text-xl" to="/">
      Brandon Ritchie
    </Link>
  );
}

function MobileMenu() {
  return (
    <div className="dropdown dropdown-end">
      <button className="btn btn-ghost lg:hidden">
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
      </button>

      <ul
        tabIndex={0}
        className="menu dropdown-content menu-sm z-[1] mt-3 flex w-52 flex-col gap-1 rounded-box bg-base-100 p-2 shadow"
      >
        <Links />
      </ul>
    </div>
  );
}

function NonMobileMenu() {
  return (
    <div className="hidden justify-end lg:block">
      <ul className="menu menu-horizontal flex gap-1 px-1">
        <Links />
      </ul>
    </div>
  );
}

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
