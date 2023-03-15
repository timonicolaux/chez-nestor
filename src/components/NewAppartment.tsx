import React, { Dispatch, SetStateAction, useState } from "react";
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
  const [formState, setFormState] = useState<AppartmentInfo>({
    title: "",
    address: "",
    price: null,
    description: "",
    url: "",
  });

  const addAppartment = () => {
    if (formState.url.length === 0) {
      const noImageFormState = {
        ...formState,
        url: "https://t4.ftcdn.net/jpg/02/07/87/79/360_F_207877921_BtG6ZKAVvtLyc5GWpBNEIlIxsffTtWkv.jpg",
      };
      setAppartmentInfo([...appartmentInfo, noImageFormState]);
    } else {
      setAppartmentInfo([...appartmentInfo, formState]);
    }
    setIsOpen(false);
    toast.success("Appartement ajouté");
    setFormState({
      title: "",
      address: "",
      price: null,
      description: "",
      url: "",
    });
  };

  const handleChange = (key: string, value: any) => {
    setFormState({ ...formState, [key]: value });
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="flex mx-4">
        <div
          className={
            !isOpen
              ? "flex bg-white mx-auto h-16 rounded-lg max-w-[800px] w-full shadow-xl"
              : "flex bg-white mx-auto h-16 rounded-t-lg max-w-[800px] w-full shadow-xl"
          }
        >
          <div className=" relative left-4 top-1/2 transform -translate-y-1/3 w-[80px]">
            <button
              className="bg-blue-500 flex justify-center hover:bg-blue-600 text-white font-bold text-3xl w-10 h-10 rounded-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              {!isOpen ? "+" : "-"}
            </button>
          </div>
          <h1 className="my-auto text-2xl text-left font-normal">
            Ajouter un appartement
          </h1>
        </div>
      </div>

      {/* APPARTMENT FORM */}

      {isOpen && (
        <div className="flex mx-4">
          <div className="flex flex-col bg-white mx-auto rounded-b-lg max-w-[800px] w-full h-[850px] shadow-xl transform transition-transform duration-500">
            <div className="mb-6 mx-auto my-4">
              <label
                className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Nom de l'appartement
              </label>
              <input
                className="max-w-[700px] min-w-[300px] md:min-w-[700px] shadow-xs bg-slate-200 text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                maxLength={100}
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
                className="max-w-[700px] min-w-[300px] md:min-w-[700px] shadow-xs bg-slate-200 text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                maxLength={100}
                value={formState.address}
                onChange={(e) => handleChange("address", e.target.value)}
              />
            </div>
            <div className="mb-6 mx-auto my-4">
              <label
                className="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Prix (€/mois)
              </label>
              <input
                className="max-w-[700px] min-w-[300px] md:min-w-[700px] shadow-xs bg-slate-200 text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
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
                className="max-w-[700px] min-w-[300px] md:min-w-[700px] resize-none h-40 shadow-xs bg-slate-200 text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
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
                className="max-w-[700px] min-w-[300px] md:min-w-[700px] shadow-xs bg-slate-200 text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                maxLength={300}
                value={formState.url}
                onChange={(e) => handleChange("url", e.target.value)}
              />
            </div>
            <button
              className="bg-green-500 hover:bg-green-600 text-white mx-auto font-bold m-2 py-2 px-4 rounded mt-4 w-40"
              onClick={() => addAppartment()}
            >
              Valider
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewAppartment;
