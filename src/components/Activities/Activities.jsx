import React from "preact";

const OverviewBlock = ({ title, content, activitiesAlt, anchorName, urls }) => {
  const { event, moderator, radio } = activitiesAlt;
  const { pasakumuUrl, moderatorUrl, radioUrl } = urls;

  return (
    <div className="activities" id={anchorName}>
      <div className="wrapper">
        <h3 className="activities__title title titlePadding">{title}</h3>
        <ul className="activities__list">
          <li className="activities__item">
            <a className="activities__link" href={pasakumuUrl}></a>
            <div
              className={`${
                true
                  ? "activities__image activities__image--visible"
                  : "activities__image"
              }`}
            >
              <img
                className="activities__image-blade"
                src={"/artis-astro/assets/images/svg/pattern-round-blade.svg"}
                alt="Svg pattern - grey circle"
              />
              <div className={`activities__image-tag pasakumu-vaditajs`}>
                <img
                  src="/artis-astro/assets/images/pasakuma-vaditajs-hero.jpg"
                  alt={event}
                  placeholder="blurred"
                />
              </div>
            </div>
            <h4 className="activities__section">{content.organiser}</h4>
          </li>
          <li className="activities__item">
            <a className="activities__link" href={moderatorUrl}></a>
            <div
              className={`${
                true
                  ? "activities__image activities__image--visible"
                  : "activities__image"
              }`}
            >
              <img
                className="activities__image-blade"
                src={"/artis-astro/assets/images/svg/pattern-round-blade.svg"}
                alt="Svg pattern - grey circle"
              />
              <div className={`activities__image-tag diskusiju-moderators`}>
                <img
                  src="/artis-astro/assets/images/moderators.jpg"
                  alt={moderator}
                  placeholder="blurred"
                />
              </div>
            </div>
            <h4 className="activities__section">{content.moderator}</h4>
          </li>
          <li className="activities__item">
            <a className="activities__link" href={radioUrl}></a>
            <div
              className={`${
                true
                  ? "activities__image activities__image--visible"
                  : "activities__image"
              }`}
            >
              <img
                className="activities__image-blade"
                src={"/artis-astro/assets/images/svg/pattern-round-blade.svg"}
                alt="Svg pattern - grey circle"
              />
              <div className={`activities__image-tag radio-personiba`}>
                <img
                  src="/artis-astro/assets/images/radioHomePage.jpg"
                  alt={radio}
                  placeholder="blurred"
                />
              </div>
            </div>
            <h4 className="activities__section">{content.radio}</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OverviewBlock;
