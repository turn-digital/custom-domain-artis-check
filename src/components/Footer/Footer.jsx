import React from "preact";
import SvgIcon from "../Icon/Icon";

const Footer = (footerInfo) => {
  const { title, phone, email, fbLink, fbInLink } = footerInfo.footerInfo;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <h4 className="footer__title">{title}</h4>
          <div className="footer__info">
            <ul className="footer__item footer__item--links">
              <li>
                <a
                  href={`tel:${phone}`}
                  className="footer__link"
                  area-label="Phone"
                >
                  {phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailTo:${email}`}
                  className="footer__link"
                  area-label="Email"
                >
                  {email}
                </a>
              </li>
            </ul>
            <ul className="footer__item footer__item--soc">
              <li>
                <a
                  href={fbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__soc footer__soc--fb"
                  aria-label="Facebook"
                >
                  <SvgIcon icon="fb-icon" />
                </a>
              </li>
              <li>
                <a
                  href={fbInLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__soc footer__soc--in"
                  aria-label="Linkedin"
                >
                  <SvgIcon icon="in-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
