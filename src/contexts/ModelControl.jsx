import { useControls } from "leva";
import { createContext, useContext, useState, useMemo } from "react";
import { Vector3 } from "three";

const CharacterAnimationsContext = createContext({});

export const CharacterAnimationsProvider = (props) => {
  const rotateOptions = useMemo(() => {
    return {
      x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
    };
  }, []);

  const Rotate = useControls("Rotate", {
    x: rotateOptions.x,
  });
  
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
       
        Rotate: new Vector3( Rotate.x, 0,0),
        
      }}
    >
      {props.children}
    </CharacterAnimationsContext.Provider>
  );
};

export const useCharacterAnimations = () => {
  return useContext(CharacterAnimationsContext);
};
