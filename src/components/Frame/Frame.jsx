import React from "react";
import { motion } from "framer-motion";
import { Styles } from "./Frame.module.scss";

function Frame(...props) {
  return (
    <motion.div>
      <iframe src={props.link} title={props.title}></iframe>
    </motion.div>
  );
}

export default Frame;
