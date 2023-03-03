import { Dispatch, SetStateAction } from "react";

export interface AppartmentInfo {
  title: string;
  address: string;
  price: number | null;
  description: string;
  url: string;
}

export interface AppContextTypes {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
