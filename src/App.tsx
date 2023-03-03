import React, { useState } from "react";
import Appartment from "./components/Appartment";
import { AppartmentInfo } from "./types/types";

function App() {
  const [appartmentInfo, setAppartmentInfo] = useState<AppartmentInfo[]>([
    {
      title: "73 Quivogne 1 - Chambre 1",
      address: "73 Rue Quivogne, 69002 Lyon",
      price: 710,
      description:
        "Cette superbe chambre en colocation, meublée, équipée et tout inclus à Lyon unit confort et design. Elle offre de nombreux équipements comme un lit confortable et hypoallergénique avec couette et oreillers. Ne vous manque plus à apporter que vos vêtements pour y vivre ! La chambre possède un cadenas si besoin.",
      url: "https://static.pic.chez-nestor.com/apartments/9fc996ef-e0ba-4bcf-b911-7ea35be93782/large.webp",
    },
  ]);
  return (
    <div>
      <div className="font-roboto mt-10">
        <Appartment
          appartmentInfo={appartmentInfo}
          setAppartmentInfo={setAppartmentInfo}
        />
      </div>
    </div>
  );
}

export default App;
