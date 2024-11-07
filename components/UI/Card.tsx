import React from 'react';

interface CardProps {
  title: string;
  description: string;
  date?: string;
}

const Card: React.FC<CardProps> = ({ title, description, date }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-4 w-full md:w-1/2 lg:w-1/4">
    <div className="flex items-center space-x-3">
      <div className="bg-gray-200 p-4 rounded-full">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm7-4h-4V2a1 1 0 10-2 0v1H9V2a1 1 0 10-2 0v1H3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1zm-1 16H4V9h14v10z" />
        </svg>
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        {date && <p className="text-xs text-gray-400 mt-1">{date}</p>}
      </div>
    </div>
  </div>
);

export default Card;
