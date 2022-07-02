import React from "react";
import Styles from "./Page.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(Styles);

function Page({ children, title, desc, direction }) {
  return (
    <div className={Styles.page}>
      <div className={Styles.page_top}>
        <h2>{title}</h2>
        <h4>{desc}</h4>
      </div>
      <div className={Styles.page_bottom}>{children}</div>
    </div>
  );
}

export default Page;
