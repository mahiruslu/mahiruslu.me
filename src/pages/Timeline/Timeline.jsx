import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faNetworkWired,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import { db } from "../../utils/firebase";
import { onValue, ref } from "firebase/database";
import Loader from "../../components/Loader/Loader";

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
          console.log("copyArray", copyArray);
        });
        setTimelineElement(copyArray);
      }
      console.log(timelineElement);

      setLoading(false);
    });
  }, []);
  return (
    <>
      {loading && <Loader />}
      <VerticalTimeline>
        {timelineElement.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={`${item.dateStart} - ${item.dateEnd || "present"}`}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FontAwesomeIcon icon={faNetworkWired} />}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
            <p>{item.desc}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
}

export default Timeline;
