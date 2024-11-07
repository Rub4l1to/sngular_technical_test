import type { FC } from 'react';

//* Components
import { Card } from '@/components';

interface CardListProps {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
    date: string;
  }[];
  typeCard?: 'default' | 'primary';
}

const CardList: FC<CardListProps> = ({
  title,
  description,
  items,
  typeCard = 'default',
}) => {
  return (
    <div>
      <h2 className="text-3xl font-medium  text-gray-800">{title}</h2>
      <p className="text-sm text-gray-500">{description}</p>
      <div className="grid grid-cols-2 gap-4 p-6">
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            date={item.date}
            typeCard={typeCard}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
