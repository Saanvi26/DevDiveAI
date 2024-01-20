import React from 'react';
import { Link } from 'react-router-dom';

const ProgramCard = ({ program }) => {
  return (
    <div className="max-w-md bg-gray-800 rounded-md overflow-hidden mx-4 my-4 transform hover:scale-105 transition duration-300 ease-in-out border-b-4 border-purple-700">
      <div className="flex justify-center mt-4">
        {/* You can add an icon or image here if needed */}
      </div>
      <div className="px-8 py-6 shadow-purple">
        <span className="font-bold text-white text-3xl mb-2 uppercase">{program.title}</span>
        <div className="text-white mb-3 uppercase">
          {/* Additional details if needed */}
        </div>
        <p className="text-gray-300 text-base">{program.description}</p>
        <div className="text-white mb-3 uppercase">Starting Date: {program.startingDate}</div>
        <div className="text-white mb-3 uppercase">Ending Date: {program.endingDate}</div>
      </div>
      <div className="px-8 py-4">
        <Link to={`/program/${program.id}`}>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none">
            View Details
          </button>
        </Link>
        <a
          href={program.participationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 text-purple-500 hover:underline"
        >
          Participate
        </a>
      </div>
    </div>
  );
};

export default ProgramCard;
