import { forwardRef, useState } from "react";
import { Leva } from "leva";

const Interface = forwardRef((props, ref) => {
  

 

  return (
    <div
      
      ref={ref}
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      <Leva
        style={{
          position: "absolute",
          zIndex: "1000",
        }}
        collapsed
        titleBar={{
          
          drag:false,
        }}
      />
    </div>
  );
});

Interface.displayName = "Interface";
export default Interface;
