type FeaturesData = {
  image: string;
  title: string;
  description: string;
}[];

const featuresData: FeaturesData = [
  {
    image: "/images/fresh_ingredients.webp",
    title: "Fresh Ingredients",
    description:
      "Risus egestas felis, purus ultricies tortor feugiat aliquam euismod senectus sed amet felis viverra mi bibendum.",
  },
  {
    image: "/images/mozarella.webp",
    title: "Handmade Mozarella",
    description:
      "Feugiat neque, rhoncus suspendisse proin amet aliquet diam pretium condimentum nisl tempus risus imperdiet egestas sit.",
  },
  {
    image: "/images/secret_sauce.webp",
    title: '"Secret Recipe" Sauce',
    description:
      "Placerat id sagittis dolor dictum sit ante dui varius dui eu iaculis pellentesque nam lobortis lectus.",
  },
];

export default featuresData;
