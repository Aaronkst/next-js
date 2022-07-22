type Props = {
  content: Array<JSX.Element>;
  length: number;
};

const Carousel = ({ content, length }: Props): JSX.Element => {
  const controls: Array<JSX.Element> = [];
  const contents: Array<JSX.Element> = [];

  for (let i = 0; i < length; i++) {
    controls.push(
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={i.toString()}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
    );
  }

  for (let i = 0; i < length; i++) {
    contents.push(
      <div
        className={
          i == 0
            ? "carousel-item active relative float-left w-full"
            : "carousel-item relative float-left w-full"
        }
      >
        {content[i]}
      </div>
    );
  }

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        {controls}
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        {contents}
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
