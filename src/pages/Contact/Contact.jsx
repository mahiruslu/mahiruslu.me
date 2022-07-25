import React from "react";
import Page from "../../components/Page/Page";
import Styles from "./Contact.module.scss";
import { motion } from "framer-motion";

function Contact() {
  return (
    <Page
      title="Contact"
      desc="You can contact me with for project and job offers or just for asking questions"
      direction="row"
    >
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, bounce: true }}
        className={Styles.contact}
      >
        hello
      </motion.div>
    </Page>
  );
}

export default Contact;
