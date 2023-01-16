import React from "react";
import Styles from "./Article.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
function Article(props) {
  const { title, author, pubDate, categories, description, link } = props;

  const handleClick = () => {
    window.open(link, "_blank");
  };


  return (
    <div className={Styles.article} onClick={handleClick}>
      <div className={Styles.article_top}>
        <div className={Styles.article_top_title}>
          {/* <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" /> */}
          <p>{title}</p>
        </div>
        <div className={Styles.article_top_date}>
          {new Date(pubDate).toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          })}
        </div>
      </div>
      <div className={Styles.article_bottom}>
        <div className={Styles.article_bottom_tags}>
          {categories.map((categorie, index) => (
            <div className={Styles.article_bottom_tags_tag} key={index}>
              #{categorie}
            </div>
          ))}
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: description }}></div> */}
      </div>
    </div>
  );
}

export default Article;
