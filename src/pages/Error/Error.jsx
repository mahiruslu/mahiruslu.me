import React from "react";
import Styles from "./Error.module.scss";
import { motion } from "framer-motion";

function Error() {
  return (
    <motion.div
      className={Styles.container}
      initial={{ opacity: 0.1, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, bounce: 1 }}
    >
      <p className={Styles.message}>
        The page you're trying to reach is not exist. You can reach me if you
        want to know more about me! 🙂
      </p>
    </motion.div>
  );
}

export default Error;
