import { forwardRef } from "react";
import { Leva } from "leva";

const Interface = forwardRef((props, ref) => {
  
  return (
    <div ref={ref} style={{ position: "absolute", top: 0, left: 0}}>
      <Leva
        style={{
          position: "absolute",
          top: "50%", 
          left: "50%", 
          transform: "translate(-50%, -50%)",
        }}
        collapsed
      />
    </div>
  );
});

Interface.displayName = "Interface";
export default Interface;