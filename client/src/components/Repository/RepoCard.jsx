import React from 'react';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

const RepoCard = ({ repository }) => {
  return (
    <div className="flex-shrink-0 bg-gray-800 rounded-md overflow-hidden mx-4 my-4 transform hover:scale-105 transition duration-300 ease-in-out border-b-4 border-purple-700" style={{ width: '300px', height: '400px' }}>
      <div className="flex justify-center mt-4">
        {/* Your icon/image code goes here */}
      </div>
      <div className="px-8 py-6 shadow-purple">
        <span className="font-bold text-white text-3xl mb-2 uppercase">{repository.title}</span>
        <div className="flex items-center text-yellow-300 mb-3">
          <StarIcon className="h-6 w-6 mr-1" style={{ color: 'yellow' }} />
          <span className="text-blue-50 text-lg mr-2">{repository.starcount}</span>
          <span className="text-white">Stars</span>
        </div>
        <div className="text-white mb-3 uppercase">Number of issues : </div>
        <p className="text-gray-300 text-sm">{repository.description}</p>
      </div>
      <div className="px-8 py-4">
        <Link to={`/repo/${repository.owner}/${repository.repo}`}>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RepoCard;
