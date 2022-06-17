import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import Styles from "./Projects.module.scss";

import { db } from "../../utils/firebase";
import { onValue, ref } from "firebase/database";
import Project from "../../components/Project/Project";

// console.log(fb.database);
function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val().projects;
      console.log(data);
      setProjects([]);
      data &&
        Object.values(data).map((project) => {
          setProjects((projects) => [...projects, project]);
        });

      console.log(projects);
    });
  }, []);
  return (
    <motion.div className={Styles.projects}>
      {projects.map((project, index) => (
        <Project
          {...project}
          floatFrom={index % 2 === 0 ? "left" : "right"}
          key={index}
        />
      ))}
    </motion.div>
  );
}

export default Projects;
