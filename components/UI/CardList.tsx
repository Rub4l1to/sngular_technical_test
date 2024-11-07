import type { FC } from 'react';

//* Components
import { Card } from '@/components';

//* Types
import { Item } from '@/store/slices/librarySlice';

//* Store
import useStore from '@/store';

interface CardListProps {
  title: string;
  description: string;
  items: Item[];
  typeCard?: 'default' | 'primary';
}

const CardList: FC<CardListProps> = ({
  title,
  description,
  items,
  typeCard = 'default',
}) => {
  const { activeTab } = useStore((state) => state);

  return (
    <div>
      <h2 className="text-3xl font-medium text-gray-800">{title}</h2>
      <p className="text-sm text-gray-500">{description}</p>
      <div className="grid grid-cols-2 gap-4 p-6">
        {items.map((item, index) => (
          <Card
            key={index}
            item={item}
            typeCard={typeCard}
            typeModal={activeTab}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
