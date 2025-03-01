"use client";
import styles from "@/styles/features/Navbar.module.css";

import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { useAppSelector } from "@/lib/hooks";

// Import Icons
import { AiFillCloseCircle } from "react-icons/ai";
import { RiShoppingCartFill } from "react-icons/ri";

// Import Components
import Cart from "./Cart";
import { IoMenu } from "react-icons/io5";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isMobile, setIsMobel] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const cartRef = useRef<HTMLDivElement>(null);

  const toggleOpenClass = () => {
    setOpenMenu((prev) => !prev);
  };

  const toggleCart = () => {
    cartRef.current?.classList.toggle("open");
  };
  const numOfPizzaInCart = useAppSelector(
    (state) => state.pizza.numOfPizzaInCart
  );
  const numOfBurgerInCart = useAppSelector(
    (state) => state.burger.numOfBurgerInCart
  );

  useLayoutEffect(() => {
    if (window.innerWidth <= 991.99) {
      setIsMobel(true);
    }
  }, []);

  return (
    <header className={styles.navbar}>
      <div className={styles.main_header_bar}>
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
        <span className={styles.logo}>Burgizza</span>
        <Link href="/login" className={styles.login}>
          Log In
        </Link>
      </div>
      <nav className={`${styles.collapse_menu} ${openMenu && styles.open}`}>
        <AiFillCloseCircle
          className={styles.close_menu}
          onClick={toggleOpenClass}
        />
        <ul>
          <li onClick={toggleOpenClass}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={toggleOpenClass}>
            <Link href="/menu">Our Menu</Link>
          </li>
          <li onClick={toggleOpenClass}>
            <Link href="/about">About</Link>
          </li>
          <li onClick={toggleOpenClass}>
            <Link href="/offers">Offers</Link>
          </li>
          <li onClick={toggleOpenClass}>
            <Link href="/contact">Contact</Link>
          </li>
          {isMobile ?? (
            <li className={styles.cart_icon}>
              <RiShoppingCartFill onClick={toggleCart} />
              {numOfBurgerInCart + numOfPizzaInCart > 0 && (
                <span onClick={toggleCart}>
                  {numOfBurgerInCart + numOfPizzaInCart}
                </span>
              )}
            </li>
          )}
        </ul>
      </nav>
      <button
        type="button"
        className={`${styles.toggle_icon} ${openMenu && styles.open}`}
        onClick={toggleOpenClass}
      >
        <span className="sr-only">Open Menu</span>
        {!openMenu ? <IoMenu /> : <CgClose />}
      </button>
      {/* <Cart toggleCart={toggleCart} cartRef={cartRef} /> */}
    </header>
  );
};

export default Navbar;
