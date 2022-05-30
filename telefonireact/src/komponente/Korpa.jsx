import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import React, { useEffect, useState } from "react";
import {BsPlusLg, BsDashLg} from "react-icons/bs"
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
const Korpa = ({products, sum,onAdd,onRemove}) => {  
  

  //javni web servis da dobijemo koeficijent RSD_EUR
      const [RSD_EUR, setRSDEUR] = useState([]);
      useEffect(() => {
          axios({
            method: "GET",
            url:
              "https://api.currencyapi.com/v3/latest?apikey=zbICuoNBacI03bcETlGc6Pm9LJS4x5c5lgmNTBj4&currencies=RSD&base_currency=EUR",
               
          })
            .then((response) => {
              console.log(response.data.data['RSD'].value);
              setRSDEUR(response.data.data['RSD'].value);
              
            })
            .catch((error) => {
              console.log(error);
          });
      }, []);



  //javni web servis da dobijemo koeficijent RSD_USD
  const [RSD_USD, setRSDUSD] = useState([]);
      useEffect(() => {
        axios({
          method: "GET",
          url:
            "https://api.currencyapi.com/v3/latest?apikey=zbICuoNBacI03bcETlGc6Pm9LJS4x5c5lgmNTBj4&currencies=RSD&base_currency=USD",
             
        })
          .then((response) => {
            console.log(response.data.data['RSD'].value);
            setRSDUSD(response.data.data['RSD'].value);
            
          })
          .catch((error) => {
            console.log(error);
        });
    }, []);





    var navigate = useNavigate();
    function sacuvajKorpuUBazi(){
      const user_id=window.sessionStorage.getItem('auth_id');
      
        //cuvacemo samo stavke korpe, za id korpe cemo uzeti id korisnika (jedna korpa za jednog usera)
        products.map(p=>{
          console.log(p)
          console.log("http://127.0.0.1:8000/api/stavke/?korpa_id="+user_id+"&proizvod_id="+p.id+"&kolicina="+p.amount+"&user_id="+user_id)

          axios
          .post("http://127.0.0.1:8000/api/stavke/?korpa_id="+user_id+"&proizvod_id="+p.id+"&kolicina="+p.amount+"&user_id="+user_id,{headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`} } )
          .then((res)=>{  
              console.log(res.data);
               alert("A")
               navigate("/");
          })
          .catch(function (error) {
              if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              }
          
            });
        })

      
        
    }
    function exportPDF() {

      var valute = document.getElementById('currency');
      var trenutnaValuta  = valute.selectedIndex 
      var koeficijentValute=1;
      var oznakaValute="RSD";
        if(trenutnaValuta===1)//EUR
        {
          koeficijentValute=RSD_EUR;
          oznakaValute="EUR";
        }else{ //USD
          koeficijentValute=RSD_USD;
          oznakaValute="USD";

        }
        sacuvajKorpuUBazi();
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "landscape"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
        var today = new Date();
        const footer = " \t\t\t\t\t\t\t\tUKUPNO ZA UPLATU: "+(sum/koeficijentValute).toFixed(2) + "["+oznakaValute+"]";
        const title = "Racun na dan: "+  today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()+footer;
        const headers = [["MODEL", "CENA["+oznakaValute+"]","KOLICINA","UKUPNO["+oznakaValute+"]"]];
       // console.log(products)
        const data = products.map(elt=> [elt.name, (elt.price/koeficijentValute).toFixed(2), elt.amount, (elt.price*elt.amount/koeficijentValute).toFixed(2)]);
      
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
          <label htmlFor="currency">U kojoj valuti zelite racun</label>

          <select name="currency" id="currency"  >
            <option value="RSD" >RSD</option>
            <option value="EUR" >EUR</option>
            <option value="USD" >USD</option>
 
          </select>
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