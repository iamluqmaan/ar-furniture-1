import { useControls } from "leva";
import { createContext, useContext, useState, useMemo } from "react";
import { Vector3 } from "three";

const CharacterAnimationsContext = createContext({});

export const CharacterAnimationsProvider = (props) => {

  
  
  const { Color, Model } = useControls({
    Color: "#ffffff",
    Model: {
      options: {
        "Chair 1": "chair1",
        "Table 1": "table1",
        "Table 2": "table2",
        "Sofa 1": "sofa1",
        "Lamp 1": "lamp1",
      },
      onChange: (value) => {
        setCurrentModelName(value);
      },
    },
  });

  const [currentModelName, setCurrentModelName] = useState(Model);

  return (
    <CharacterAnimationsContext.Provider
      value={{
        currentModelName,
        setCurrentModelName,
        Color,
       
       
        
      }}
    >
      {props.children}
    </CharacterAnimationsContext.Provider>
  );
};

export const useCharacterAnimations = () => {
  return useContext(CharacterAnimationsContext);
};
