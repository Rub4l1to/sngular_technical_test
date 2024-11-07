import type { FC } from 'react';

//* Icons
import { TfiPieChart } from 'react-icons/tfi';

//* Types
import { Item } from '@/store/slices/librarySlice';
import { ModalType } from '@/lib/modalRegistry';

//* Store
import useStore from '@/store';

interface CardProps {
  item: Item;
  typeCard?: 'default' | 'primary';
  typeModal: ModalType;
}

const Card: FC<CardProps> = ({
  item,
  typeCard = 'default',
  typeModal = 'Featured',
}) => {
  const openModal = useStore((state) => state.openModal);

  const handleClick = () => {
    openModal(typeModal, item);
  };

  const formattedDate = new Date(item.stats.lastUpdated).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

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
          <h3 className="font-semibold text-gray-800 text-sm">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
          <p className="text-xs text-gray-400 mt-1">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
