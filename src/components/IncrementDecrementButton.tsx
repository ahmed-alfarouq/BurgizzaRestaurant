import styles from "@/styles/components/IncrementDecrementButton.module.css";
import React from "react";

import { BiMinus, BiPlus } from "react-icons/bi";

type IncrementDecrementButtonProps = {
  increase: () => void;
  decrease: () => void;
  quantity: number;
  itemName: string;
};

const IncrementDecrementButton = React.memo(
  ({
    increase,
    decrease,
    quantity,
    itemName,
  }: IncrementDecrementButtonProps) => {
    return (
      <div className={styles.container}>
        <button
          type="button"
          className={styles.decrement_btn}
          onClick={decrease}
        >
          <span className="sr-only">Decrease {itemName} quantity</span>
          <BiMinus aria-hidden="true" />
        </button>
        <span className={styles.quantity}>{quantity}</span>
        <button
          type="button"
          className={styles.increment_btn}
          onClick={increase}
        >
          <span className="sr-only">Increase {itemName} quantity</span>
          <BiPlus aria-hidden="true" />
        </button>
      </div>
    );
  }
);

export default IncrementDecrementButton;
