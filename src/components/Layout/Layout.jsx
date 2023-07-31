import React from "preact";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./layout.css";
import "../../styles/style.scss";

const Layout = ({
  children,
  footerInfo,
  headerInfo,
  description,
  title,
  htmlLang,
}) => {
  return (
    <>
      <html lang={htmlLang}>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          data-domain="artisozolins.lv"
          src="https://plausible.io/js/script.js"
        ></script>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={"/assets/images/favicons/apple-touch-icon.png"}
        />
        <link
          rel="andorid-chrome-icon"
          sizes="192x192"
          href={"/assets/images/favicons/android-chrome-192x192.png"}
        />
        <link
          rel="andorid-chrome-icon"
          sizes="512x512"
          href={"/assets/images/favicons/android-chrome-512x512.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={"/assets/images/favicons/favicon-32x32.png"}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={"/assets/images/favicons/favicon-16x16.png"}
        />
        <link
          rel="mask-icon"
          href={"/assets/images/favicons/safari-pinned-tab.svg"}
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <Header headerInfo={headerInfo} />
        <main className="notfound__flex">{children}</main>
        <Footer footerInfo={footerInfo} />
      </html>
    </>
  );
};
export default Layout;
