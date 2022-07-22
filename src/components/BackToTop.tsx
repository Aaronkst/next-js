import { ArrowUpIcon } from "@heroicons/react/outline";

type Props = {
  showButton: boolean;
};

const BackToTop = ({ showButton }: Props): JSX.Element => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          type="button"
          className="inline-block p-3 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-5 fixed z-50"
        >
          <ArrowUpIcon className="w-4 h-4" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
