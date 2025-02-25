import styles from "@/styles/About.module.css";
// Import Components
import MainBanel from "@/components/Common/MainBanel";
import Reservations from "@/components/Common/Reservations";
import OurStory from "@/components/About/OurStory";
import OurTeam from "@/components/About/OurTeam";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const About = () => {
  return (
    <section className={styles.about}>
      <MainBanel
        h1Text="About Us"
        pText="Read our Story, How we started and about the Team"
        bg_url="/about_main_banel.jpg"
      />
      <OurStory />
      <OurTeam />
      <Reservations />
    </section>
  );
};

export default About;
