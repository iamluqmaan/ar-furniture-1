import { forwardRef } from "react";
import { Leva } from "leva";

const Interface = forwardRef((props, ref) => {
  const titleBarPosition = { x: -50, y: 0 };

  // const Takesnap = () => {
  //   // const canvas = document.querySelector('canvas');

  //   // requestAnimationFrame(() => {
  //   //   console.log("clicked")
  //   //   const img = canvas.toDataURL("image/jpeg");
  //   //   const a = document.createElement("a");
  //   //   a.href = img;
  //   //   a.download = "cavas.jpeg";
  //   //   a.click();
  //   // });
  //   console.log("cli")
  //   // Adjust the delay as needed
  // };

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
