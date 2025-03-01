import styles from "@/styles/components/MainBanner.module.css";
import Link from "next/link";

type MainBannerProps = {
  title: string;
  description: string;
  bgUrl: string;
  links?: {
    title: string;
    icon?: React.ReactNode;
    url: string;
    type: string;
  }[];
};

const MainBanner = ({ title, description, bgUrl, links }: MainBannerProps) => {
  const customStyles = {
    background: `url(${bgUrl}) center center /cover`,
  };
  return (
    <section className={styles.main_banner} style={customStyles}>
      <div className={styles.overlay}></div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.btns}>
        {links?.map((link) => (
          <Link
            key={link.title}
            href={link.url}
            className={`${styles.btn} ${styles[link.type]}`}
          >
            {link?.icon}
            {link.title}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MainBanner;
