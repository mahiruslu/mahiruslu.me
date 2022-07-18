import React from "react";
import { motion } from "framer-motion";
import Styles from "./Home.module.scss";
import Page from "../../components/Page/Page";
import SocialButton from "../../components/SocialButton/SocialButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faMedium,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
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
        direction="column"
      >
        <h3>Hi there 👋🏻</h3>
        <br />
        <p>
          This site currently under construction. Not every section completed.
          Stay tuned for updates. Follow me on social media.
        </p>
        <div className={Styles.home_social_container}>
          <SocialButton link="https://www.instagram.com/hudoin">
            <FontAwesomeIcon icon={faInstagram} />
            Instagram
          </SocialButton>
          <SocialButton link="https://www.twitter.com/_hudoin">
            <FontAwesomeIcon icon={faTwitter} />
            Twitter
          </SocialButton>
          <SocialButton link="https://www.linkedin.com/in/mahiruslu">
            <FontAwesomeIcon icon={faLinkedin} />
            Linkedin
          </SocialButton>
          <SocialButton link="https://www.medium.com/@mahir.uslu">
            <FontAwesomeIcon icon={faMedium} />
            Medium
          </SocialButton>
          <SocialButton link="https://www.github.com/mahiruslu">
            <FontAwesomeIcon icon={faGithub} />
            Github
          </SocialButton>
        </div>
      </Page>
    </motion.div>
  );
}

export default Home;
