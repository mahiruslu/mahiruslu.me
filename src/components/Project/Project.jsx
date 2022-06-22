import React from "react";
import Styles from "./Project.module.scss";
import { motion } from "framer-motion";

function Project(props) {
  const { name, image, tags, technologies, type, links } = props;
  return (
    <motion.div
      // drag
      // dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      // initial={{ opacity: 0.1, x: floatFrom === "left" ? -200 : 200 }}
      // animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0.1, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className={Styles.project}
      key={name}
    >
      <div className={Styles.project_type}>#{type}</div>
      <div className={Styles.project_name}>{name}</div>

      {links.map((link, index) => (
        <div className={Styles.project_link} key={index}>
          {link}
        </div>
      ))}

      <div className={Styles.project_bottom}>
        <div className={Styles.project_tags}>
          {tags.map((tag, index) => (
            <div className={Styles.project_tags_tag} key={index}>
              {tag}
            </div>
          ))}
        </div>
        <div className={Styles.project_technologies}>
          {technologies.map((technology, index) => (
            <div className={Styles.project_technologies_technology} key={index}>
              {technology}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Project;