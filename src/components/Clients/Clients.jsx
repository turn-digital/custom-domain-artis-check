import React from "preact";

const Clients = (props) => {
  const title = props.title;
  return (
    <div className="clients">
      <div className="wrapper">
        <h3 className="clients__title title">{title}</h3>
        <div className="clients__list">
          <div className="clients__img">
            <img
              src="/assets/images/svg/logo-facebook.svg"
              alt="Facebook logo"
              width="100%"
              height="initial"
            />
          </div>
          <div className="clients__img">
            <img
              src="/assets/images/svg/logo-lbp.svg"
              alt="LBP logo"
              width="100%"
              height="initial"
            />
          </div>
          <div className="clients__img">
            <img
              src="/assets/images/svg/logo-lu.svg"
              alt="LU logo"
              width="100%"
              height="initial"
            />
          </div>
          <div className="clients__img">
            <img
              src="/assets/images/svg/ideju-instituts-logo.svg"
              alt="Ideju institūta logo"
              width="100%"
              height="initial"
            />
          </div>
          <div className="clients__img">
            <img
              src="/assets/images/svg/golin-logo.svg"
              alt="Golin logo"
              width="100%"
              height="initial"
            />
          </div>
          <div className="clients__img">
            <img
              src="/assets/images/svg/logo-rtu.svg"
              alt="RTU logo"
              width="100%"
              height="initial"
            />
          </div>
          <div className="clients__img">
            <img
              src="/assets/images/svg/liaa-logo.svg"
              alt="LIAA logo"
              width="100%"
              height="initial"
            />
          </div>
          <div className="clients__img">
            <img
              src="/assets/images/svg/Tet_logo.svg"
              alt="TET logo"
              width="100%"
              height="initial"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
