import { useControls } from "leva";
import { createContext, useContext, useState, useEffect } from "react";

const CharacterAnimationsContext = createContext({});

export const CharacterAnimationsProvider = (props) => {
  const [IsDrag, SetDrag] = useState(false);
  const [currentColor, setCurrentColor] = useState("#ffffff"); 
  const [currentModelName, setCurrentModelName] = useState(props.Model);

  const { Color } = useControls({
    Color: {
      options: {
        "White": "#ffffff",
        "Blue": "#0B60B0",
        "Green": "#65B741",
        "Orange": "#EE7214",
      },
      onChange: (Val) => {
        setCurrentColor(Val);
      },
    },
    Model: {
      value: currentModelName,
      options: {
        "Chair 1": "chair1",
        "Chair 2": "chair2",
        "Table 1": "table1",
        "Table 2": "table2",
        "Sofa 1": "sofa1",
        "Sofa 2": "sofa2",
        "Lamp 1": "lamp1",
        "Lamp 2": "lamp2",
      },
      onChange: (value) => {
        setCurrentModelName(value);
      },
    },
  });

  useEffect(() => {
    setCurrentModelName((prevModelName) => {
      if (props.Model !== prevModelName) {
        return props.Model;
      }
      return prevModelName;
    });
  }, [props.Model]);

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
