import React from "react";
import { motion } from "framer-motion";
import Styles from "./NagehanVeMahir.module.scss";
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
      <h2>Nagehan ve Mahir'in düğün bilgileri</h2>
      <h3>Aşağıda gerekli konum bilgilerini bulabilirsiniz.</h3>
      <h4>Kız almaya saat 11:00'de erkek evinden hareket edilecektir.</h4>

      <div className={Styles.home_address}>
        <div className={Styles.home_address_map}>
          <h3>Erkek evi</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d786.414908787562!2d32.5041363!3d37.9617326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08e6f7c47baf3%3A0xe366085819e39f7b!2zMzfCsDU3JzQ0LjEiTiAzMsKwMzAnMTIuOCJF!5e0!3m2!1str!2str!4v1667023299716!5m2!1str!2str"
            width="750"
            height="350"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="harita"
          ></iframe>
        </div>

        <div className={Styles.home_address_map}>
          <h3>Kız evi</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d197.1789895951051!2d32.4057096!3d37.7463386!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x90920215b5c5a203!2zMzfCsDQ0JzQ3LjMiTiAzMsKwMjQnMTkuMyJF!5e0!3m2!1str!2str!4v1667023631785!5m2!1str!2str"
            width="750"
            height="350"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="harita"
          ></iframe>
        </div>

        <div className={Styles.home_address_map}>
          <h3>Düğün salonu</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4035.464001617746!2d32.427030803573444!3d37.802355099321304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d0819c0642b7bd%3A0x2f69b881f69b3c43!2sUMMAN%20SADEM%20USTA!5e0!3m2!1str!2str!4v1667021610197!5m2!1str!2str"
            width="750"
            height="350"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="harita"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
