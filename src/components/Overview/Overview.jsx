import React from "preact";

const OverviewBlock = (activitiesAlt) => {
  const { event, moderator, radio } = activitiesAlt.activitiesAlt;
  return (
    <div className="overview">
      <div className="overview__wrap">
        <ul className="overview__list">
          <li className="overview__item">
            <div className="overview__image">
              <img
                src="/assets/images/sakums-parskats-1.jpg"
                alt={event}
                placeholder="blurred"
                height="40px"
                width="40px"
              />
            </div>
          </li>
          <li className="overview__item">
            <div className="overview__image">
              <img
                src="/assets/images/moderators.jpg"
                alt={moderator}
                placeholder="blurred"
                height="40px"
                width="40px"
              />
            </div>
          </li>
          <li className="overview__item">
            <div className="overview__image">
              <img
                src="/assets/images/kazu-vaditajs-hero.jpg"
                alt={radio}
                placeholder="blurred"
                height="40px"
                width="40px"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OverviewBlock;
