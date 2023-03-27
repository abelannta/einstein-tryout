import { putProfil } from "@/lib/profil";
import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import { toast } from "react-hot-toast";

export const EditModal = () => {
  const cookies = parseCookies();
  const [user, setUser] = useState<any>({});
  const [formData, setFormData] = useState({
    user_id: user.user_id,
    user_name: "",
    user_email: user.user_email,
    phone: "",
    address: "",
    pp_link: "",
    gender: "",
  });

  useEffect(() => {
    if (cookies.userData) {
      const userData = JSON.parse(cookies?.userData);
      setUser(userData);
    }
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const res = putProfil(formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        throw err;
      });
    toast.promise(res, {
      loading: "Loading...",
      success: "Data Berhasil Diubah!",
      error: "Data Tidak Berhasil Diubah!",
    });
  };

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
          <form onSubmit={(e) => handleSubmit(e)} className="w-full my-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Nama</span>
              </label>
              <input
                id="name"
                type="text"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    user_name: e.target.value,
                  }))
                }
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Jenis Kelamin</span>
              </label>
              <select
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    gender: e.target.value,
                  }))
                }
                defaultValue=""
                className="select select-bordered w-full"
              >
                <option disabled value="">
                  Pilih Jenis Kelamin
                </option>
                <option value="laki-laki">Laki-laki</option>
                <option value="perempuan">Perempuan</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Alamat</span>
              </label>
              <input
                id="alamat"
                type="text"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }))
                }
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
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="modal-action">
              <button
                type="submit"
                className="btn w-full mt-5 bg-background text-bold"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
