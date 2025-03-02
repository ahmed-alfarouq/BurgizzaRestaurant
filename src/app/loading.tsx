import styles from "@/styles/features/Loader.module.css";
import Image from "next/image";

const Loading = () => {
  return (
    <div className={styles.loader}>
      <div></div>
      <div>
        <Image src="/logo.jpg" alt="" width={100} height={100} />
        <h2>BURGIZZA</h2>
      </div>
      <h2>Loading....</h2>
    </div>
  );
};

export default Loading;
