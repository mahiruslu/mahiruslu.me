import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFeather,
  faContactCard,
  faUser,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
// import {
//   faTwitter,
//   faInstagram,
//   faGithub,
//   faStackOverflow,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import Styles from "./Navbar.module.scss";

function Navbar() {
  // const navigation = useNavigate();

  return (
    <nav className={Styles.nav}>
      <motion.div
        drag="y"
        dragConstraints={{
          top: -50,
          left: -5,
          right: 5,
          bottom: 0,
        }}
        className={Styles.nav_wrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Link className={Styles.nav_item} to="/">
          <div className={Styles.nav_item_button}>
            <FontAwesomeIcon
              className={Styles.nav_item_button_icon}
              icon={faHome}
            />
            <span className={Styles.nav_item_title}>Home</span>
          </div>
        </Link>

        <Link className={Styles.nav_item} to="/profile">
          <div className={Styles.nav_item_button}>
            <FontAwesomeIcon
              className={Styles.nav_item_button_icon}
              icon={faUser}
            />
          </div>
        </Link>

        <Link className={Styles.nav_item} to="/projects">
          <div className={Styles.nav_item_button}>
            <FontAwesomeIcon
              className={Styles.nav_item_button_icon}
              icon={faLightbulb}
            />
          </div>
        </Link>

        <Link className={Styles.nav_item} to="/blog">
          <div className={Styles.nav_item_button}>
            <FontAwesomeIcon
              className={Styles.nav_item_button_icon}
              icon={faFeather}
            />
          </div>
        </Link>

        <Link className={Styles.nav_item} to="/contact">
          <div className={Styles.nav_item_button}>
            <FontAwesomeIcon
              className={Styles.nav_item_button_icon}
              icon={faContactCard}
            />
          </div>
        </Link>
      </motion.div>
    </nav>
  );
}

export default Navbar;
