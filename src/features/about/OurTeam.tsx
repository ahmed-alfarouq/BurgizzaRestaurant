import teamData from "@/staticData/teamData";
import styles from "@/styles/About.module.css";
import Image from "next/image";

const OurTeam = () => {
  return (
    <section className={styles.our_team}>
      <div className={styles.header}>
        <h2>Our Team</h2>
        <p>We have the best cooks</p>
      </div>
      <div className={styles.body}>
        {teamData.map((member) => (
          <div className={styles.card} key={member.id}>
            <div className={styles.image_container}>
              <Image src={member.image} alt="" width={100} height={100} />
            </div>
            <div className={styles.card_body}>
              <h2>{member.name}</h2>
              <h3>{member.job}</h3>
              <p>{member.description}</p>
            </div>
            <div className={styles.card_footer}>
              <h3>We are honored to serve you</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
