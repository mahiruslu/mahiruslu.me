import React from "react";
import Styles from "./Project.module.scss";
import { motion } from "framer-motion";

function Project(props) {
  const { name, image, tags, technologies, type, links } = props;

  const handleClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className={Styles.project}
      key={name}
    >
      {/* <div className={Styles.project_made}>Made 💪🏻</div> */}
      <div className={Styles.project_type}>#{type}</div>
      <div className={Styles.project_name}>{name}</div>

      {/* {links.map(
        (link, index) => (
          console.log(link),
          (
            <div className={Styles.project_link} key={index}>
              {link}
            </div>
          )
        )
      )} */}
      <div className={Styles.project_links}>
        {Object.keys(links).map((key, index) => (
          <div
            onClick={() => handleClick(links[key])}
            className={Styles.project_links_link}
            key={index}
          >
            {key}
          </div>
        ))}
      </div>

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
