import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { AppartmentInfo, AppContextTypes } from "../types/types";
import toast, { Toaster } from "react-hot-toast";
import AppContext from "../context/AppContext";

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
  // const { isOpen, setIsOpen } = useContext(AppContext) as AppContextTypes;
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

  const removeAppartment = () => {
    const updatedData = appartmentInfo.filter(
      (elt) => elt !== appartmentInfoIndex
    );
    setAppartmentInfo(updatedData);
  };

  const handleChange = (key: string, value: any) => {
    setFormState({ ...formState, [key]: value });
  };

  return (
    <div
      style={
        isOpen
          ? { height: "1410px", transition: "height 0.4s ease-in-out" }
          : { height: "450px", transition: "height 0.4s ease-in-out" }
      }
    >
      <Toaster position="top-center" />
      <div className="flex mx-4">
        <div
          className={`flex w-full flex-col justify-center bg-white mx-auto h-[1000px] md:h-[400px] rounded-lg shadow-xl mt-10 md:flex-row md:w-[800px] ${
            isOpen ? "rounded-lg" : "rounded-t-lg"
          }`}
          style={
            isOpen
              ? {
                  borderBottomRightRadius: "0",
                  borderBottomLeftRadius: "0",
                  transition: "border-radius",
                }
              : {
                  borderRadius: "0.5rem",
                  transition: "border-radius 1s ease-in-out",
                }
          }
        >
          <div
            className="bg-cover bg-no-repeat bg-center w-[300px] md:w-[350px] my-8 md:mx-4 mx-auto rounded-lg shadow-sm h-[400px] md:h-[350px]"
            style={{ backgroundImage: `url(${appartmentInfoIndex.url})` }}
          />
          <div className="flex-1 m-4 mr-6 text-gray-800 relative">
            <h1 className="text-2xl font-bold mt-2 mb-2">
              {appartmentInfoIndex.title}
            </h1>
            <div className="flex items-center mb-2">
              <IoLocationSharp className="mr-2" color="orange" />
              <h3>{appartmentInfoIndex.address}</h3>
            </div>
            <h2 className="text-2xl font-bold mb-5">
              {appartmentInfoIndex.price}€
              <span className="text-lg font-normal">/mois</span>
            </h2>
            <p className="text-justify">“{appartmentInfoIndex.description}“</p>
            <div className="absolute bottom-0 right-0">
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold mt-2 mx-2 py-2 px-4 rounded"
                onClick={() => setIsOpen(!isOpen)}
              >
                Modifier
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => removeAppartment()}
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* APPARTMENT FORM */}

      <div className="flex mx-4 relative">
        <div
          className={`flex absolute flex-col left-0 right-0 justify-center mx-auto bg-white rounded-b-lg max-w-[800px] w-full shadow-xl`}
          style={
            isOpen
              ? { height: "860px", transition: "height 0.4s ease-in-out" }
              : { height: "0px", transition: "height 0.4s ease-in-out" }
          }
        >
          <div
            className="mb-6 mx-auto my-4 flex flex-col"
            style={
              isOpen
                ? {
                    opacity: "1",
                    zIndex: "10",
                    transition: "opacity 1s",
                    transitionDelay: "0.2s",
                  }
                : { opacity: "0", zIndex: "-1", transition: "opacity 0.2s" }
            }
          >
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
              onClick={() => updateAppartment()}
            >
              Valider
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appartment;
