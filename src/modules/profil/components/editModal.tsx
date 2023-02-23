export const EditModal = () => {
  return (
    <>
      <input type="checkbox" id="edit-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label
            htmlFor="edit-modal"
            className="cursor-pointer absolute right-5 top-5"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Ubah Profile</h3>
          <form className="w-full my-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Nama</span>
              </label>
              <input
                id="name"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Alamat</span>
              </label>
              <input
                id="alamat"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Tanggal Lahir</span>
              </label>
              <input
                id="ttl"
                type="date"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">No. Telp</span>
              </label>
              <input
                id="telp"
                type="tel"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
          </form>
          <div className="modal-action">
            <label
              htmlFor="edit-modal"
              className="btn w-full mt-5 bg-background text-bold"
            >
              Simpan
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
