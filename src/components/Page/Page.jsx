import React from "react";
import Styles from "./Page.module.scss";
import classNames from "classnames/bind";
import { motion } from "framer-motion";

let cx = classNames.bind(Styles);

function Page({ children, title, desc, direction }) {
  return (
    <motion.div className={Styles.page}>
      <motion.div className={Styles.page_top}>
        <h2>{title}</h2>
        <h4>{desc}</h4>
      </motion.div>
      <motion.div className={Styles.page_bottom}>{children}</motion.div>
    </motion.div>
  );
}

export default Page;
