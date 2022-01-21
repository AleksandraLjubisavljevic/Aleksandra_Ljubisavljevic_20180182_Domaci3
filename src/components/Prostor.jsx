import React from "react";

const Prostor = ({ prostorija }) => {
  return (
    <div className="slike1">
      <div className="container1">
        <div className="centered">
            <p className="tekst">
            {prostorija.description} 
            </p>
        </div>
        <img
        className="unutrasnjost"
        src={prostorija.image}
        alt="Neka slika"
      />

      </div>
    </div>
  );
};

export default Prostor;

