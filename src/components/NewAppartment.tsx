import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AppartmentInfo } from "../types/types";

const NewAppartment = ({
  appartmentInfo,
  setAppartmentInfo,
}: {
  appartmentInfo: AppartmentInfo[];
  setAppartmentInfo: Dispatch<SetStateAction<AppartmentInfo[]>>;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [formState, setFormState] = useState<AppartmentInfo>({
    title: "",
    address: "",
    price: null,
    description: "",
    url: "",
  });

  const addAppartment = () => {
    setAppartmentInfo([...appartmentInfo, formState]);
    setIsOpen(false);
    toast.success("Appartement ajouté");
  };

  return (
    <>
      <Toaster position="top-center" />
      <div
        className={
          !isOpen
            ? "flex bg-white mx-auto h-16 rounded-lg w-[800px] shadow-xl"
            : "flex bg-white mx-auto h-16 rounded-t-lg w-[800px] shadow-xl"
        }
      >
        <div className="relative left-4 top-1/2 transform -translate-y-1/3 w-[80px]">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-3xl w-10 h-10 rounded-full"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? "+" : "-"}
          </button>
        </div>
        <h1 className="my-auto text-2xl text-left font-normal">
          Ajouter un appartement
        </h1>
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
          <button
            className="bg-green-500 hover:bg-green-600 text-white mx-auto font-bold m-2 py-2 px-4 rounded mt-4 w-40"
            onClick={() => addAppartment()}
          >
            Valider
          </button>
        </div>
      )}
    </>
  );
};

export default NewAppartment;
