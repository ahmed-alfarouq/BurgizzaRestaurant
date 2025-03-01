import styles from "@/styles/Checkout.module.css";
import MainBanner from "@/components/MainBanner";
import CheckOutTable from "@/components/checkout/CheckOutTable";

const CheckOut = () => {
  return (
    <section className={styles.checkout}>
      <MainBanner
        title="Check Out"
        description="We Hope You Enjoy Our Services"
        bgUrl="/checkout_main_banel.jpg"
      />
      <CheckOutTable />
    </section>
  );
};

export default CheckOut;
