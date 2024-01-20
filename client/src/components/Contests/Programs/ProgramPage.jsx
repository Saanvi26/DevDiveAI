

import React from "react";
import { useParams, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import StarIcon from '@mui/icons-material/Star';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import MuiTimeline from "../../../pages/about/Timeline";


//import StarIcon from "@mui/icons-material/Star";

const programs = [
  {   
    "id":1,
      "title": "CodeFiesta 2023",
      "startingDate": "2023-04-01",
      "endingDate": "2023-04-30",
      "description": "CodeFiesta 2023 is a month-long coding extravaganza that invites developers from all backgrounds to participate in various coding challenges and events. The fest aims to foster collaboration, learning, and innovation within the coding community.",
      "events": [
        {
          "eventName": "Algorithm Challenge",
          "eventDate": "2023-04-05",
          "eventDescription": "Test your algorithmic skills with a set of challenging problems. Top performers will be recognized and awarded exciting prizes."
        },
        {
          "eventName": "Web Development Hackathon",
          "eventDate": "2023-04-15",
          "eventDescription": "Put your web development skills to the test by participating in our hackathon. Build innovative projects and showcase your creativity."
        },
        {
          "eventName": "Open Source Contribution Day",
          "eventDate": "2023-04-20",
          "eventDescription": "Contribute to open-source projects and make a meaningful impact on the community. Beginners are welcome, and mentors will be available to guide you."
        }
      ],
      "numberOfEvents": 3,
      "participationLink": "https://codefiesta2023.com/participate"
    },
    {
      "id":2,
      "title": "DevFusion Expo 2024",
      "startingDate": "2024-09-15",
      "endingDate": "2024-10-15",
      "description": "DevFusion Expo 2024 is a month-long celebration of technology, innovation, and collaboration. Join developers from around the globe in a series of engaging events, workshops, and challenges designed to enhance your skills and connect with like-minded individuals.",
      "events": [
        {
          "eventName": "Tech Talk Series",
          "eventDate": "2024-09-20",
          "eventDescription": "Explore the latest trends and advancements in technology through our Tech Talk Series. Renowned speakers and experts will share insights on topics ranging from AI and blockchain to cybersecurity and IoT."
        },
        {
          "eventName": "CodeCraft Championship",
          "eventDate": "2024-10-05",
          "eventDescription": "Compete in the CodeCraft Championship, a coding competition that tests your problem-solving abilities. Solve challenging problems and showcase your coding prowess to win exciting prizes."
        },
        {
          "eventName": "Innovation Workshop",
          "eventDate": "2024-10-10",
          "eventDescription": "Participate in our hands-on Innovation Workshop where you'll collaborate with fellow developers to ideate and build innovative solutions. Mentors will be available to guide you throughout the creative process."
        }
      ],
      "numberOfEvents": 3,
      "participationLink": "https://devfusionexpo2024.com/register"
    },
    {
      "id":3,
      "title": "DataTech Summit 2024",
      "startingDate": "2024-11-01",
      "endingDate": "2024-11-30",
      "description": "Join the DataTech Summit 2024, a month-long extravaganza celebrating the latest trends in data science, analytics, and artificial intelligence. Engage in insightful sessions, hands-on workshops, and networking opportunities with industry experts.",
      "events": [
        {
          "eventName": "Analytics Masterclass",
          "eventDate": "2024-11-10",
          "eventDescription": "Participate in our Analytics Masterclass and gain in-depth knowledge on cutting-edge analytics techniques. Learn from industry leaders and discover practical applications to enhance your data analysis skills."
        },
        {
          "eventName": "HackData Challenge",
          "eventDate": "2024-11-20",
          "eventDescription": "Test your data hacking skills in the HackData Challenge. Solve real-world data problems, showcase your analytical prowess, and compete for the title of the ultimate data hacker. Exciting prizes await the winners!"
        },
        {
          "eventName": "AI in Action Symposium",
          "eventDate": "2024-11-25",
          "eventDescription": "Explore the practical applications of AI in various industries at the AI in Action Symposium. Industry experts will share case studies and success stories, providing insights into the transformative power of artificial intelligence."
        }
      ],
      "numberOfEvents": 3,
      "participationLink": "https://datatechsummit2024.com/register"
    },
    {
      "id":4,
      "title": "FutureGlobe Tech Fest 2024",
      "startingDate": "2024-12-01",
      "endingDate": "2024-12-20",
      "description": "Immerse yourself in the FutureGlobe Tech Fest 2024, a 20-day celebration of futuristic technologies, disruptive innovations, and visionary ideas. Join us for a series of dynamic events, workshops, and showcases shaping the future of technology.",
      "events": [
        {
          "eventName": "Robotics Showcase",
          "eventDate": "2024-12-05",
          "eventDescription": "Witness the latest advancements in robotics at our Robotics Showcase. Experience live demonstrations, interact with state-of-the-art robots, and learn about the role of robotics in shaping the future of automation and industry."
        },
        {
          "eventName": "Virtual Reality Experience",
          "eventDate": "2024-12-12",
          "eventDescription": "Immerse yourself in the Virtual Reality Experience and explore the potential of VR in various domains. Engage in hands-on demos, discussions, and discover how VR is revolutionizing gaming, education, and beyond."
        },
        {
          "eventName": "Tech Leaders Roundtable",
          "eventDate": "2024-12-18",
          "eventDescription": "Participate in the Tech Leaders Roundtable, where industry pioneers and thought leaders will discuss the future of technology. Gain valuable insights into upcoming trends, challenges, and opportunities that will shape the tech landscape."
        }
      ],
      "numberOfEvents": 3,
      "participationLink": "https://futureglobetechfest2024.com/register"
    },
    {
      "id":5,
      "title": "HealthTech Innovation Summit",
      "startingDate": "2025-01-15",
      "endingDate": "2025-02-15",
      "description": "Embark on a healthcare transformation journey at the HealthTech Innovation Summit 2025. This month-long event leverages technology to revolutionize healthcare, enhance patient outcomes, and foster healthtech collaboration.",
      "events": [
        {
          "eventName": "Digital Health Symposium",
          "eventDate": "2025-01-25",
          "eventDescription": "Participate in the Digital Health Symposium, where experts discuss the integration of digital technologies in healthcare. Explore topics such as telemedicine, health informatics, and wearable devices shaping the future of healthcare."
        },
        {
          "eventName": "MedTech Startup Pitch",
          "eventDate": "2025-02-05",
          "eventDescription": "Witness the future of healthcare innovation at the MedTech Startup Pitch. Emerging startups will present groundbreaking solutions in medical technology, competing for recognition and potential partnerships with industry leaders."
        },
        {
          "eventName": "HealthTech Hackathon",
          "eventDate": "2025-02-10",
          "eventDescription": "Join the HealthTech Hackathon and collaborate with fellow innovators to develop solutions addressing pressing healthcare challenges. Showcase your coding and problem-solving skills to make a positive impact on the healthcare landscape."
        }
      ],
      "numberOfEvents": 3,
      "participationLink": "https://healthtechinnovation2025.com/register"
    },
    {
      "id":6,
      "title": "GreenTech Summit 2025",
      "startingDate": "2025-03-01",
      "endingDate": "2025-03-30",
      "description": "Join the GreenTech Summit 2025, a month-long exploration of sustainable and eco-friendly technologies. Engage in discussions, workshops, and showcases that highlight the role of technology in addressing environmental challenges and promoting a greener future.",
      "events": [
        {
          "eventName": "Renewable Energy Expo",
          "eventDate": "2025-03-10",
          "eventDescription": "Explore the latest innovations in renewable energy at the Renewable Energy Expo. Discover advancements in solar, wind, and other sustainable energy sources that contribute to a cleaner and more sustainable future."
        },
        {
          "eventName": "Smart Cities Symposium",
          "eventDate": "2025-03-20",
          "eventDescription": "Participate in the Smart Cities Symposium and learn how technology is shaping the development of smart, sustainable cities. Discover smart infrastructure, IoT solutions, and urban planning strategies for a greener and more efficient urban environment."
        },
        {
          "eventName": "EcoTech Challenge",
          "eventDate": "2025-03-25",
          "eventDescription": "Take part in the EcoTech Challenge, a competition where innovators showcase eco-friendly technologies. Compete with cutting-edge solutions that contribute to environmental conservation and sustainable living."
        }
      ],
      "numberOfEvents": 3,
      "participationLink": "https://greentechsummit2025.com/register"
    },
]


const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7E57C2", // Change this to your theme's purple-500
    },
  },
});


const ProgramPage = () => {
  const { id } = useParams();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const selectedProg = programs.find(
    (program) => program.id === parseInt(id, 10)
  );

  return (
    <ThemeProvider theme={theme}>
       <Box className="max-w-4xl mx-auto p-8 rounded shadow text-left text-purple-500 px-20 py-20">
        <Typography variant="h3" component="h1" className="mb-4 ">
          {selectedProg.title} <StarIcon fontSize="inherit" />
        </Typography>
        <Typography variant="body1" className="text-gray-300 mb-4">
          {selectedProg.description}
        </Typography>
        <div className="text-white mb-3 uppercase">
          Starting Date: {selectedProg.startingDate}
        </div>
        <div className="text-white mb-3 uppercase">
          Ending Date: {selectedProg.endingDate}
        </div>

        {/* Render other details such as events, etc. if needed */}
        <Typography variant="h5" className="mb-2">
          Events:
        </Typography>

        {selectedProg.events.map((event, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
            sx={{
              backgroundColor: "#333", // Change background color
              margin: "10px 0", // Add margins
              transition: "background-color 0.3s", // Add transition
              "&:hover": {
                backgroundColor: "#444", // Change background color on hover
              },
            }}
          >
            <AccordionSummary
              aria-controls={`panel${index + 1}d-content`}
              id={`panel${index + 1}d-header`}
            >
              <Typography>{event.eventName}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{event.eventDescription}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        {/* "About Us" Heading and Forks (if available) */}
        

        {/* Add a Link for navigation */}
        <Link to={`/programs`} className="text-purple-500 hover:underline mt-4">
          Back to Program List
        </Link>
      </Box> 
      

            <MuiTimeline prog={selectedProg}/>
      
      
    </ThemeProvider>
  );
};

export default ProgramPage;






//left algin- about us heading,forks











