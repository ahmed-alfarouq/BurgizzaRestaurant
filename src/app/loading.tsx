import Spinner from "@/components/Spinner";
import styles from "@/styles/features/Loader.module.css";
import Image from "next/image";

const Loading = () => {
  return (
    <div className={styles.container}>
      <Spinner className={styles.spinner} />
      <Image
        src="/logo.jpg"
        alt=""
        width={100}
        height={100}
        className={styles.logo}
      />
    </div>
  );
};

export default Loading;
