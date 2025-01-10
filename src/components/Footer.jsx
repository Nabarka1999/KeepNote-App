import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} </p>
      <p>Developed by Nabarka Roy. For inquiries, please contact: nabarkaroy.20.8@gmail.com.</p> 
    </footer>
  );
}

export default Footer;
