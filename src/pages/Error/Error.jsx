import React from "react";
import Styles from "./Error.module.scss";
import { motion } from "framer-motion";

function Error() {
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      className={Styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className={Styles.message}>
        Olmayan bir sayfaya ulaşmaya çalışıyorsun, merak ettiğin birşey varsa
        bana ulaşmayı deneyebilirsin 🙂
      </p>
    </motion.div>
  );
}

export default Error;
