import React from "react";
import { motion } from "framer-motion";
import Styles from "./Home.module.scss";
import Page from "../../components/Page/Page";

function Home() {
  return (
    <div className={Styles.home}>
      <motion.div
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={Styles.home}
      >
        <Page
          title="Mahir Uslu"
          desc="
        Software Developer
          "
        >
          <h3>Hi there 👋🏻</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            inventore praesentium cum nobis omnis quae saepe deserunt. Quasi,
            facere inventore nihil sunt quibusdam eveniet et quod
            exercitationem, aliquid doloremque odit! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Iusto debitis ad reprehenderit impedit
            autem quaerat suscipit quasi officiis quos et expedita accusamus
            molestias deleniti recusandae ratione sint, molestiae aut veniam?
          </p>
        </Page>
      </motion.div>
    </div>
  );
}

export default Home;
