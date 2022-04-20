import React, { useState } from "react";
import Planet from "./components/planet/planet";
import { Planets } from "./assets/data/planets";

const App = () => {
  let [MousePosition, setMousePosition] = useState({
    X: 50,
    Y: 50,
    timeout: true,
  });

  const ConvertMouseMovement = (input) => {
    return 50;
  };
  const scale =  5;

  return (
    <div>
      <header></header>

      <main>
        <div className="planetView">
          {Planets.map((ID, key) => {
            return <Planet planet={ID} scale={scale} key={key} />;
          })}
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;

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
