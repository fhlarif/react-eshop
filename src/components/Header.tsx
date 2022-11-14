import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineAlignRight } from "react-icons/ai";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    console.log("click");
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className="w-full bg-black p-4 lg:text-lg leading-loose tracking-wide md:text-md text-sm">
      <div
        className={`w-full ${
          showMenu ? "flex" : "hidden"
        } justify-between h-full bg-gray-900 bg-opacity-70 absolute inset-0`}
        onClick={() => hideMenu()}></div>
      <nav className="flex justify-between">
        {Logo}
        {NavLeft}
        <NavRight toggleMenu={toggleMenu} />
      </nav>
    </header>
  );
};

type Props = {
  children?: ReactNode;
};
const Li = ({ children }: Props) => {
  return (
    <li className="hover:underline hover:decoration-amber-500 underline-offset-8 hover:text-amber-500 ">{children}</li>
  );
};

const Logo = (
  <Link to="/">
    <h1 className="uppercase text-lg md:text-xl flex">
      <span className="text-amber-500 capitalize">win</span>
      <span className="text-gray-100">Tyre</span>
    </h1>
  </Link>
);

const NavLeft = (
  <ul className="hidden md:flex space-x-8">
    <Li>
      <Link to="/">Home</Link>
    </Li>
    <Li>
      <Link to="/contact">Contact</Link>
    </Li>
  </ul>
);

const Cart = () => {
  return (
    <Link to="/cart">
      <span className="flex gap-1">
        <span className="pt-1 flex">
          Cart <FaShoppingCart size={25} className="pt-1" />
        </span>
        <span className="text-md  bg-cyan-800 rounded-3xl w-9 h-9 p-1  self-baseline  text-center text-ellipsis text-white">
          45
        </span>
      </span>
    </Link>
  );
};

const NavRight = ({ toggleMenu }: any) => {
  return (
    <ul className="flex space-x-8 items-center">
      <div className="hidden md:flex justify between gap-4 ">
        <Li>
          <Link to="/login">Login</Link>
        </Li>
        <Li>
          <Link to="/register">Register</Link>
        </Li>
        <Li>
          <Link to="/order-history">My Orders</Link>
        </Li>
      </div>
      <div className="flex">
        <Li>
          <Cart />
        </Li>
        <div onClick={() => toggleMenu()} className="cursor-pointer">
          <AiOutlineAlignRight size={35} className="pt-1" />
        </div>
      </div>
    </ul>
  );
};

export default Header;
