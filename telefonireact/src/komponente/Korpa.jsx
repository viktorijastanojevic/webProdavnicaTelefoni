import jsPDF from "jspdf";
import "jspdf-autotable";
import React from "react";
import {BsPlusLg, BsDashLg} from "react-icons/bs"
const Korpa = ({products, sum,onAdd,onRemove}) => {
    function exportPDF() {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "landscape"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
        var today = new Date();
        const footer = "\t\t\t\t\t\t\t\t\t\t\t\tUKUPNO ZA UPLATU: "+sum;
        const title = "Racun na dan: "+  today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()+footer;
        const headers = [["MODEL", "CENA","KOLICINA","UKUPNO"]];
        console.log(products)
        const data = products.map(elt=> [elt.name, elt.price, elt.amount, elt.price*elt.amount]);
      
        let content = {
          startY: 50,
          head: headers,
          body: data ,
          
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("racun.pdf")
      }
 
    return (
      
          <div className="telefoniUporedjivanje"><h3>Vaša korpa:</h3> 
          <br /><br /><br />
          <table className="tabelaKorpa">
            <tbody >
                    <tr><th>Model</th><th>Cena</th><th>Kolicina</th><th>Ukupno</th><th></th></tr>

                {products.map((prod)=> (
                    <tr key={prod.id}><th>{prod.name}</th><td><b>{prod.price}</b></td><td><b>{prod.amount}</b></td><td><b>{prod.amount*prod.price}</b></td><td><button className="btn"
                    onClick={() => onAdd( prod.id)}><BsPlusLg/></button><button className="btn" onClick={() => onRemove( prod.id)}><BsDashLg /></button></td></tr>
                ))}
            </tbody>
        </table>
        <br /><br /><br />
        <div className="cenaDiv"><h3>Ukupna cena proizvoda: {sum} RSD</h3>
        </div>
        <div>
        <button className="btn btn--pill btn--green" onClick={() => exportPDF()}>Generisi racun</button>
        </div>
      </div>


    );
  };

export default Korpa;