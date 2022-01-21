import React from "react";
import Prostor from "./Prostor";
import ONama from "./Onama";

const Prostorije = ({ prostorije })  => {
  const name = "New prostorija Name";
  const description =
    "New prostorija description that we got from prostorija component using props.";
  const image="image";
  return (
    <div className="sve-prostorije">
      <ONama />
      {prostorije.map((prostorija) => (
        <Prostor prostorija={prostorija} />
      ))}

    </div>
  );
};

export default Prostorije;

