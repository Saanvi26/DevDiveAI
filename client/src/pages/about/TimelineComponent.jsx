import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  timelineItemClasses,
} from "@mui/lab";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";


// {
//   "id":4,
//   "title": "FutureGlobe Tech Fest 2024",
//   "startingDate": "2024-12-01",
//   "endingDate": "2024-12-20",
//   "description": "Immerse yourself in the FutureGlobe Tech Fest 2024, a 20-day celebration of futuristic technologies, disruptive innovations, and visionary ideas. Join us for a series of dynamic events, workshops, and showcases shaping the future of technology.",
//   "events": [
//     {
//       "eventName": "Robotics Showcase",
//       "eventDate": "2024-12-05",
//       "eventDescription": "Witness the latest advancements in robotics at our Robotics Showcase. Experience live demonstrations, interact with state-of-the-art robots, and learn about the role of robotics in shaping the future of automation and industry."
//     },
//     {
//       "eventName": "Virtual Reality Experience",
//       "eventDate": "2024-12-12",
//       "eventDescription": "Immerse yourself in the Virtual Reality Experience and explore the potential of VR in various domains. Engage in hands-on demos, discussions, and discover how VR is revolutionizing gaming, education, and beyond."
//     },
//     {
//       "eventName": "Tech Leaders Roundtable",
//       "eventDate": "2024-12-18",
//       "eventDescription": "Participate in the Tech Leaders Roundtable, where industry pioneers and thought leaders will discuss the future of technology. Gain valuable insights into upcoming trends, challenges, and opportunities that will shape the tech landscape."
//     }
//   ],
//   "numberOfEvents": 3,
//   "participationLink": "https://futureglobetechfest2024.com/register"
// },



function TimelineComponent({ data, index }) {
  const matches = useMediaQuery("(max-width:1024px)");
  const phones = useMediaQuery("(max-width:640px)");
  const text = data.description;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedText = isExpanded ? text : text.slice(0, 100);
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ paddingX: "15px", display: `${matches ? "none" : "block"}` }}
      >
        {data.startingDate}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            bgcolor: "#D59DFF",
            marginX: "15px",
            borderColor: "white",
            "&:hover": { bgcolor: "#0080FF" },
          }}
          variant="outlined"
        />
        <TimelineConnector sx={{ bgcolor: "#1582FF", marginX: "15px" }} />
      </TimelineSeparator>
      <TimelineContent
        sx={{
          paddingX: "15px",
          paddingY: "20px",
          transform: `${phones ? "translate(0%,0%)" : "translate(0%,-50%)"}`,
          marginBottom: "30px",
          bgcolor: "#05225C",
        }}
      >
        <h2 className="lg:hidden text-[14px] mb-1 text-description">
          {data.startingDate}
        </h2>
        <h2 className="mb-[12px] text-[20px] font-outfit">{data.title}</h2>
        <div className="flex flex-row justify-center gap-x-3 items-center">

          <p className="text-left  text-[14px] max-sm:hidden font-outfit">
            {data.description}
          </p>
          <img
            src={data.img}
            alt=""
            className={`w-24 ${
              index % 2 !== 0 && !matches ? "" : "hidden"
            } max-sm:hidden`}
          />
          <p className="sm:hidden">
            {truncatedText}{" "}
            <button
              onClick={toggleReadMore}
              className="text-blue-500 cursor-pointer sm:hidden focus:outline-none"
            >
              {isExpanded ? "show less" : "show more"}
            </button>
          </p>
        </div>
      </TimelineContent>
    </TimelineItem>
  );
}

export default TimelineComponent;
