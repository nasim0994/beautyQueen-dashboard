import { RxDashboard } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { BsBagCheckFill } from "react-icons/bs";

const sidebarLists = [
  {
    title: "Dashboards",
    icon: <RxDashboard />,
    pages: [
      {
        title: "Dashboard",
      },
    ],
  },
  {
    title: "Users",
    icon: <FaUserAlt />,
    pages: [
      {
        title: "All Users",
      },
      {
        title: "Reports Users",
      },
    ],
  },
  {
    title: "Ecommerce",
    icon: <BsBagCheckFill />,
    pages: [
      {
        title: "Products",
        pages: [
          {
            title: "Products List",
          },
          {
            title: "All Products",
          },
          {
            title: "Edit Products",
          },
          {
            title: "Delete Products",
          },
        ],
      },
      {
        title: "Orders",
        pages: [
          {
            title: "Orders List",
          },
        ],
      },
    ],
  },
];

export default sidebarLists;
