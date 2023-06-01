import "./header.css";
import React from "preact";

import { changeLanguage } from "i18next";

const Header = (props) => {
  return (
    <div className="language">
      <a
        title="latviešu valoda"
        href={`${props.headerInfo}`}
        onClick={() => changeLanguage("lv")}
      >
        Latviešu
      </a>{" "}
      <a
        title="English language"
        href={`/en${props.headerInfo}`}
        onClick={() => changeLanguage("en")}
      >
        English
      </a>
    </div>
  );
};

export default Header;
