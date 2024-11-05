import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex px-6 py-7 items-center justify-between h-12 bg-stone-700">
      <div className="logo text-white font-bold text-xl">
        <Link href={"/"}>LOGO</Link>
      </div>
      <ul className="flex justify-center items-center gap-4 text-white">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/short"}>Short</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact us</Link>
        </li>
        <li className="flex gap-4 ml-5">
          <Link href={"/short"}>
            <button className="py-2 px-4 bg-stone-500 rounded-lg shadow-lg font-semibold">
              Try now
            </button>
          </Link>
          <Link href={"/github"}>
            <button className="py-2 px-4 bg-stone-500 rounded-lg shadow-lg font-semibold">
              Github
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
