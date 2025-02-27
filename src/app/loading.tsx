import styles from "@/styles/features/Loader.module.css";

const Loading = () => {
  return (
    <div className={styles.loader}>
      <div></div>
      <div>
        <img src="/logo.jpg" alt="" />
        <h2>BURGIZZA</h2>
      </div>
      <h2>Loading....</h2>
    </div>
  );
};

export default Loading;
