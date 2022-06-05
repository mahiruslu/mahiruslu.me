import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div>
      <motion.div
        drag="x"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Home</h1>
      </motion.div>
    </div>
  );
}

export default Home;
