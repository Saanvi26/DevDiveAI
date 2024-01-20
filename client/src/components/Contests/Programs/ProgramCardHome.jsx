import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import "/src/components/css/Card.css";
import Marquee from "react-fast-marquee";


import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function ProgramCardHome() {
  const programs = [
    {
      name: "CodeFiesta 2023",
      description:"CodeFiesta 2023: Unleash your coding prowess in 2 days at CodeFiesta 2023.",
       timeleft:"2 days"
    },
    {
        name: "DevFusion Expo 2024",
        "description":"Explore real-time innovation at DevFusion Expo 2024, a month-long tech celebration.",
        timeleft:"2 days"
      },{
        name: "DataTech Summit 2024",
        description:"Dive into the future of data science and AI trends in 2 days at DataTech Summit 2024",
        timeleft:"2 days"
      },{
        name: "FutureGlobe Tech Fest 2024",
        description:" Immerse yourself in visionary tech at FutureGlobe Tech Fest 2024",
        timeleft:"2 days"
      },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="mt-12 md:hidden">
        <Marquee speed={100}>
          {programs.map((item) => (
            <div key={item.name} className="flex justify-center">
              <span className="bg-cardsColor p-4 mx-4 rounded-xl">
                <div className="text-white">{item.name}</div>
              </span>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="w-screen max-md:hidden">
        <Marquee speed={200} className="flex flex-row" pauseOnHover={true}>
          {programs.map((item) => (
            <div key={item.name} className="contestcard font-['Geist'] border border-contestborder py-10 px-4 w-4/5">
              <div className="flex justify-center">
                <span className="bg-contestlogo p-4 rounded-full">
                <div className="text-white">Time Left : {item.timeleft}</div>
                </span>
              </div>
              <div className="text-center mt-4 mb-5">
                <h1 className="text-xl text-[#ffffff] mb-2 mt-0">
                  {item.name}
                </h1>
                <p className=" text-[#B7B6FF]">{item.description}</p>
              </div>
              <CardActions className="justify-center">
                <Link to="/programs">
                  <button className="contestbtn px-4 py-2">check out</button>
                </Link>
              </CardActions>
            </div>
          ))}
        </Marquee>
      </div>
    </ThemeProvider>
  );
}
