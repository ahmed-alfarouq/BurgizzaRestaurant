import styles from "@/styles/features/Footer.module.css";
// Import Icons
import {
  FaGooglePlus,
  FaYoutube,
  FaLinkedin,
  FaPhoneAlt,
  FaMailBulk,
} from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.header}>
        <div className={styles.about_us}>
          <h3 className={styles.subtitle}>About Us</h3>
          <p className={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s,
          </p>
          <div className={styles.social_media}>
            <a href="#" target="_blank" title="Facebook">
              <SiFacebook />
            </a>
            <a href="#" target="_blank" title="Twitter">
              <BsTwitterX />
            </a>
            <a href="#" target="_blank" title="Youtube">
              <FaYoutube />
            </a>
            <a href="#" target="_blank" title="Google Plus">
              <FaGooglePlus />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-alfarouq/"
              target="_blank"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className={styles.reach_us}>
          <div className={styles.info}>
            <div>
              <MdLocationOn size={18} />
              <h4>
                <span>Address:</span> Egypt
              </h4>
            </div>
            <div>
              <FaPhoneAlt size={18} />
              <h4>
                <span>phone:</span> (+20) 01018360530
              </h4>
            </div>
            <div>
              <FaMailBulk size={18} />
              <h4>
                <span>Email:</span> ahmed.omar.alfarouq@gmail.com
              </h4>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.footer}>
        <span>Copyright &copy; 2025 The Pizzeria</span>
        <span>Developed by Ahmed Al-Farouq</span>
      </p>
    </footer>
  );
};

export default Footer;
