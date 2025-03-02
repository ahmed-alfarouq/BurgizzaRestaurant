"use client";
import styles from "@/styles/features/Cart.module.css";

import Link from "next/link";
// Import Icons
import { AiFillCloseCircle } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { BiCommentError } from "react-icons/bi";
// Redux & Actions
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { removeBurgerFromCart } from "@/lib/features/burger/burgerSlice";
import { removePizzaFromCart } from "@/lib/features/pizza/pizzaSlice";
import { useMemo } from "react";
import IncrementDecrementButton from "./IncrementDecrementButton";

const Cart = ({
  toggleCart,
  opened,
}: {
  toggleCart: () => void;
  opened: boolean;
}) => {
  const burgerCart = useAppSelector((state) => state.burger.burgerCart);
  // const pizzaCart = useAppSelector((state) => state.pizza.pizzaCart);
  const dispatch = useAppDispatch();
  let burger = [];
  let pizza = [];
  const increaseQuantity = () => {};
  const decreaseQuantity = () => {};
  const totalPrice = useMemo(() => {
    return burgerCart.reduce(
      (prevResult, item) => item.quantity * item.price + prevResult,
      0
    );
  }, []);

  // Loop Burger Items In Cart
  if (burgerCart.length > 0) {
    for (let i = 0; i < burgerCart.length; i++) {
      burger.push(
        <li className={styles.item} key={burgerCart[i].id}>
          <div className={styles.image_container}>
            <img src={burgerCart[i].image} alt={burgerCart[i].name} />
          </div>
          <div className={styles.item_details}>
            <h2 className={styles.title}>{burgerCart[i].name}</h2>
            <button
              type="button"
              className={styles.remove_from_cart}
              onClick={() => dispatch(removeBurgerFromCart(burgerCart[i]))}
            >
              <span className="sr-only">Remove item from cart</span>
              <FaTrash aria-hidden="true" />
            </button>
            <div className={styles.item_footer}>
              <IncrementDecrementButton
                increase={increaseQuantity}
                decrease={decreaseQuantity}
                quantity={burgerCart[i].quantity}
                itemName={burgerCart[i].name}
              />
              <span
                aria-label={`total amount is ${
                  burgerCart[i].quantity * burgerCart[i].price
                }`}
              >
                ${burgerCart[i].quantity * burgerCart[i].price}
              </span>
            </div>
          </div>
        </li>
      );
    }
  }

  // Loop Pizza Items In Cart
  // if (pizzaCart.length > 0) {
  //   for (let i = 0; i < pizzaCart.length; i++) {
  //     prices.push(pizzaCart[i].price * pizzaCart[i].quantity);
  //     pizza.push(
  //       <li className={styles.item} key={pizzaCart[i].id}>
  //         <div className="image-container">
  //           <img src={pizzaCart[i].image} alt={pizzaCart[i].name} />
  //           <span>{pizzaCart[i].quantity}</span>
  //         </div>
  //         <div className="item-details">
  //           <h3>{pizzaCart[i].name}</h3>
  //           <h4>
  //             {pizzaCart[i].quantity} * {pizzaCart[i].price}$
  //           </h4>
  //           <h5>Total: {pizzaCart[i].quantity * pizzaCart[i].price}$</h5>
  //           <FaTrashRestore
  //             className="delete"
  //             onClick={() => dispatch(removePizzaFromCart(pizzaCart[i]))}
  //           />
  //         </div>
  //       </li>
  //     );
  //   }
  // }

  return (
    <div className={`${styles.cart} ${opened && styles.open}`}>
      <button type="button" className={styles.close} onClick={toggleCart}>
        <span className="sr-only">Close Cart</span>
        <AiFillCloseCircle aria-hidden="true" />
      </button>

      {burger.length || pizza.length ? (
        <ul className={styles.list_of_items}>
          {burger}
          {/* {pizza} */}
        </ul>
      ) : (
        <ul className={styles.list_of_items}>
          <li className={styles.empty_cart}>
            <BiCommentError />
            <h2>Cart Is Empty</h2>
          </li>
        </ul>
      )}
      {burger.length || pizza.length ? (
        <div className={styles.cart_footer}>
          <span>{`Total Price: ${totalPrice}$`}</span>
          <Link
            href="/checkout"
            className={styles.checkout}
            onClick={toggleCart}
          >
            Check Out
          </Link>
        </div>
      ) : (
        <Link href="/menu" className={styles.our_menu} onClick={toggleCart}>
          Our Menu
        </Link>
      )}
    </div>
  );
};

export default Cart;
