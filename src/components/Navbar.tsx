"use client";
import styles from "@/styles/features/Navbar.module.css";

import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import { useAppSelector } from "@/lib/hooks";

// Actions
import signupWithGoogle from "@/actions/signupWithGoogle";
import signout from "@/actions/signout";

// Import Icons
import { RiShoppingCartFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

// Import Components
import Cart from "./Cart";

const Navbar = ({ loggedIn }: { loggedIn: boolean }) => {
  const [isMobile, setIsMobel] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [isCartOpened, setIsCartOpened] = useState(false);

  const toggleNavbar = () => {
    if (isMobile) {
      setOpenMenu((prev) => !prev);
    }
  };

  const toggleCart = () => {
    setIsCartOpened((prev) => !prev);
  };

  const cart = useAppSelector((state) => state.cart.cart);

  useLayoutEffect(() => {
    if (window.innerWidth <= 991.99) {
      setIsMobel(true);
    }
  }, []);

  return (
    <header className={styles.navbar}>
      <div className={styles.main_header_bar}>
        {!isMobile && (
          <div className={styles.social_media}>
            <Link href="#">
              <BsTwitter />
            </Link>
            <Link href="#">
              <FaFacebook />
            </Link>
            <Link href="#">
              <BsInstagram />
            </Link>
          </div>
        )}
        <span className={styles.logo}>Burgizza</span>
        {!isMobile && (
          <>
            {loggedIn ? (
              <button className={styles.login} onClick={signout}>
                Log Out
              </button>
            ) : (
              <button className={styles.login} onClick={signupWithGoogle}>
                Log In
              </button>
            )}
          </>
        )}
      </div>
      <nav className={`${styles.collapse_menu} ${openMenu && styles.open}`}>
        <ul>
          <li onClick={toggleNavbar}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={toggleNavbar}>
            <Link href="/menu">Our Menu</Link>
          </li>
          <li onClick={toggleNavbar}>
            <Link href="/about">About</Link>
          </li>
          <li onClick={toggleNavbar}>
            <Link href="/offers">Offers</Link>
          </li>
          <li onClick={toggleNavbar}>
            <Link href="/contact">Contact</Link>
          </li>
          {isMobile && (
            <>
              {loggedIn ? (
                <li className={styles.login} onClick={signout}>
                  Log Out
                </li>
              ) : (
                <li className={styles.login} onClick={signupWithGoogle}>
                  Log In
                </li>
              )}
            </>
          )}
          <li className={styles.cart_icon}>
            <button type="button" onClick={toggleCart}>
              <span className="sr-only">Cart</span>
              <RiShoppingCartFill />
            </button>
            {cart.length > 0 && (
              <span
                onClick={toggleCart}
                aria-label={`Cart contains ${cart.length} of items`}
                aria-live="polite"
              >
                {cart.length}
              </span>
            )}
          </li>
        </ul>
      </nav>
      {isMobile && (
        <button
          type="button"
          className={`${styles.toggle_icon} ${openMenu && styles.open}`}
          onClick={toggleNavbar}
        >
          <span className="sr-only">Open Menu</span>
          {!openMenu ? <IoMenu /> : <CgClose />}
        </button>
      )}
      <Cart toggleCart={toggleCart} opened={isCartOpened} />
    </header>
  );
};

export default Navbar;
