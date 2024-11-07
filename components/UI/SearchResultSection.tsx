import { FC } from 'react';

//* Components
import { CardList } from '@/components';

interface SearchResultSectionProps {
  title: string;
  description: string;
  items: Array<{ title: string; description: string; date: string }>;
  typeCard?: 'default' | 'primary';
  searchQuery: string;
}

const SearchResultSection: FC<SearchResultSectionProps> = ({
  title,
  description,
  items,
  typeCard = 'default',
  searchQuery,
}) => {
  return (
    <div className="bg-gray-50 flex flex-col gap-2">
      {items.length > 0 ? (
        <CardList
          title={title}
          description={description}
          items={items}
          typeCard={typeCard}
        />
      ) : (
        <p className="text-center text-gray-500 mt-8">
          Values not found named as{' '}
          <span className="font-semibold">{searchQuery}</span> in {title}
        </p>
      )}
    </div>
  );
};

export default SearchResultSection;
