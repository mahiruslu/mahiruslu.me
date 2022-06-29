import axios from "axios";
import React, { useEffect, useState } from "react";
import Article from "../../components/Article/Article";
import Loader from "../../components/Loader/Loader";
import Styles from "./Articles.module.scss";
import { motion } from "framer-motion";

function Articles() {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mahir.uslu"
      )
      .then((res) => {
        console.log(res.data.items);
        setArticles(res.data.items);
      })
      .catch((e) => {
        console.log(e.message);
      });
    return setLoading(false);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={Styles.articles}
    >
      {loading && <Loader />}
      <h2>Articles</h2>
      <h4>When you click a box you'll be redirected to the medium's website</h4>
      {articles.map((article, index) => (
        <Article {...article} key={index} />
      ))}
    </motion.div>
  );
}

export default Articles;
