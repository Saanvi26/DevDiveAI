import React from 'react'
import ProgramCard from './ProgramCard.jsx'
import { useParams,Link } from 'react-router-dom';
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
        "title": "HealthTech Innovation Summit 2025",
        "startingDate": "2025-01-15",
        "endingDate": "2025-02-15",
        "description": "Embark on a journey of healthcare transformation at the HealthTech Innovation Summit 2025. This month-long summit focuses on leveraging technology to revolutionize healthcare delivery, improve patient outcomes, and foster collaboration within the healthtech ecosystem.",
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
const AllPrograms = () => {
  return (
    <div>
      <h1 className="text-white text-center uppercase my-8 text-4xl font-bold transition duration-300 ease-in-out">
        All Programs Running Currently
      </h1>

      <div className="flex flex-wrap justify-center">
        {programs.map((program) => (
          <Link key={program.id} to={`/program/${program.id}`}>
            <ProgramCard program={program} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllPrograms


//number of issues ,star
