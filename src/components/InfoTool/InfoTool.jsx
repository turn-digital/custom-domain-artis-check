import { useState, useEffect, useRef } from "preact/hooks";
import IconMessenger from "../Icon/MessengerIcon";

const InfoTool = (props) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [activeName, setActiveName] = useState(false);
  const node = useRef(null);

  const toggleInfoBox = () => {
    if (!popupVisible) {
      document.addEventListener("click", handleOutsideClickFromInfoBox, false);
    } else {
      document.removeEventListener(
        "click",
        handleOutsideClickFromInfoBox,
        false
      );
    }

    setPopupVisible((prevState) => !prevState);
  };

  const handleScroll = () => {
    const lastScrollY = window.scrollY;

    if (lastScrollY === 0) {
      setActiveName(false);
    } else {
      setActiveName(true);
    }
  };

  const handleOutsideClickFromInfoBox = (e) => {
    if (node.current && node.current.contains(e.target)) {
      return;
    }

    toggleInfoBox();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const info = props.content;
  const infoPhone = "tel:" + info.heroPhone;
  const infoEmail = "mailto:" + info.heroEmail;
  const arrowTitle = info.arrowTitle;

  return (
    <div
      className={popupVisible ? "info-tool info-tool--open" : "info-tool"}
      ref={node}
    >
      <div className="info-tool__content">
        <div
          className={`${
            activeName
              ? "info-tool__show info-tool__show--hide"
              : "info-tool__show"
          }`}
        >
          <p className="info-tool__show-text">{arrowTitle}</p>
          <img
            className="info-tool__show-icon"
            src={"/assets/images/svg/icon-target.svg"}
            alt="Spinned arrow"
          />
        </div>
        <div className="info-tool__info">
          <div
            className="info-tool__info-icons"
            onClick={toggleInfoBox}
            onKeyDown={toggleInfoBox}
            role="presentation"
          >
            <img src={"/assets/images/svg/icon-phone.svg"} alt="Phone icon" />
            <img src={"/assets/images/svg/icon-email.svg"} alt="Email icon" />
          </div>
          <div className="info-tool__info-content">
            <h4 className="info-tool__info-title">{info.title}</h4>
            <p>
              <a href={infoPhone} className="info-tool__info-link">
                {info.heroPhone}
              </a>
            </p>
            <p>
              <a href={infoEmail} className="info-tool__info-link">
                {info.heroEmail}
              </a>
            </p>
            <img
              role="presentation"
              className="info-tool__info-arrow"
              src={"/assets/images/svg/icon-arrow--small.svg"}
              alt="Right arrow icon"
              onClick={toggleInfoBox}
              onKeyDown={toggleInfoBox}
            />
          </div>
        </div>
        <div className="info-tool__fb">
          <a
            href={info.heroMessengerPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="info-tool__fb-link"
            aria-label="Facebook Messenger"
          >
            <IconMessenger />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoTool;
