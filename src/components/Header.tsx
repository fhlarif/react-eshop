import { ReactNode, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    showMenu === true ? setShowTransition(false) : setShowTransition(true);
  };

  const hideMenu = () => {
    setShowMenu(false);
    // setShowMenu(true);
  };

  return (
    <header className="w-full bg-black p-4 lg:text-lg leading-loose tracking-wide md:text-md text-sm">
      <Mobile hideMenu={hideMenu} showMenu={showMenu} showTransition={showTransition} />
      <nav className="flex justify-between">
        <span className="">{Logo}</span>
        <NavLeft />
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

type TActive = {
  isActive: boolean;
};

const ActiveLink = ({ isActive }: TActive) =>
  isActive ? "underline hover:decoration-amber-500 underline-offset-8 text-amber-500" : "";

const Logo = (
  <NavLink className={ActiveLink} to="/">
    <h1 className="uppercase text-lg md:text-xl flex">
      <span className="text-amber-500 capitalize">win</span>
      <span className="text-gray-100">Tyre</span>
    </h1>
  </NavLink>
);

const NavLeft = () => {
  return (
    <ul className="hidden md:flex space-x-8">
      <Li>
        <NavLink className={ActiveLink} to="/">
          Home
        </NavLink>
      </Li>
      <Li>
        <NavLink className={ActiveLink} to="/contact">
          Contact
        </NavLink>
      </Li>
    </ul>
  );
};

const Cart = () => {
  return (
    <NavLink className={ActiveLink} to="/cart">
      <span className="flex gap-1">
        <span className="pt-1 flex">
          Cart <FaShoppingCart size={25} className="pt-1" />
        </span>
        <span className="text-md  bg-cyan-800 rounded-3xl w-9 h-9 p-1  self-baseline  text-center text-ellipsis text-white">
          45
        </span>
      </span>
    </NavLink>
  );
};

const NavRight = ({ toggleMenu }: any) => {
  return (
    <ul className="flex space-x-8 items-center">
      <div className="hidden md:flex justify between gap-4 ">
        <Li>
          <NavLink className={ActiveLink} to="/login">
            Login
          </NavLink>
        </Li>
        <Li>
          <NavLink className={ActiveLink} to="/register">
            Register
          </NavLink>
        </Li>
        <Li>
          <NavLink className={ActiveLink} to="/order-history">
            My Orders
          </NavLink>
        </Li>
      </div>
      <div className="flex">
        <Li>
          <Cart />
        </Li>
        <div onClick={() => toggleMenu()} className="cursor-pointer md:hidden flex">
          <AiOutlineAlignRight size={35} className="pt-1" />
        </div>
      </div>
    </ul>
  );
};

type TMobile = {
  hideMenu: () => void;
  showMenu: boolean;
  showTransition: boolean;
};

function Mobile({ hideMenu, showMenu, showTransition }: TMobile): JSX.Element {
  return (
    <>
      {showMenu && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className={` flex justify-between h-full w-full bg-gray-900 bg-opacity-70 absolute inset-0`}
            onClick={() => hideMenu()}></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5, transform: "translateY(-100%)" }}
            animate={{ opacity: 1, scale: 1, transform: "translateY(0%)" }}
            transition={{ duration: 0.4 }}
            onClick={() => hideMenu()}
            className={`w-1/2 h-full z-50 bg-black absolute inset-0`}>
            <div>
              <div className="flex justify-between w-full p-4">
                {Logo}
                <span onClick={() => hideMenu()}>
                  <AiOutlineClose size={25}></AiOutlineClose>
                </span>
              </div>
              <ul className="p-4 text-md flex flex-col gap-2">
                <Li>
                  <NavLink className={ActiveLink} to="/">
                    Home
                  </NavLink>
                </Li>
                <Li>
                  <NavLink className={ActiveLink} to="/contact">
                    Contact Us
                  </NavLink>
                </Li>
                <Li>
                  <NavLink className={ActiveLink} to="/login">
                    Login
                  </NavLink>
                </Li>
                <Li>
                  <NavLink className={ActiveLink} to="/register">
                    Register
                  </NavLink>
                </Li>
                <Li>
                  <NavLink className={ActiveLink} to="/orders">
                    My Orders
                  </NavLink>
                </Li>
                <Li>
                  <NavLink className={ActiveLink} to="/cart">
                    Cart
                  </NavLink>
                </Li>
              </ul>
            </div>
          </motion.div>
        </>
      )}
      {showTransition && showMenu === false && (
        <>
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className={` flex justify-between h-full w-full rounded-lg bg-gray-900 bg-opacity-70 absolute inset-0`}></motion.div>
          <motion.div
            initial={{ opacity: 1, scale: 1, transform: "translateY(0%)" }}
            animate={{ opacity: 0, scale: 0.5, transform: "translateY(100%)" }}
            transition={{ duration: 0.4 }}
            className={`w-1/2 h-full z-50 bg-black absolute inset-0`}></motion.div>
        </>
      )}
    </>
  );
}

export default Header;
