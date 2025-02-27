import teamData from "@/staticData/teamData";
import styles from "@/styles/About.module.css";

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
              <img src={member.image} alt="" />
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
