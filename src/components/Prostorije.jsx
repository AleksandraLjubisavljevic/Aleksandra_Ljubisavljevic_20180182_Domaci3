import React from "react";
import Prostor from "./Prostor";


const Prostorije = ({ prostorije })  => {
  const name = "New prostorija Name";
  const description =
    "New prostorija description that we got from prostorija component using props.";
  const image="image";
  return (
    <div className="sve-prostorije">
      {prostorije.map((prostorija) => (
        <Prostor prostorija={prostorija} />
      ))}

    </div>
  );
};

export default Prostorije;

