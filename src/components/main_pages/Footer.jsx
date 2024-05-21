import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white p-4 text-center w-full">
      <p>Tu nombre o el de tu empresa © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
