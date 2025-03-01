import MainBanner from "@/components/MainBanner";

export const metadata = {
  title: "Not Found",
};

const notFoundLinks = [
  {
    title: "Go to home",
    url: "/",
    type: "primary",
  },
  {
    title: "Check our menu",
    url: "/our-menu",
    type: "secondary",
  },
];

const NotFound = () => {
  return (
    <MainBanner
      title="Wrong Direction"
      description="Maybe link is corrupt!"
      bgUrl="/not_found_main_banel.jpg"
      links={notFoundLinks}
    />
  );
};

export default NotFound;
