import styles from "@/styles/Home.module.css";

import BurgizaaMenu from "@/components/home/BurgizzaMenu";
import Features from "@/features/home/Features";
import Reservations from "@/components/Reservations";
import MainBanner from "@/components/MainBanner";

const mainBannerLinks = [
  {
    title: "BOOK A TABLE",
    url: "book-table",
    type: "primary",
  },
  {
    title: "MAKE AN ORDER",
    url: "our-menu",
    type: "secondary",
  },
];

export default function Home() {
  return (
    <main className={styles.page} style={styles}>
      <MainBanner
        title="Welcome To Burgizza"
        description="Et praesent nulla urna consequat dui arcu cursus diam fringilla libero risus, aliquam diam, aliquam ullamcorper urna pulvinar velit suspendisse aliquam lacus sollicitudin mauris."
        bgUrl="/main_banner.webp"
        links={mainBannerLinks}
      />
      <Features />
      <BurgizaaMenu />

      <Reservations />
      
    </main>
  );
}
