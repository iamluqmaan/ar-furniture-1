import { forwardRef } from "react";
import { Leva } from "leva";

const Interface = forwardRef((props, ref) => {
  const titleBarPosition = { x: -25, y: 0 };

  

  return (
    <>
      <div
        ref={ref}
        style={{ position: "absolute", top: 0, left: 0, touchAction: "none" }}

      >
        <Leva
          style={{
            position: "absolute",
            zIndex: "1000",
          }}
          collapsed
          titleBar={{
            position: titleBarPosition,
            drag: false,
          }}

        />

      </div>

    </>

  );
});

Interface.displayName = "Interface";
export default Interface;
