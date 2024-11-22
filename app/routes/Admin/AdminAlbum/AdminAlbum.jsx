import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { AlbumContext } from "@/app/context/AlbumContext";
import AdminAlbumCard from "@/app/Componants/Cards/AdminAlbumCard";
import Loader from "@/app/Componants/Loader/Loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { apiURL } from "@/app/constants";

const AdminAlbum = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { album, fetchAlbum, isLoading, setIsLoading } =
    useContext(AlbumContext);

  const openForm = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const [formData, setFormData] = useState({
    type: "",
    price: "",
    image: null,
  });

  const handleData = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files) {
      setFormData({
        ...formData,
        image: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const sendToast = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("type", formData.type);
    data.append("price", formData.price);
    data.append("image", formData.image);

    try {
      const res = await fetch(`${apiURL}/api/addDrawing`, {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to upload data.");
      }

      const responseData = await res.json();
      toast.success(responseData.message || "Data Posted");
      fetchAlbum();
      close();
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const deleteCard = async (id) => {
    setIsLoading(true);
    try {
      const result = await fetch(`${apiURL}/api/deleteDrawing/${id}`, {
        method: "DELETE",
      });
      if (!result.ok) throw new Error("Failed to delete card.");
      toast.warn("Card Deleted");
      await fetchAlbum();
      setIsLoading(false);
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbum();
    console.log(album);
  }, []);

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="album-container">
        <div className="head">
          <h2>AdminAlbum {">>"}</h2>
          <button className="add" onClick={openForm}>
            + Add
          </button>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="album-section">
            <div className="container">
              <section className="trending">
                <div className="type">
                  <h1>Trending Products</h1>
                  <button className="see-all">See All</button>
                </div>
                <div className="cards">
                  {album.map((albumItem, index) => (
                    <AdminAlbumCard
                      key={index}
                      onDelete={() => deleteCard(albumItem._id)}
                      price={albumItem.price}
                      type={albumItem.type}
                      imgSrc={albumItem.image?.url || ""}
                    />
                  ))}
                </div>
              </section>
            </div>
          </div>
        )}
      </div>
      {isOpen && (
        <div className="w-full h-[100dvh] fixed top-0 left-0 z-10 bg-black bg-opacity-70 flex flex-col items-center justify-center gap-4">
          <form
            onSubmit={sendToast}
            className="w-[max-content] h-[max-content] bg-zinc-950 flex flex-col items-start justify-center rounded-[8px] gap-4 shadow-xl p-6"
          >
            <div className="w-[max-content] h-[max-content] flex flex-col items-start justify-around gap-2">
              <label
                htmlFor="type"
                className="font-[500] text-[.9rem] text-white"
              >
                Type
              </label>
              <input
                type="text"
                name="type"
                id="type"
                value={formData.type}
                onChange={handleData}
                className="w-[320px] h-[5dvh] outline-none focus:outline-1 focus:outline-zinc-500 rounded px-2 py-1 text-[.9rem] font-[500] text-white border bg-zinc-800 border-zinc-800"
                placeholder="Type"
                required
              />
            </div>
            <div className="w-[max-content] h-[max-content] flex flex-col items-start justify-around gap-2">
              <label
                htmlFor="price"
                className="font-[500] text-[.9rem] text-white"
              >
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                value={formData.price}
                onChange={handleData}
                className="w-[320px] h-[5dvh] outline-none focus:outline-1 focus:outline-zinc-500 rounded px-2 py-1 text-[.9rem] font-[500] text-white border bg-zinc-800 border-zinc-800"
                placeholder="Price"
                required
              />
            </div>
            <div className="w-[max-content] h-[max-content] flex flex-col items-start justify-around gap-2">
              <label
                htmlFor="image"
                className="font-[500] text-[.9rem] text-white"
              >
                Image
              </label>
              <div className="relative w-[320px]">
                <label
                  htmlFor="image"
                  className="flex-col w-full h-[6dvh] rounded px-4 py-2 text-[.9rem] font-[500] bg-zinc-200 border border-zinc-800 text-zinc-600 cursor-pointer flex items-start justify-center"
                >
                  {formData.image ? formData.image.name : "Browse"}
                </label>
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  id="image"
                  onChange={handleData}
                  className="absolute inset-0 opacity-0 cursor-pointer text-center border-zinc-900"
                  required
                />
              </div>
            </div>

            <div className="w-full h-[max-content] flex items-center justify-between">
              <button
                className="w-[150px] h-[6dvh] p-2 bg-blue-500 text-white font-[500] rounded"
                type="submit"
              >
                Add
              </button>
              <button
                onClick={close}
                className="w-[150px] h-[6dvh] p-2 bg-red-500 text-white font-[500] rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </React.Fragment>
  );
};

export default AdminAlbum;
