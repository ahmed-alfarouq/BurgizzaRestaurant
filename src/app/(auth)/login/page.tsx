import styles from "@/styles/Login.module.css";
import MainBanner from "@/components/MainBanner";
// import LogInForm from "@/components/LogIn/LogInForm";

export const metadata = {
  title: "Login",
};

const LogIn = () => {
  return (
    <>
      <section className={styles.log_in}>
        <MainBanner
          title="Log In"
          description="join us, and order what you like to eat today"
          bgUrl="/login_main_banel.jpg"
        />
        {/* <LogInForm /> */}
      </section>
    </>
  );
};

export default LogIn;
