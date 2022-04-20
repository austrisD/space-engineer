import React, { useEffect, useState } from "react";

const PlanetBlank = (props) => {
  const [ElementActive, setElementActive] = useState(false);
  const screenXCenter = window.innerWidth / 2;
  const screenZCenter = window.innerHeight / 2;
  const CoordinatesX = props.planet.Coordinates.X / 10000000;
  const CoordinatesZ = props.planet.Coordinates.Z / 10000000;
  const scaleUnitPerPixel = (window.innerHeight + window.innerWidth) / 2;

  // console.log("====================================" + props.planet.name);
  // console.log(props);
  // console.log(CoordinatesX);
  // console.log(scaleUnitPerPixel);
  // console.log(screenXCenter);
  // console.log(CoordinatesZ < 0);
  // console.log("====================================");
  // useEffect(() => {
  //   console.log(props);
  //   screenXCenter = window.innerWidth / 2;
  //   screenYCenter = window.innerHeight / 2;
  // });

  return (
    <div
      className="planetElement"
      onMouseEnter={() => {
        setElementActive(true);
      }}
      onMouseLeave={() => {
        setElementActive(false);
      }}
      style={{
        bottom:
          CoordinatesZ < 0
            ? `${Math.abs(CoordinatesZ * scaleUnitPerPixel + screenZCenter)}px`
            : `${Math.abs(CoordinatesZ * scaleUnitPerPixel + screenZCenter)}px`,
        left:
          CoordinatesX < 0
            ? `${Math.abs(CoordinatesX * scaleUnitPerPixel + screenXCenter)}px`
            : `${Math.abs(CoordinatesX * scaleUnitPerPixel + screenXCenter)}px`,
      }}
      name={props.planet.name}
    >
      <div
        className="PlanetBlank"
        style={{
          width: props.planet.PlanetSize / 2000 + "px",
          height: props.planet.PlanetSize / 2000 + "px",
          backgroundImage: `url(${props.planet.planetImage})`,
        }}
      ></div>

      <div
        className="PlanetHover"
        style={{
          display: ElementActive === true ? "block" : "none",
        }}
      >
        <div className="planetSVG">
          <svg
            width="190"
            height="65"
            viewBox="0 0 190 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_11_9)">
              <path
                d="M171.667 55.9441C176.601 52.6476 180.446 47.9623 182.716 42.4805C184.987 36.9987 185.581 30.9667 184.424 25.1473C183.266 19.3279 180.409 13.9824 176.213 9.7868C172.018 5.59123 166.672 2.734 160.853 1.57645C155.033 0.41889 149.001 1.01299 143.52 3.28362C138.038 5.55425 133.352 9.39942 130.056 14.3329C126.759 19.2664 125 25.0666 125 31H94.75H64.5H34.25H4"
                stroke="#82CAD3"
                stroke-width="2"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_11_9"
                x="0"
                y="-1.52588e-05"
                width="190"
                height="64.7756"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_11_9"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_11_9"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>

        <ul className="PlanetBasicInfo">
          <h3 className="planetName">{props.planet.name}</h3>
          <li>
            <div className="planetInfoTag">Size = </div>
            {props.planet.PlanetSize / 1000} km
          </li>
          <li>
            <div className="planetInfoTag">Gravity = </div>
            {props.planet.gravity} G
          </li>
          <li>
            <div className="planetInfoTag">NPC = </div>
            {props.planet.npc}
          </li>
          <li>
            <div className="planetInfoTag">PVP = </div>
            {props.planet.pvp}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlanetBlank;
