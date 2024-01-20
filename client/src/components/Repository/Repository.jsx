import React from 'react'
import RepoCard from './RepoCard'



import {Link} from 'react-router-dom'
import Button from './Button.jsx';
const repositories = [
  {
      title: "Repository 3",
      owner: "abhisheks008",
      repo: "DL-Simplified",
      description: "Deep Learning Simplified is an Open-source repository, containing beginner to advance level deep learning projects for the contributors, who are willing to start their journey in Deep Learning. Devfolio URL",
      starcount: 206,


  },
  {
      title: "Repository 4",
      owner: "cimplec",
      repo: "sim-c",
      description: "A dynamically typed high-level front end for C",
      starcount: 140,


  },
  {
      title: "Repository 5",
      owner: "Mayuresh-22",
      repo: "Minglr",
      description: "Social Network Site developed using HTML, CSS, JS and PHP as a Backend Language. This site supports the functionality of login/registration and sharing the posts/photos through their accounts, also it has the functionality of private messaging with the users",
      starcount: 140,


  },
  {
      title: "Repository 6",
      owner: "prathimacode-hub",
      repo: "Dev-Mint",
      description: "Dev Mint has an exclusive collection of layouts, animations, effects, code snippets, extensions, projects, resources etc. to fulfill and satiate your developer needs.✔",
      starcount: 13,


  },
  {
      title: "Repository 7",
      owner: "avantikachauhann",
      repo: "Algprithm-Alchemy",
      description: "A curated collection of programs implemented in C++, Java, Python.",
      starcount: 8,


  },
  {
      title: "Repository 8",
      owner: "Deep-ghosty",
      repo: "Infrared-Enabled-Driver-fatigue-detection",
      description: "A driver snoozing system is a safety feature that detects and alerts a driver who is exhibiting signs of fatigue, with the goal of reducing the risk of accidents and injuries caused by drowsy driving.",
      starcount: 29,


  },
  {
      title: "Repository 9",
      owner: "web-contribution-DWOC",
      repo: "Team-Builder",
      description: "Team Builder: an online team building platform for hackathons like events with chat interface.",
      starcount: 1,


  },
  {
      title: "Repository 10",
      owner: "vaishnavirshah ",
      repo: "Community-Website",
      description: "Official Website of HITK Tech Community.",
      starcount: 3,


  },
  {
      title: "Repository 11",
      owner: "meshery",
      repo: "meshery",
      description: "Meshery, the cloud native manager.",
      starcount: "4.6k",


  },
  {
      title: "Repository 12",
      owner: "cncf",
      repo: " mentoring",
      description: "CNCF Mentoring: LFX Mentorship + Summer of Code.",
      starcount: "2.1k",


  },
  {
      title: "Repository 13",
      owner: "metacall",
      repo: "core",
      description: "MetaCall: The ultimate polyglot programming experience..",
      starcount: "1.4k",


  },
  {
      title: "Repository 14",
      owner: "commons-app",
      repo: "apps-android-commons",
      description: "The Wikimedia Commons Android app allows users to upload pictures from their Android phone/tablet to Wikimedia Commons.",
      starcount: 916,


  },
  {
      title: "Repository 15",
      owner: "openfoodfacts",
      repo: "openfoodfacts-androidapp",
      description: "Native version of Open Food Facts on Android - Coders & Decoders welcome.",
      starcount: 737,


  },
  {
      title: "Repository 16",
      owner: "sketkc",
      repo: "fos-proposals",
      description: "Archive of GSoC Proposals.",
      starcount: 430,


  },
  {
      title: "Repository 17",
      owner: "Google-Summer-of-Code-Archive",
      repo: "gsoc-proposals-archive",
      description: "This repository contains Accepted proposals for various Google Summer of Code organizations throughout various years!.",
      starcount: 916,


  },
  {
      title: "Repository 18",
      owner: "Surajv311",
      repo: "one4All",
      description: "This repository consists of tech resources and opportunities which could be useful for students interested in computer science. It also hosts non-tech sources which could be useful for anyone..",
      starcount: 184,


  },
  {
      title: "Repository 19",
      owner: "prondubuisi",
      repo: "accepted-gsoc-proposals",
      description: "A repository containing links to accepted proposals for GSoC, Hopefully this helps someone write a better proposal and get accepted into the program.",
      starcount: 177,


  },
  {
      title: "Repository 20",
      owner: "numfocus",
      repo: "gsoc",
      description: "NumFOCUS Google Summer of Code Materials.",
      starcount: 420,


  },
];

const handleRefreshClick = () => {
  // Reload the page
  window.location.reload();
};
const getRandomRepositories = (repos, count) => {
  const shuffled = repos.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Repository = () => {
  // Get five random repositories
  const randomRepositories = getRandomRepositories(repositories, 5);

  return (
    <div className="p-16">
  <h1 className="text-white text-center uppercase my-8 text-4xl font-bold transition duration-300 ease-in-out">
    All Recommended Repositories based on your profile
  </h1>

  <div className="grid grid-cols-2 md:grid-cols-3 justify-center">
    {randomRepositories.map((item, index) => (
      <RepoCard key={index} repository={item} />
    ))}
  </div>

  <div className="flex items-center justify-center space-x-4 m-20">
    <h4 className="text-xl text-white">Feedback on Suggestions Discovery</h4>
    <button onClick={handleRefreshClick} className="transition duration-300 ease-in-out transform hover:scale-105 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
      EASY
    </button>
    <button onClick={handleRefreshClick} className="transition duration-300 ease-in-out transform hover:scale-105 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-yellow active:bg-yellow-800">
      MEDIUM
    </button>
    <button onClick={handleRefreshClick} className="transition duration-300 ease-in-out transform hover:scale-105 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-red active:bg-red-800">
      HARD
    </button>
  </div>
</div>
  )
    };  



export default Repository


//number of issues ,star
