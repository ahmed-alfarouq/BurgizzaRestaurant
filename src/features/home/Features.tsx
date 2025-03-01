import Image from "next/image";
import featuresData from "@/staticData/featuresData";
import styles from "@/styles/Home.module.css";

const Features = () => {
  return (
    <section className={styles.features}>
      <Image src="/pizza.webp" alt="" width={300} height={300} />
      <div className={styles.cards}>
        {featuresData.map((feature) => (
          <div className={styles.features_card} key={feature.title}>
            <div className={styles.features_img}>
              <Image src={feature.image} alt="" width={200} height={200} />
            </div>
            <div className={styles.features_card_content}>
              <div className={styles.page_header}>
                <h1>{feature.title}</h1>
              </div>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
