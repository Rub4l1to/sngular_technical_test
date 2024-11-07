import { FC } from 'react';

//* Icons
import { TfiPieChart } from 'react-icons/tfi';

//* Store
import useStore from '@/store';

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
}) => {
  const openModal = useStore((state) => state.openModal);

  const handleClick = () => {
    if (title.includes('KPI')) {
      openModal('KPI');
    } else if (title.includes('Layout')) {
      openModal('Layout');
    } else if (title.includes('Storyboard')) {
      openModal('Storyboard');
    } else {
      openModal('Featured');
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`rounded-lg p-4 cursor-pointer ${typeCard === 'default' ? 'bg-white border border-gray-200' : ''}`}
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
};

export default Card;
