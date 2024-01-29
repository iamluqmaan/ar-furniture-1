import { useControls } from "leva";
import { createContext, useContext, useState } from "react";

const CharacterAnimationsContext = createContext({});

export const CharacterAnimationsProvider = (props) => {

  const [IsDrag,SetDrag]=useState(false);
  
  const { Color, Model } = useControls({
    Color: {
      options:{
        "White":"#ffffff",
        "Blue":"#0B60B0",
        "Green":"#65B741",
        "Orange":"#EE7214",
      },
      onChange:(Val)=>{
        setCurrentColor(Val)
      },
    },
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
  const [currentColor, setCurrentColor] = useState(Model);

  return (
    <CharacterAnimationsContext.Provider
      value={{
        currentModelName,
        setCurrentModelName,
        Color,
        IsDrag,
        SetDrag,
        currentColor,
        setCurrentColor,
       
        
      }}
    >
      {props.children}
    </CharacterAnimationsContext.Provider>
  );
};

export const useCharacterAnimations = () => {
  return useContext(CharacterAnimationsContext);
};
