interface Navigation {
  currentPage: number;
  length: number;
  setCurrentPage: (e: any) => void;
}

export const Navigation = (props: Navigation) => {
  const { currentPage, setCurrentPage, length } = props;

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="flex justify-between">
        <button
          disabled={currentPage === 0 ? true : false}
          onClick={handlePrev}
          className={`btn p-3 w-32 flex justify-center bg-background text-bold font-bold rounded-xl ${
            currentPage === 0 ? "text-gray-600 bg-gray-300" : ""
          }`}
        >
          Previous
        </button>
        <button
          disabled={currentPage === length - 1 ? true : false}
          onClick={handleNext}
          className={`btn p-3 w-32 flex justify-center bg-background text-bold font-bold rounded-xl ${
            currentPage === length - 1 ? "text-gray-600 bg-gray-300" : ""
          }`}
        >
          Next
        </button>
      </div>
    </>
  );
};
