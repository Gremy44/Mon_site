import React, { createContext, useContext, useState } from "react";
import PresPerso from "../../components/presentation_perso/presentation_perso";

// Créez le contexte
const ImageContext = createContext<{ clickedImages: boolean[]; setClickedImages: React.Dispatch<React.SetStateAction<boolean[]>> }>({
  clickedImages: [],
  setClickedImages: () => {},
});

// Créez un Hook personnalisé pour utiliser le contexte
export function useImageContext() {
  return useContext(ImageContext);
}

// Créez un composant fournisseur du contexte pour envelopper votre application
export const ImageProvider: React.FC = ( PresPerso ) => {
  const [clickedImages, setClickedImages] = useState<boolean[]>([]);

  return (
    <ImageContext.Provider value={{ clickedImages, setClickedImages }}>
      PresPerso
    </ImageContext.Provider>
  );
};