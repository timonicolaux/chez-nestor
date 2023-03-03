import React, { Dispatch, SetStateAction, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { AppartmentInfo } from "../types/types";

const Appartment = ({
  appartmentInfo,
  setAppartmentInfo,
}: {
  appartmentInfo: AppartmentInfo[];
  setAppartmentInfo: Dispatch<SetStateAction<AppartmentInfo[]>>;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState<string>("");
  const bgimage =
    "https://static.pic.chez-nestor.com/apartments/9fc996ef-e0ba-4bcf-b911-7ea35be93782/large.webp";
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
          style={{ backgroundImage: `url(${bgimage})` }}
        />
        <div className="flex-1 m-4 mr-6 text-gray-800">
          <h1 className="text-2xl font-bold mt-2 mb-2">
            73 Quivogne 1 - Chambre 1
          </h1>
          <div className="flex items-center mb-2">
            <IoLocationSharp className="mr-2" color="orange" />
            <h3>73 Rue Quivogne, 69002 Lyon</h3>
          </div>
          <h2 className="text-2xl font-bold mb-6">
            710€<span className="text-lg font-normal">/mois</span>
          </h2>
          <p className="text-justify">
            “Cette superbe chambre en colocation, meublée, équipée et tout
            inclus à Lyon unit confort et design. Elle offre de nombreux
            équipements comme un lit confortable et hypoallergénique avec
            couette et oreillers. Ne vous manque plus à apporter que vos
            vêtements pour y vivre ! La chambre possède un cadenas si besoin.“
          </p>
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
              type="text"
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
