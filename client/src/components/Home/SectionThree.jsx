import { Link } from "react-router-dom";
import ProgramCardHome from "../Contests/Programs/ProgramCardHome.jsx";

const programs = [
    {
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
      }
      

]

export default function SectionThree() {
  return (
    <div className="font-['Geist'] md:mt-4 pb-12">
      <div className="hero flex flex-col">
        <div className="">
          <div className="md:my-24 mx-auto w-4/5">
            <h1 className="text-white max-md:text-4xl md:text-7xl text-center">
              <span className="block mt-1 md:mt-6">
                <span className="text-purple-500 px-2">Discover</span> 
                Explore ongoing programs at this moment.
              </span>{" "}
            </h1>
            <p className="max-md:text-sm text-center mt-8 text-description max-w-2xl mx-auto">
            Explore a multitude of impactful programs currently in progress, ranging from large-scale events to noteworthy initiatives, happening right now. Stay informed and engaged with the latest and most significant activities across various domains.
            </p>
            <div className="flex justify-center m-8">
              <a href='/programs' className="btn px-5 py-2 bg-purple-500 border-button-primary-helper hover:bg-purple-500 text-lg text-white font-medium duration-75 rounded-2xl border">
                Explore Programs
              </a>
            </div>
          </div>
          <div className="w-screen">
            <ProgramCardHome />
          </div>
        </div>
      </div>
    </div>
  );
}
