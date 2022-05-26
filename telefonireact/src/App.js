 
import './App.css';
import Navbar from './komponente/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 
import 'bootstrap/dist/css/bootstrap.min.css';
 
import { useEffect, useState } from "react";
import Footer from './komponente/Footer';
import Pocetna from './komponente/Pocetna';
import Ponuda from './komponente/Ponuda';
import Uporedjivanje from './komponente/Uporedjivanje';
import axios from "axios";
import Login from './komponente/Login';
import Register from './komponente/Register';
import Kontakt from './komponente/Kontakt';
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
function App() {
  const [cartNum, setCartNum] = useState(0); 
  const [sort, setSort] = useState(true);
  const[token,setToken] = useState();
 
  const [telefoniUporedjivanje, setTelefoniUporedjivanje] = useState([]);
  const [brojTelefonaZaUporedjivanje, setBrTelZaUp] = useState(0);


  const [telefoni,setTelefoni] = useState([ ]);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axiosInstance.get( "http://127.0.0.1:8000/api/proizvodi",
          {
            headers: {
              token:
                "Bearer " +
                ( window.sessionStorage.getItem("auth_token")),
            },
          }
        );
        setTelefoni(res.data.data);
        console.log(res.data.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [ axiosInstance]);


function dodajTelefon(id){
   
    setBrTelZaUp(brojTelefonaZaUporedjivanje+1); 
    telefoni.forEach((t)=>{
        if(t.id==id){
          t.uporedi=1;
        }
    })


    let uporediti = telefoni.filter((t)=> t.uporedi==1);
    setTelefoniUporedjivanje(uporediti);

}


function addToken(auth_token){
  setToken(auth_token);
}
 
  return (
    <div className="App">
      <BrowserRouter className="App">
        <Navbar   cartNum={cartNum} token={token} ></Navbar>
        <Routes>

            <Route path="/" element={ <Pocetna></Pocetna>}></Route>
            <Route path="/kontakt" element={ <Kontakt></Kontakt>}></Route>

            <Route path="/login" element={ <Login addToken={addToken}></Login>}></Route>
            <Route path="/register" element={ <Register addToken={addToken}></Register>}></Route>

            <Route path="/telefoni" element={ <Ponuda   telefoni={telefoni} dodajTelefon={dodajTelefon}></Ponuda>}></Route>
            <Route path="/uporedi" element={ <Uporedjivanje telefoniUporedjivanje={telefoniUporedjivanje} brojTelefonaZaUporedjivanje={brojTelefonaZaUporedjivanje}></Uporedjivanje>}></Route>
            
        </Routes>
           
          
          <Footer></Footer>
       </BrowserRouter>
    </div>
  );
}

export default App;
