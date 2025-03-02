"use client";
import styles from "@/styles/features/Cart.module.css";

import Link from "next/link";
import Image from "next/image";

// Import Icons
import { AiFillCloseCircle } from "react-icons/ai";
import { BiCommentError } from "react-icons/bi";

// Redux & Actions
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useMemo } from "react";
import IncrementDecrementButton from "./IncrementDecrementButton";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "@/lib/features/cart/cartSlice";

const Cart = ({
  toggleCart,
  opened,
}: {
  toggleCart: () => void;
  opened: boolean;
}) => {
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  const increaseQuantity = (id: string) => {
    dispatch(increaseItemQuantity({ id }));
  };
  const decreaseQuantity = (id: string) => {
    dispatch(decreaseItemQuantity({ id }));
  };

  const totalPrice = useMemo(() => {
    return cart.reduce(
      (prevResult, item) => item.quantity * item.price + prevResult,
      0
    );
  }, [cart]);

  return (
    <div className={`${styles.cart} ${opened && styles.open}`}>
      <button type="button" className={styles.close} onClick={toggleCart}>
        <span className="sr-only">Close Cart</span>
        <AiFillCloseCircle aria-hidden="true" />
      </button>

      {cart.length ? (
        <>
          <ul className={styles.list_of_items}>
            {cart.map((cartItem) => (
              <li className={styles.item} key={cartItem.id}>
                <div className={styles.image_container}>
                  <Image
                    src={cartItem.image}
                    alt={cartItem.title}
                    width={150}
                    height={100}
                  />
                </div>
                <div className={styles.item_details}>
                  <h2 className={styles.title}>{cartItem.title}</h2>
                  <div className={styles.item_footer}>
                    <IncrementDecrementButton
                      increase={() => increaseQuantity(cartItem.id)}
                      decrease={() => decreaseQuantity(cartItem.id)}
                      quantity={cartItem.quantity}
                      itemName={cartItem.title}
                    />
                    <span
                      aria-label={`total amount is ${
                        cartItem.quantity * cartItem.price
                      }`}
                    >
                      ${cartItem.quantity * cartItem.price}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
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
        </>
      ) : (
        <>
          <div className={styles.empty_cart}>
            <BiCommentError />
            <h2>Cart Is Empty</h2>
          </div>
          <div className={styles.cart_footer}>
            <Link href="/menu" className={styles.our_menu} onClick={toggleCart}>
              Our Menu
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
