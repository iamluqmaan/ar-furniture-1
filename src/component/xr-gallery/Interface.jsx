import { forwardRef } from "react";
import { Leva } from "leva";

const Interface = forwardRef((props, ref) => {
  const titleBarPosition = props.arMode
    ? { x: 0, y: 0 } // Set position when arMode is true
    : { x: -50, y: 450 }; // Set default position

  return (
    <div ref={ref} style={{ position: "absolute", top: 0, left: 0 }}>
      <Leva
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          zIndex: "200000",
          transform: "translate(-50%, -50%)",
        }}
        collapsed
        titleBar={{
          position: titleBarPosition,
        }}
      />
    </div>
  );
});

Interface.displayName = "Interface";
export default Interface;
