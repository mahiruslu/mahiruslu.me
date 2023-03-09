import React, { useEffect, useState } from "react";
import Styles from "./Carousel.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

function Carousel({ data }) {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    setItems(data);
  }, [data]);

  useEffect(() => {
    console.log(items);
    console.log(items?.length);
  }, [items]);

  const handeCurrentItem = (type) => {
    if (type === "next") {
      console.log(items.length);
      currentItem < items.length - 1 && setCurrentItem((prev) => prev + 1);
    } else if (type === "previous") {
      currentItem > 0 && setCurrentItem((prev) => prev - 1);
    }
  };

  const handleClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={Styles.carousel}>
      <div className={Styles.carousel_content}>
        {/* <img src={items[currentItem]?.image} alt={items[currentItem]?.name} /> */}
        <h1 className={Styles.carousel_content_name}>
          {items[currentItem]?.name}
        </h1>
        <p className={Styles.carousel_content_desc}>
          {items[currentItem]?.desc}
        </p>
        {/* <p className={Styles.carousel_content_type}>
          {items[currentItem]?.type}
        </p> */}

        <div className={Styles.carousel_content_links}>
          {items[currentItem]?.links
            ? Object.keys(items[currentItem]?.links)?.map((key, index) => (
                <div
                  onClick={() => handleClick(items[currentItem]?.links[key])}
                  className={Styles.carousel_content_links_link}
                  key={index}
                >
                  {key}
                </div>
              ))
            : null}
        </div>

        {/* <div className={Styles.carousel_content_tags}>
          {items[currentItem]?.tags
            ? items[currentItem]?.tags.map((tag, index) => (
                <div className={Styles.carousel_content_tags_tag} key={index}>
                  {tag}
                </div>
              ))
            : null}
        </div> */}
        <div className={Styles.carousel_content_technologies_wrapper}>
          <div className={Styles.carousel_content_technologies}>
            <div
              className={Styles.carousel_content_technologies_technology}
              key={"technologies"}
            >
              Technologies:
            </div>
            {items[currentItem]?.technologies
              ? items[currentItem]?.technologies.map((technology, index) => (
                  <div
                    className={Styles.carousel_content_technologies_technology}
                    key={index}
                  >
                    {technology}
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
      <div
        className={classNames(Styles.carousel_button_left, {
          [Styles.carousel_button_disabled]: currentItem <= 0,
        })}
        onClick={() => handeCurrentItem("previous")}
      >
        Previous
      </div>
      <div
        className={classNames(Styles.carousel_button_right, {
          [Styles.carousel_button_disabled]: currentItem >= items?.length - 1,
        })}
        onClick={() => handeCurrentItem("next")}
      >
        Next
      </div>

      <div className={Styles.carousel_button_bottom}>
        {currentItem + 1}
        <div className={Styles.carousel_button_bottom_filler}>
          <div className={Styles.carousel_button_bottom_filler_empty}></div>
          <div
            className={Styles.carousel_button_bottom_filler_filled}
            style={{ width: `${(100 / items?.length) * (currentItem + 1)}px` }}
          ></div>
        </div>
        {items?.length}
      </div>
    </div>
  );
}

export default Carousel;
