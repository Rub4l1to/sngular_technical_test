import type { FC } from 'react';
import { TfiPieChart } from 'react-icons/tfi';

interface CardProps {
  title: string;
  description: string;
  date?: string;
  typeCard?: 'default' | 'primary';
}

const Card: FC<CardProps> = ({
  title,
  description,
  date,
  typeCard = 'default',
}) => (
  <div
    className={`rounded-lg p-4  ${typeCard === 'default' ? 'bg-white border border-gray-200' : ''}`}
  >
    <div className="flex items-center space-x-4">
      <div className="bg-gray-100 rounded-lg flex items-center justify-center w-28 h-20">
        <TfiPieChart size={44} className="text-gray-500" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        {date && <p className="text-xs text-gray-400 mt-1">{date}</p>}
      </div>
    </div>
  </div>
);

export default Card;
