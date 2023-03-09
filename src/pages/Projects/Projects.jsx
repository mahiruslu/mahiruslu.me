import React, { Suspense, useEffect, useState } from "react";

import classNames from "classnames/bind";

import { motion } from "framer-motion";
import Styles from "./Projects.module.scss";

import { db } from "../../utils/firebase";
import { onValue, ref } from "firebase/database";
import Project from "../../components/Project/Project";
import Loader from "../../components/Loader/Loader";
import Carousel from "../../components/Carousel/Carousel";

// console.log(fb.database);
function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = ref(db, "projects");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      // console.log(data);

      if (snapshot.exists()) {
        Object.values(data).map((project) =>
          setProjects((projects) => [...projects, project])
        );
      }
      setLoading(false);
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0.1, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={Styles.projects}
    >
      <Carousel data={projects} />
    </motion.div>
  );
}

export default Projects;
