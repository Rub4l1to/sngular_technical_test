import { FC } from 'react';

//* Icons
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { BsGrid3X3 } from 'react-icons/bs';

//* Types
import { Item } from '@/store/slices/librarySlice';

//* Store
import useStore from '@/store';

interface LayoutModalProps {
  item: Item;
}

const LayoutModal: FC<LayoutModalProps> = ({ item }) => {
  const { toggleFavorite, favoriteItems } = useStore();

  const isFavorite = favoriteItems.some((fav) => fav.title === item.title);

  const handleFavoriteToggle = () => {
    toggleFavorite(item);
  };

  const Stat = ({
    label,
    value,
  }: {
    label: string;
    value: string | number;
  }) => (
    <div className="flex-1 border-r last:border-none">
      <p className="font-semibold text-gray-800">{value}</p>
      <p>{label}</p>
    </div>
  );

  return (
    <div className="mx-auto w-full max-w-xl bg-white rounded-lg relative pt-8 pb-2">
      <div className="text-center">
        <div className="bg-gray-100 p-4 inline-flex items-center justify-center mb-4 rounded-lg">
          <BsGrid3X3 size={32} />
        </div>
        <h2 className="text-3xl font-medium text-gray-800">
          {item.title}

          <span
            className="text-xs text-gray-500 ml-2 bg-gray-100 p-2 radius-2 rounded-md
          
          "
          >
            {item.type}
          </span>
        </h2>
        <span className="text-base text-gray-500">{item.subtitle}</span>
      </div>

      <p className="mt-4 text-center text-gray-600">{item.description}</p>

      <div className="flex justify-center mt-4 space-x-2">
        {item.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md border"
          >
            {`#${tag}`}
          </span>
        ))}
      </div>

      <div className="flex justify-between border-gray-200 py-4 text-center text-sm text-gray-600 mt-6">
        <Stat label="Used" value={item.stats.used} />
        <Stat label="Type" value={item.stats.type} />
        <Stat label="Pages No." value={item.stats.pages} />
        <Stat
          label="Last Updated"
          value={new Date(item.stats.lastUpdated).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          })}
        />
      </div>

      <div className="w-[100%] h-56 bg-gray-200 mt-6"></div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-800">
          Business Questions
        </h3>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {item.businessQuestions.map((question, index) => (
            <div key={index} className="p-4 rounded-lg hover:bg-gray-100">
              <h4 className="text-sm font-medium text-gray-800">{`Question ${index + 1}`}</h4>
              <p className="text-xs text-gray-600">{question}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleFavoriteToggle}
        className="w-full mt-6 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-700 flex items-center justify-center"
      >
        {isFavorite ? (
          <>
            <FaBookmark className="mr-2" /> Favorited
          </>
        ) : (
          <>
            <FaRegBookmark className="mr-2" /> Favorite item
          </>
        )}
      </button>
    </div>
  );
};

export default LayoutModal;
