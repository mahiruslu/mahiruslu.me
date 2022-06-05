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
import {
  faTwitter,
  faInstagram,
  faGithub,
  faStackOverflow,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import Styles from "./Navbar.module.scss";

function Navbar() {
  const navigation = useNavigate();
  console.log(navigation);

  return (
    <nav className={Styles.nav}>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        className={Styles.nav_wrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={Styles.nav_item}>
          <Link className={Styles.nav_item_button} to="/">
            <FontAwesomeIcon
              className={Styles.nav_item_button_icon}
              icon={faHome}
              size="x"
            />
            <span className={Styles.nav_item_title}>Home</span>
          </Link>
        </div>
        <div className={Styles.nav_item}>
          <Link className={Styles.nav_item_button} to="/profile">
            <FontAwesomeIcon
              className={Styles.nav_item_button_icon}
              icon={faUser}
              size="x"
            />
          </Link>
        </div>

        <div className={Styles.nav_item}>
          <Link className={Styles.nav_item_button} to="/gallery">
            <FontAwesomeIcon
              className={Styles.nav_item_button_icon}
              icon={faLightbulb}
              size="x"
            />
          </Link>
        </div>

        <div className={Styles.nav_item}>
          <Link className={Styles.nav_item_button} to="/">
            <FontAwesomeIcon
              className={Styles.nav_item_button_icon}
              icon={faFeather}
              size="x"
            />
          </Link>
        </div>

        <div className={Styles.nav_item}>
          <Link className={Styles.nav_item_button} to="/">
            <FontAwesomeIcon
              className={Styles.nav_item_button_icon}
              icon={faContactCard}
              size="x"
            />
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
