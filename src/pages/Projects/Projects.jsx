import React, { Suspense, useEffect, useState } from "react";

import { motion } from "framer-motion";
import Styles from "./Projects.module.scss";

import { db } from "../../utils/firebase";
import { onValue, ref } from "firebase/database";
import Project from "../../components/Project/Project";
import Loader from "../../components/Loader/Loader";

// console.log(fb.database);
function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const query = ref(db, "projects");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        Object.values(data).map((project) => {
          setProjects((projects) => [...projects, project]);
        });
      }

      setLoading(false);
    });
  }, []);

  return (
    <motion.div className={Styles.projects}>
      {loading && <Loader/>}
      {projects.map((project, index) => (
        <Project {...project} key={index} />
      ))}
    </motion.div>
  );
}

export default Projects;
