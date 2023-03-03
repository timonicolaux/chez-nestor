import React, { Dispatch, SetStateAction, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { AppartmentInfo } from "../types/types";

const Appartment = ({
  appartmentInfo,
  setAppartmentInfo,
  appartmentIndex,
}: {
  appartmentInfo: AppartmentInfo;
  setAppartmentInfo: Dispatch<SetStateAction<AppartmentInfo[]>>;
  appartmentIndex: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState<string>("");

  return (
    <>
      <div
        className={
          !isOpen
            ? "flex justify-center bg-white mx-auto h-96 rounded-lg w-[800px] shadow-xl mt-10"
            : "flex justify-center bg-white mx-auto h-96 w-[800px] shadow-xl mt-10 rounded-t-lg"
        }
      >
        <div
          className="bg-cover bg-no-repeat bg-center w-[350px] m-4 rounded-lg shadow-sm"
          style={{ backgroundImage: `url(${appartmentInfo.url})` }}
        />
        <div className="flex-1 m-4 mr-6 text-gray-800">
          <h1 className="text-2xl font-bold mt-2 mb-2">
            {appartmentInfo.title}
          </h1>
          <div className="flex items-center mb-2">
            <IoLocationSharp className="mr-2" color="orange" />
            <h3>{appartmentInfo.address}</h3>
          </div>
          <h2 className="text-2xl font-bold mb-6">
            {appartmentInfo.price}€
            <span className="text-lg font-normal">/mois</span>
          </h2>
          <p className="text-justify">“{appartmentInfo.description}“</p>
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
        <div className="flex flex-col bg-white mx-auto rounded-b-lg w-[800px] h-[800px] shadow-xl transform transition-transform duration-500">
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <h3>{320 - description.length} caractères restants</h3>
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
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Appartment;
