import axios from "axios";
import React, { useEffect, useState } from "react";
import Article from "../../components/Article/Article";
import Loader from "../../components/Loader/Loader";
import Styles from "./Articles.module.scss";

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
    <div className={Styles.articles}>
      {loading && <Loader />}

      {articles.map((article) => (
        <Article {...article} />
      ))}
    </div>
  );
}

export default Articles;
