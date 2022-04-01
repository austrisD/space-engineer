const PlanetBlank = (props) => {
  return (
    <div
      className="PlanetBlank"
      style={{
        width: props.PlanetSize + "px",
        height: props.PlanetSize + "px",
        backgroundImage: `url(${props.planetImage})`,
      }}
    ></div>
  );
};

export default PlanetBlank;
