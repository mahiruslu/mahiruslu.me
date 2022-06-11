import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import Styles from "./Projects.module.scss";

import { db } from "../../firebase.js";
import { onValue, ref, set } from "firebase/database";

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
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          {project.name} {project.date ? project.date : "tarih girilmemiş"}
        </div>
      ))}
    </div>
  );
}

export default Projects;
