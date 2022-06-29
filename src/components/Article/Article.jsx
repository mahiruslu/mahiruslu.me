import React from "react";
import Styles from "./Article.module.scss";

function Article(props) {
  const { title, author, pubDate, categories, description, link } = props;

  const handleClick = () => {
    console.log(link);
    window.open(link, "_blank");
  };
  return (
    <div className={Styles.article} onClick={handleClick}>
      <div className={Styles.article_date}>
        {new Date(pubDate).toISOString().slice(0, 10)}
      </div>
      <div className={Styles.article_title}>{title}</div>

      <div className={Styles.article_tags}>
        {categories.map((categorie, index) => (
          <div className={Styles.article_tags_tag} key={index}>
            {categorie}
          </div>
        ))}
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: description }}></div> */}
    </div>
  );
}

export default Article;
