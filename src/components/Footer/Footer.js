import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 text-neutral">
      <div className="items-center grid-flow-col">
        <p>
          © 2023, made with by <strong>Nasim Uddin</strong> for a{" "}
          <strong>Beauty Queen Shop</strong>
        </p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link
          to="https://beautyqueen-83b6c.web.app/"
          target="_blank"
          className="hover:text-primary duration-300"
        >
          BeautyQueen
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
