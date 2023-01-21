export const Pertanyaan = () => {
  return (
    <div>
      <div className="bg-bold p-10 rounded-xl mb-10">
        <p className="text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of.
        </p>
      </div>
      <form>
        <div className="border border-gray-300 p-5 mb-3 rounded-xl">
          <input
            type="radio"
            id="jawaban1"
            name="jawaban"
            className="mr-3"
            value="A"
          />
          <label htmlFor="jawaban1">Sabtu</label>
        </div>
        <div className="border border-gray-300 p-5 mb-3 rounded-xl">
          <input
            type="radio"
            id="jawaban1"
            name="jawaban"
            className="mr-3"
            value="B"
          />
          <label htmlFor="jawaban1">Sabtu</label>
        </div>
        <div className="border border-gray-300 p-5 mb-3 rounded-xl">
          <input
            type="radio"
            id="jawaban1"
            name="jawaban"
            className="mr-3"
            value="C"
          />
          <label htmlFor="jawaban1">Sabtu</label>
        </div>
        <div className="border border-gray-300 p-5 mb-3 rounded-xl">
          <input
            type="radio"
            id="jawaban1"
            name="jawaban"
            className="mr-3"
            value="D"
          />
          <label htmlFor="jawaban1">Sabtu</label>
        </div>
      </form>
    </div>
  );
};
