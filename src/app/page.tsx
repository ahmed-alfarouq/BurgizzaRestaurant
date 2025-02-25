import styles from "./page.module.css";

import Header from "@/components/home/MainBanel";
import BurgizaaMenu from "@/components/home/BurgizzaMenu";
import TrustUs from "@/components/home/Features";
import Reservations from "@/components/Common/Reservations";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <BurgizaaMenu />
      <TrustUs />
      <Reservations />
    </div>
  );
}
