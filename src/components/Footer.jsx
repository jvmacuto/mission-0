import React from "react";
import "../styles/footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="sb__footer section_padding">
        <div className="sb__footer-credits">
          <p>All rights reserved. | John Vincent L. Macuto</p>
        </div>

        <div className="sb__footer-socials">
          <a href="https://www.facebook.com/jeeeeeeybiiiii/">
            <FaFacebookSquare size={35} />
          </a>
          <a href="https://www.instagram.com/jeeeeeeybiiiii/">
            <FaInstagramSquare size={35} />
          </a>
          <a href="https://www.linkedin.com/in/john-vincent-macuto-178337273/">
            <FaLinkedin size={35} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
