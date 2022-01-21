import React, { Component } from 'react'
import './Form.css'
import { useForm } from "react-hook-form";
import { useState } from "react";

let brojac=0;

function Form1()  {
    const { handleSubmit } = useForm();
    const [result, setResult] = useState("");
    const addValue = () => {
        brojac++;
      };
    
    return (
        <div className='forma1'>
        <form onSubmit={handleSubmit((data) => setResult("Uspesno izvršena rezervacija"))}>
          
          <h2>Rezervišite vaše mesto:</h2><br />
                    <label>Ime :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" placeholder="Ime..."/><br />
                    <label>Prezime :</label> <input type="text" placeholder="Prezime..." /><br />
                    <label>Kontakt :</label> <input type="text" placeholder="Broj telefona..." /><br />
                    <label>Broj osoba :</label><select defaultValue="Izaberite broj osoba">
                        <option defaultValue>Izaberite broj osoba</option>
                        <option value="jedan">1</option>
                        <option value="dva">2</option>
                        <option value="tri">3</option>
                        <option value="cetiri">4</option>
                        <option value="pet">5</option>
                        <option value="viseodpet">6-10</option>
                    </select><br />
                    <br />
                    <p>{result}</p>
                    <input type="submit" value="Potvrdi rezervaciju" onClick={addValue} />
                    <br /><br />
                    <span className="counter">Broj izvršenih rezervacija: {brojac}</span><br></br>
        </form>
        </div>
      );
}

export default Form1

