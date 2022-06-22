import React from "react";
import { motion } from "framer-motion";
import Styles from "./Sceleton.module.scss";

function Sceleton() {
  return (
    <motion.div
      initial={{ opacity: 0.1, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className={Styles.project}
    >
      <div className={Styles.project_type}></div>
      <div className={Styles.project_name}></div>

      <div className={Styles.project_link}></div>

      <div className={Styles.project_bottom}>
        <div className={Styles.project_tags}>
          <div className={Styles.project_tags_tag}></div>
        </div>
        <div className={Styles.project_technologies}>
          <div className={Styles.project_technologies_technology}></div>
        </div>
      </div>
    </motion.div>
  );
}

export default Sceleton;
