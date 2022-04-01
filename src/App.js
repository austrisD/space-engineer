import React, { useState } from "react";
import Planet from "./components/planet/planet";
import Skaoul from "./assets/planets/skaoul.png";

const App = () => {
  let [MousePosition, setMousePosition] = useState({
    X: 50,
    Y: 50,
    timeout: true,
  });

  const ConvertMouseMovement = (input) => {
    return 50;
  };

  return (
    <div>
      <header></header>
      <main>
        <div
          className="planetView"
          // onMouseMove={(e) => {
          //   if (MousePosition.timeout == false) return;

          //   if (MousePosition.timeout == true) {
          //     console.log(e);
          //   }

          //   setMousePosition({ timeout: false });

          //   setTimeout(() => {
          //     setMousePosition({
          //       X: ConvertMouseMovement(e.clientX),
          //       Y: ConvertMouseMovement(e.clientY),
          //       timeout: true,
          //     });
          //   }, 500);
          // }}
          // style={{
          //   backgroundPosition: `${MousePosition.X}%  ${MousePosition.Y}%`,
          // }}
        >
          <Planet
            PlanetSize={120}
            planetImage={Skaoul}
            Coordinates={{
              X: 3377382.9807661511,
              Y: -8.2719293150755759,
              Z: 918305.06980586227,
            }}
          />
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
