"use client";
import Link from "next/link";
import styles from "@/styles/Checkout.module.css";
// Import Icons
import { FaTrashRestore } from "react-icons/fa";
import { CgBmw } from "react-icons/cg";
// Redux & Actions
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { removeBurgerFromCart } from "@/lib/features/burger/burgerSlice";
import { removePizzaFromCart } from "@/lib/features/pizza/pizzaSlice";

const CheckOutTable = () => {
  const burgerCart = useAppSelector((state) => state.Burger.burgerCart);
  let burger = [];
  const pizzaCart = useAppSelector((state) => state.Pizza.pizzaCart);
  let pizza = [];
  const dispatch = useAppDispatch();
  const prices = [];
  let totalPrice;

  // Loop Burger Items In Cart
  if (burgerCart.length > 0) {
    for (let i = 0; i < burgerCart.length; i++) {
      prices.push(burgerCart[i].price * burgerCart[i].quantity);
      burger.push(
        <tr key={burgerCart[i].id}>
          <td className={styles.image_container}>
            <img src={burgerCart[i].image} alt={burgerCart[i].name} />
          </td>
          <td>
            <h4>{burgerCart[i].name}</h4>
          </td>
          <td>
            <h4>{burgerCart[i].price}$</h4>
          </td>
          <td>
            <h4>{burgerCart[i].quantity}</h4>
          </td>
          <td>
            <h4>{burgerCart[i].quantity * burgerCart[i].price}$</h4>
          </td>
          <td>
            <FaTrashRestore
              className={styles.delete}
              onClick={() => dispatch(removeBurgerFromCart(burgerCart[i]))}
            />
          </td>
        </tr>
      );
    }
  }

  // Loop Pizza Items In Cart
  if (pizzaCart.length > 0) {
    for (let i = 0; i < pizzaCart.length; i++) {
      prices.push(pizzaCart[i].price * pizzaCart[i].quantity);
      pizza.push(
        <tr key={pizzaCart[i].id}>
          <td className={styles.image_container}>
            <img src={pizzaCart[i].image} alt={pizzaCart[i].name} />
          </td>
          <td>
            <h4>{pizzaCart[i].name}</h4>
          </td>
          <td>
            <h4>{pizzaCart[i].price}$</h4>
          </td>
          <td>
            <h4>{pizzaCart[i].quantity}</h4>
          </td>
          <td>
            <h4>{pizzaCart[i].quantity * pizzaCart[i].price}$</h4>
          </td>
          <td>
            <FaTrashRestore
              className={styles.delete}
              onClick={() => dispatch(removePizzaFromCart(pizzaCart[i]))}
            />
          </td>
        </tr>
      );
    }
  }

  // Calculate Total Price In The Cart & Total Items In The Cart
  pizzaCart.length || burgerCart.length
    ? (totalPrice = prices.reduce((prevValue, currentValue) => {
        return prevValue + currentValue;
      }))
    : null;

  return (
    <div className={`${styles.checkout_table} ${styles.empty_table}`}>
      {burger.length || pizza.length ? (
        <table className={styles.list_of_items}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th colSpan="2">Total</th>
            </tr>
          </thead>
          <tbody>
            {burger}
            {pizza}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="4">Total Price</th>
              <td colSpan="2">{totalPrice}$</td>
            </tr>
            <tr>
              <td colSpan="6">
                <div className={styles.coupon}>
                  <label htmlFor="coupon">Coupon</label>
                  <input type="text" id="coupon" placeholder="Coupon Code" />
                  <button type="submit">Apply</button>
                </div>
                <div className={styles.checkout_btn}>
                  <button type="button">Check Out</button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <div className={styles.empty_table}>
          <CgBmw />
          <h2>You Didn't Choose Anything Yet.</h2>
          <p>Choose Some Products</p>
        </div>
      )}
      {burger.length || pizza.length ? null : (
        <Link href="/menu">
          <a className={styles.our_menu}>Our Menu</a>
        </Link>
      )}
    </div>
  );
};

export default CheckOutTable;
