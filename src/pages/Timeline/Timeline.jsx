import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faBriefcase,
  faClipboard,
  faChild,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { db } from "../../utils/firebase";
import { onValue, ref } from "firebase/database";
import Loader from "../../components/Loader/Loader";
import Style from "./Timeline.module.scss";

library.add(faSchool, faBriefcase, faClipboard, faChild, faLaptopCode);

function Timeline() {
  const [timelineElement, setTimelineElement] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = ref(db, "timeline");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        const copyArray = [];
        Object.values(data).map((item) => {
          copyArray.push(item);
        });
        copyArray.sort((a, b) => a.dateStart - b.dateStart);
        copyArray.reverse();
        setTimelineElement(copyArray);
      }

      setLoading(false);
    });
  }, []);
  return (
    <div className={Style.timeline}>
      {loading && <Loader />}
      {!loading && (
        <VerticalTimeline>
          {timelineElement.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#fff",
                color: "#000",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  #fff",
              }}
              date={`${item.dateStart} - ${item.dateEnd || "present"}`}
              iconStyle={{ background: "#fff", color: "#000" }}
              icon={
                // <FontAwesomeIcon
                //   icon={item.type === "job" ? faBriefcase : faSchool}
                // />
                <FontAwesomeIcon icon={`fas fa-${item?.icon}`} />
              }
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.name}
              </h4>
              <p>{item.desc}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      )}
    </div>
  );
}

export default Timeline;
