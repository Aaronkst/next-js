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
          className="inline-block p-3 md:p-5 bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out bottom-8 right-8 fixed z-50 drop-shadow-lg fly-in-bottom"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
