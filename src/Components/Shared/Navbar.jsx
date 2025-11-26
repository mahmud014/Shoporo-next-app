import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

export default function Navbar() {
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </>
  );
  return (
    <div className=" bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto">
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <HiBars3BottomRight size={24} />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link href="/" className="text-2xl font-bold">
            Shopora
          </Link>
        </div>

        {/* Center (desktop links) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          <Link href="/login" className="btn mx-1">
            Login
          </Link>
          <Link href="/register" className="btn mx-1 btn-primary-gradient">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
