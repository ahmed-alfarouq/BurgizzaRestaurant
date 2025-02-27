import styles from "@/styles/About.module.css";
// Import Components
import MainBanel from "@/components/MainBanner";
import Reservations from "@/components/Reservations";
import OurStory from "@/features/about/OurStory";
import OurTeam from "@/features/about/OurTeam";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const About = () => {
  return (
    <main className={styles.about}>
      <MainBanel
        h1Text="About Us"
        pText="Read our Story, How we started and about the Team"
        bg_url="/about_main_banel.jpg"
      />
      <OurStory />
      <OurTeam />
      <Reservations />
    </main>
  );
};

export default About;
