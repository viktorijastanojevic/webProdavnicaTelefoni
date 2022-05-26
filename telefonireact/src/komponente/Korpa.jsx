 
import React from "react";
import {BsPlusLg, BsDashLg} from "react-icons/bs"
const Korpa = ({products, sum,onAdd,onRemove}) => {

 
    return (
      
          <div className="telefoniUporedjivanje"><h3>Vaša korpa:</h3> 
          <br /><br /><br />
          <table className="tabelaKorpa">
            <tbody >
                    <tr><th>Model</th><th>Cena</th><th>Kolicina</th><th>Ukupno</th></tr>

                {products.map((prod)=> (
                    <tr key={prod.id}><th>{prod.name}</th><td><b>{prod.price}</b></td><td><b>{prod.amount}</b></td><td><b>{prod.amount*prod.price}</b></td><td><button className="btn"
                    onClick={() => onAdd( prod.id)}><BsPlusLg/></button><button className="btn" onClick={() => onRemove( prod.id)}><BsDashLg /></button></td></tr>
                ))}
            </tbody>
        </table>
        <br /><br /><br />
      <div className="cenaDiv"><h3>Ukupna cena proizvoda: {sum} RSD</h3>
          </div>
      </div>

      
    );
  };

export default Korpa;