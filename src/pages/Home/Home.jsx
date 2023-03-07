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

import profilePhoto from "../../assets/images/profile.jpg";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0.1, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={Styles.home}
    >
      <div className={Styles.home_profile}>
        <img src={profilePhoto} alt="profile" />
      </div>
      <div className={Styles.home_content}>
        <h1 className={Styles.home_content_title}>Hi, I'm Mahir</h1>
        <p className={Styles.home_content_description}>
          I'm a software engineer based in Turkey. I can build websites and
          mobile applications.
        </p>
        <div className={Styles.home_content_social}>
          <SocialButton link="https://www.instagram.com/hudoin/">
            <FontAwesomeIcon icon={faInstagram} width={25} />
          </SocialButton>
          <SocialButton link="https://www.twitter.com/_hudoin/">
            <FontAwesomeIcon icon={faTwitter} width={25} />
          </SocialButton>
          <SocialButton link="https://www.medium.com/@mahir.uslu/">
            <FontAwesomeIcon icon={faMedium} width={25} />
          </SocialButton>
          <SocialButton link="https://www.linkedin.com/in/mahiruslu/">
            <FontAwesomeIcon icon={faLinkedin} width={25} />
          </SocialButton>
          <SocialButton link="https://www.github.com/mahiruslu/">
            <FontAwesomeIcon icon={faGithub} width={25} />
          </SocialButton>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
