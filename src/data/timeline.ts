export type TimelineItem = {
  order: number;
  type: "job" | "school" | "life";
  title: string;
  name: string;
  dateStart: string;
  dateEnd: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    order: 7,
    type: "job",
    title: "Senior Frontend Developer",
    name: "Innovance Consultancy",
    dateStart: "April 2022",
    dateEnd: "",
    description:
      "Delivered React and React Native products across banking and wallet platforms: Akbank ATM interfaces, cross-platform e-wallet applications, sWallet payment and third-party SDK integrations, Kotlin native modules, In-App Purchase flows, reusable component libraries, Jest testing, code reviews, and production-focused stability improvements.",
  },
  {
    order: 6,
    type: "school",
    title: "Master's Degree, Computer Engineering",
    name: "Selcuk University",
    dateStart: "September 2024",
    dateEnd: "",
    description: "Ongoing graduate studies in Computer Engineering.",
  },
  {
    order: 3,
    type: "job",
    title: "Full Stack Developer",
    name: "Onservices",
    dateStart: "June 2020",
    dateEnd: "April 2022",
    description:
      "Developed web and desktop applications, designed databases, and contributed to SAP consulting work.",
  },
  {
    order: 2,
    type: "school",
    title: "Mechatronic Engineering",
    name: "Karabuk University",
    dateStart: "September 2013",
    dateEnd: "June 2018",
    description: "Graduated with a 3.05 GPA.",
  },
  {
    order: 1,
    type: "life",
    title: "Life life = new Life();",
    name: "Turkey",
    dateStart: "May 1995",
    dateEnd: ":)",
    description: "",
  },
];
