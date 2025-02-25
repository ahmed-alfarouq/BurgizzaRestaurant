import Link from "next/link";
import { TiDelete } from "react-icons/ti";
import MainBanel from "@/components/Common/MainBanel";

export const metadata = {
  title: "Not Found",
};

const NotFound = () => {
  return (
    <>
      <MainBanel
        h1Text="Wrong Direction"
        pText="Maybe Link Is corrupt"
        bg_url="/not_found_main_banel.jpg"
      />
      <section className="not_found">
        <TiDelete />
        <h1>Page Is Not Found</h1>
        <Link href="/">
          <a className="home_btn">Home</a>
        </Link>
      </section>
    </>
  );
};

export default NotFound;
