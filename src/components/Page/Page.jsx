import React from "react";
import Styles from "./Page.module.scss";
import classNames from "classnames/bind";
import { motion } from "framer-motion";

let cx = classNames.bind(Styles);

function Page({ children, title, desc, direction }) {
  return (
    <motion.div
      className={Styles.Page}
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div className={Styles.page_top}>
        <h2>{title}</h2>
        <h4>{desc}</h4>
      </motion.div>
      <motion.div
        className={classNames(Styles.page_bottom, {
          [Styles.page_row]: direction === "row",
          [Styles.page_column]: direction === "column",
        })}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default Page;
