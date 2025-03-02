"use client";
import Link from "next/link";
import styles from "@/styles/Checkout.module.css";
// Import Icons
import { CgBmw } from "react-icons/cg";
// Redux & Actions
import { useAppSelector } from "@/lib/hooks";
import { useMemo } from "react";

const CheckOutTable = () => {
  const cart = useAppSelector((state) => state.cart.cart);
  // const dispatch = useAppDispatch();
  const totalPrice = useMemo(() => {
    return cart.reduce(
      (prevResult, item) => item.quantity * item.price + prevResult,
      0
    );
  }, [cart]);

  // Loop Burger Items In Cart
  // if (burgerCart.length > 0) {
  //   for (let i = 0; i < burgerCart.length; i++) {
  //     prices.push(burgerCart[i].price * burgerCart[i].quantity);
  //     burger.push(
  //       <tr key={burgerCart[i].id}>
  //         <td className={styles.image_container}>
  //           <img src={burgerCart[i].image} alt={burgerCart[i].name} />
  //         </td>
  //         <td>
  //           <h4>{burgerCart[i].name}</h4>
  //         </td>
  //         <td>
  //           <h4>{burgerCart[i].price}$</h4>
  //         </td>
  //         <td>
  //           <h4>{burgerCart[i].quantity}</h4>
  //         </td>
  //         <td>
  //           <h4>{burgerCart[i].quantity * burgerCart[i].price}$</h4>
  //         </td>
  //         <td>
  //           <FaTrashRestore
  //             className={styles.delete}
  //             onClick={() => dispatch(removeBurgerFromCart(burgerCart[i]))}
  //           />
  //         </td>
  //       </tr>
  //     );
  //   }
  // }

  return (
    <div className={`${styles.checkout_table} ${styles.empty_table}`}>
      {cart.length ? (
        <table className={styles.list_of_items}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th colSpan={2}>Total</th>
            </tr>
          </thead>
          <tbody>
            {/* {burger}
            {pizza} */}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={4}>Total Price</th>
              <td colSpan={2}>{totalPrice}$</td>
            </tr>
            <tr>
              <td colSpan={6}>
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
          <h2>You Didn&apos;t Choose Anything Yet.</h2>
          <p>Choose Some Products</p>
        </div>
      )}
      {!cart.length && (
        <Link href="/menu">
          <a className={styles.our_menu}>Our Menu</a>
        </Link>
      )}
    </div>
  );
};

export default CheckOutTable;
