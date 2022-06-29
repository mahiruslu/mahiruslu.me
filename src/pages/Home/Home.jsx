import React from "react";
import { motion } from "framer-motion";
import Styles from "./Home.module.scss";

function Home() {
  return (
    <div className={Styles.home}>
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={Styles.home_wrapper}
      >
        <div className={Styles.home_top_container}>
          <h1 className={Styles.home_title}>Mahir Uslu</h1>
          <h2 className={Styles.home_title_sub}>Software Developer</h2>
        </div>
        <p>Merhaba!</p>
      </motion.div>
    </div>
  );
}

export default Home;
