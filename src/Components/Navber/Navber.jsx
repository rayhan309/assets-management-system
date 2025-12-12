import { Link, NavLink } from "react-router";
import useAuth from "../../Hooks/useAuth";
import logo from '../../assets/myBrand2.png';
import { ChevronUp } from "lucide-react";

const Navber = () => {
  const { user } = useAuth();
  // console.log(user);

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/abpu-us"}>Aobut Us</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div className="my-nav text-white/80 fixed top-0 left-0 w-full z-50">
    <div className="navbar w-11/12  mx-auto">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="flex items-center gap-3">
        <img src={logo} className="w-12 h-12 rounded-2xl object-cover" alt="" />
        <h3 className="text-xl font-bold text-white/80">AssetPro</h3>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="cursor-pointer flex items-center gap-2">
            <img title={user?.displayName} className="w-12 h-12 rounded-2xl" src={user?.photoURL} alt={user?.displayName} />
            <ChevronUp />
          </div>
        ) : (
          <Link to={"/login"} className="uiverse">
            <div className="wrapper">
              <span>LogIn</span>
              <div className="circle circle-12"></div>
              <div className="circle circle-11"></div>
              <div className="circle circle-10"></div>
              <div className="circle circle-9"></div>
              <div className="circle circle-8"></div>
              <div className="circle circle-7"></div>
              <div className="circle circle-6"></div>
              <div className="circle circle-5"></div>
              <div className="circle circle-4"></div>
              <div className="circle circle-3"></div>
              <div className="circle circle-2"></div>
              <div className="circle circle-1"></div>
            </div>
          </Link>
        )}
      </div>
    </div>
    </div>
  );
};

export default Navber;
