import React, { Dispatch, SetStateAction, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AppartmentInfo } from "../types/types";
import { Transition } from "@headlessui/react";

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
          <div className="relative left-4 top-1/2 transform -translate-y-1/2 w-[80px] flex items-center">
            <button
              className="bg-blue-500 flex justify-center items-center p-auto hover:bg-blue-600 text-white font-bold text-3xl w-10 h-10 rounded-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              {!isOpen ? "+" : "-"}
            </button>
          </div>
          <h1 className="my-auto text-xl md:text-2xl text-left font-medium mx-4 text-black">
            Ajouter un appartement
          </h1>
        </div>
      </div>

      {/* APPARTMENT FORM */}

      <div className="flex mx-4 relative">
        <div
          className={
            isOpen
              ? "flex absolute z-10 flex-col left-0 right-0 bg-white mx-auto rounded-b-lg max-w-[800px] w-full h-[850px] shadow-xl"
              : "flex absolute z-10 flex-col left-0 right-0 bg-white mx-auto rounded-b-lg w-full max-w-[800px] h-none shadow-xl"
          }
          style={
            isOpen
              ? { height: "850px", transition: "height 0.4s ease-in-out" }
              : { height: "0px", transition: "height 0.4s ease-in-out" }
          }
        >
          <>
            <div
              className="mb-6 mx-auto my-4"
              style={
                isOpen
                  ? { opacity: "1", transition: "opacity 1s" }
                  : { opacity: "0", transition: "opacity 0.2s" }
              }
            >
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
            <div
              className="mb-6 mx-auto my-4"
              style={
                isOpen
                  ? { opacity: "1", transition: "opacity 1s" }
                  : { opacity: "0", transition: "opacity 0.2s" }
              }
            >
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
            <div
              className="mb-6 mx-auto my-4"
              style={
                isOpen
                  ? { opacity: "1", transition: "opacity 1s" }
                  : { opacity: "0", transition: "opacity 0.2s" }
              }
            >
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
            <div
              className="mb-6 mx-auto my-4"
              style={
                isOpen
                  ? { opacity: "1", transition: "opacity 1s" }
                  : { opacity: "0", transition: "opacity 0.2s" }
              }
            >
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
            <div
              className="mb-6 mx-auto my-4"
              style={
                isOpen
                  ? { opacity: "1", transition: "opacity 1s" }
                  : { opacity: "0", transition: "opacity 0.2s" }
              }
            >
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
              style={
                isOpen
                  ? { opacity: "1", transition: "opacity 1s" }
                  : { opacity: "0", transition: "opacity 0.2s" }
              }
            >
              Valider
            </button>
          </>
        </div>
      </div>
    </>
  );
};

export default NewAppartment;
