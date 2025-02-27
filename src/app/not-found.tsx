import Link from "next/link";

import MainBanner from "@/components/MainBanner";

import { TiDelete } from "react-icons/ti";

export const metadata = {
  title: "Not Found",
};

const NotFound = () => {
  return (
    <>
      <MainBanner
        title="Wrong Direction"
        description="Maybe Link Is corrupt"
        bgUrl="/not_found_main_banel.jpg"
      />
      <section className="not_found">
        <TiDelete />
        <h1>Page Is Not Found</h1>
        <Link href="/" className="home_btn">
          Home
        </Link>
      </section>
    </>
  );
};

export default NotFound;
