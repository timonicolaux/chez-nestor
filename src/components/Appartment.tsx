import React, { Dispatch, SetStateAction, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { AppartmentInfo } from "../types/types";
import toast, { Toaster } from "react-hot-toast";

const Appartment = ({
  appartmentInfoIndex,
  appartmentInfo,
  setAppartmentInfo,
  appartmentIndex,
}: {
  appartmentInfoIndex: AppartmentInfo;
  appartmentInfo: AppartmentInfo[];
  setAppartmentInfo: Dispatch<SetStateAction<AppartmentInfo[]>>;
  appartmentIndex: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState<AppartmentInfo>({
    title: appartmentInfoIndex.title,
    address: appartmentInfoIndex.address,
    price: appartmentInfoIndex.price,
    description: appartmentInfoIndex.description,
    url: appartmentInfoIndex.url,
  });

  const updateAppartment = () => {
    const updatedData = [...appartmentInfo];
    if (formState.url.length === 0) {
      const noImageFormState = {
        ...formState,
        url: "https://t4.ftcdn.net/jpg/02/07/87/79/360_F_207877921_BtG6ZKAVvtLyc5GWpBNEIlIxsffTtWkv.jpg",
      };
      updatedData[appartmentIndex] = noImageFormState;
      setAppartmentInfo(updatedData);
    } else {
      updatedData[appartmentIndex] = formState;
      setAppartmentInfo(updatedData);
    }
    setIsOpen(false);
    toast.success("Appartement modifié");
  };

  const handleChange = (key: string, value: any) => {
    setFormState({ ...formState, [key]: value });
  };

  return (
    <>
      <Toaster position="top-center" />
      <div
        className={
          !isOpen
            ? "flex justify-center bg-white mx-auto h-96 rounded-lg w-[800px] shadow-xl mt-10"
            : "flex justify-center bg-white mx-auto h-96 w-[800px] shadow-xl mt-10 rounded-t-lg"
        }
      >
        <div
          className="bg-cover bg-no-repeat bg-center w-[350px] m-4 rounded-lg shadow-sm"
          style={{ backgroundImage: `url(${appartmentInfoIndex.url})` }}
        />
        <div className="flex-1 m-4 mr-6 text-gray-800">
          <h1 className="text-2xl font-bold mt-2 mb-2">
            {appartmentInfoIndex.title}
          </h1>
          <div className="flex items-center mb-2">
            <IoLocationSharp className="mr-2" color="orange" />
            <h3>{appartmentInfoIndex.address}</h3>
          </div>
          <h2 className="text-2xl font-bold mb-6">
            {appartmentInfoIndex.price}€
            <span className="text-lg font-normal">/mois</span>
          </h2>
          <p className="text-justify">“{appartmentInfoIndex.description}“</p>
          <div className="flex justify-end">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold m-2 py-2 px-4 rounded"
              onClick={() => setIsOpen(!isOpen)}
            >
              Modifier
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold m-2 py-2 px-4 rounded">
              Supprimer
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col bg-white mx-auto rounded-b-lg w-[800px] h-[850px] shadow-xl transform transition-transform duration-500">
          <div className="mb-6 mx-auto my-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Nom de l'appartement
            </label>
            <input
              className="w-[700px] shadow-xs bg-slate-200 text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              value={formState.title}
              onChange={(e) => handleChange("title", e.target.value)}
            />
          </div>
          <div className="mb-6 mx-auto my-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Adresse
            </label>
            <input
              className="w-[700px] shadow-xs bg-slate-200 text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              value={formState.address}
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </div>
          <div className="mb-6 mx-auto my-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Prix
            </label>
            <input
              className="w-[700px] shadow-xs bg-slate-200 text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              value={formState.price || undefined}
              onChange={(e) => handleChange("price", e.target.value)}
            />
          </div>
          <div className="mb-6 mx-auto my-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Description
            </label>
            <textarea
              maxLength={320}
              className="w-[700px] resize-none h-40 shadow-xs bg-slate-200 text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
              value={formState.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
            <h3>{320 - formState.description.length} caractères restants</h3>
          </div>
          <div className="mb-6 mx-auto my-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Lien de l'image (URL)
            </label>
            <input
              className="w-[700px] shadow-xs bg-slate-200 text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              value={formState.url}
              onChange={(e) => handleChange("url", e.target.value)}
            />
          </div>
          <button
            className="bg-green-500 hover:bg-green-600 text-white mx-auto font-bold m-2 py-2 px-4 rounded mt-4 w-40"
            onClick={() => updateAppartment()}
          >
            Valider
          </button>
        </div>
      )}
    </>
  );
};

export default Appartment;
