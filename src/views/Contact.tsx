const Contact = (): JSX.Element => {
  return (
    <div className="py-16 w-full -mt-5 bg-gray-500 sticky top-auto right-0 left-0 bottom-0 z-[-1]">
      <div className="w-3/4 mx-auto">
        <p className="text-center text-white"></p>
        <hr />
        <div className="flex flex-col md:flex-row text-white">
          <p className="flex-1">Yangon, Myanmar</p>
          <p className="md:text-end flex-1">&#169; Aaron Chen</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
