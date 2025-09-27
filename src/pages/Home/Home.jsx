import { motion } from "framer-motion";
import React from "react";
import Typewriter from "react-typewriter-effect";
import Styles from "./Home.module.scss";



function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className={Styles.home}
    >
      <div className={Styles.home_background}>
        <div className={Styles.floating_shapes}>
          <div className={Styles.shape1}></div>
          <div className={Styles.shape2}></div>
          <div className={Styles.shape3}></div>
        </div>
      </div>

      <motion.div 
        className={Styles.home_content}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h1 className={Styles.home_content_title}>
          <Typewriter
            text="Merhaba, ben Mahir Uslu"
            cursorColor="#6366f1"
            typeSpeed={100}
            startDelay={1200}
            hideCursorAfterText={true}
          />
        </h1>

        <motion.div 
          className={Styles.subtitle_container}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5 }}
        >
          <h2 className={Styles.subtitle}>
            <Typewriter
              text="Full Stack Developer"
              cursorColor="#8b5cf6"
              typeSpeed={75}
              startDelay={2800}
              hideCursorAfterText={true}
            />
          </h2>
        </motion.div>

        <motion.div 
          className={Styles.description_container}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 4.2 }}
        >
          <p className={Styles.home_content_description}>
            <Typewriter
              text="Türkiye merkezli bir yazılım geliştiricisiyim. TypeScript, React, Node.js ve React Native kullanarak modern web ve mobil uygulamalar geliştiriyorum."
              cursorColor="#ffffff"
              typeSpeed={25}
              startDelay={4500}
              hideCursorAfterText={true}
            />
          </p>
        </motion.div>

        <motion.div 
          className={Styles.tech_stack}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 4.8 }}
        >
          <span className={Styles.tech_item}>React</span>
          <span className={Styles.tech_item}>TypeScript</span>
          <span className={Styles.tech_item}>Node.js</span>
          <span className={Styles.tech_item}>React Native</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Home;
