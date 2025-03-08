import styles from "@/styles/features/Feature.module.css";
import Image from "next/image";
import featuresData from "@/staticData/featuresData";

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
            <h1 className={styles.title}>{feature.title}</h1>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
