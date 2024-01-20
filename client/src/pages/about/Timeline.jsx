import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { useMediaQuery } from "@mui/material";
import TimelineComponent from "./TimelineComponent";

function MuiTimeline({ prog }) {
  const matches = useMediaQuery("(max-width:1024px)");
  const phones = useMediaQuery("(max-width:640px)");

  // Check if prog is defined and is an array
  if (!Array.isArray(prog)) {
    console.error("Invalid prog prop:", prog);
    return null; // or handle the error appropriately
  }

  return (
    <>
      <div className="translate-y-1 bg-[#05225C] rounded-[2px] text-[20px] px-[20px] py-[4px] lg:mx-auto w-fit">
        {new Date().toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })}
      </div>
      <Timeline position={matches ? "right" : "alternate"}>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ padding: "15px", display: `${matches ? "none" : "block"}` }}
          ></TimelineOppositeContent>
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
            <TimelineConnector
              sx={{
                bgcolor: "#1582FF",
                marginX: "15px",
                height: `${phones ? "100px" : "190px"}`,
              }}
            />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              padding: "15px",
              marginBottom: "30px",
              transform: `${
                phones ? "translate(0%,0%)" : "translate(0%,-50%)"
              }`,
            }}
          ></TimelineContent>
        </TimelineItem>
       {
        console.log(typeof prog)
       }
        {
          
        prog.map((progItem, index) => (
  <TimelineComponent data={progItem} index={index} key={index} />
))}

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ paddingX: "15px", display: `${matches ? "none" : "block"}` }}
          ></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                bgcolor: "#D59DFF",
                borderColor: "white",
                "&:hover": { bgcolor: "#0080FF" },
                marginX: "15px",
              }}
            />
          </TimelineSeparator>
          <TimelineContent></TimelineContent>
        </TimelineItem>
      </Timeline>
      <div className="text-center -translate-y-10 bg-[#05225C] rounded-[2px] text-[20px] px-[20px] py-[4px] lg:mx-auto w-fit">
        {new Date("2023-08-01").toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })}
      </div>
    </>
  );
}

export default MuiTimeline;
