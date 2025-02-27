import { v4 as uuid } from "uuid";

type TeamData = {
  id: string;
  name: string;
  job: string;
  description: string;
  image: string;
}[];

const teamData: TeamData = [
  {
    id: uuid(),
    name: "Omar khan",
    job: "Head Chef",
    description:
      "An experienced chef specializing in Italian and French cuisine.",
    image: "/images/team/chef1.jpg",
  },
  {
    id: uuid(),
    name: "John Doe",
    job: "Sous Chef",
    description:
      "Passionate about creating innovative dishes and assisting in kitchen management.",
    image: "/images/team/chef2.jpg",
  },
  {
    id: uuid(),
    name: "Michael Johnson",
    job: "Restaurant Manager",
    description:
      "Ensures smooth operations, customer satisfaction, and high-quality service.",
    image: "/images/team/chef3.jpg",
  },
  {
    id: uuid(),
    name: "James Brown",
    job: "Waiter",
    description:
      "Provides excellent customer service and ensures a great dining experience.",
    image: "/images/team/chef4.jpg",
  },
];

export default teamData;
