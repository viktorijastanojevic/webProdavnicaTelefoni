 
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
import NotFound404 from './komponente/NotFound404';
import Korpa from './komponente/Korpa';
import AdminDashboard from './komponente/AdminDashboard';
import Poruke from './komponente/Poruke';
import DodajTelefon from './komponente/DodajTelefon';
import IzmeniProizvod from './komponente/IzmeniProizvod';
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
function App() {
   
  const[token,setToken] = useState();


  const [cartNum, setCartNum] = useState(0); 
  const [cartProducts, setCartProducts] = useState([]);
  const [sum, setSumPrice] = useState(0); 

  const [telefoniUporedjivanje, setTelefoniUporedjivanje] = useState([]);
  const [brojTelefonaZaUporedjivanje, setBrTelZaUp] = useState(0);
  
  const [poruke,setPoruke] = useState([]);

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


  useEffect(() => {
    const getRandomLists2 = async () => {
      try {
        const res = await axiosInstance.get( "http://127.0.0.1:8000/api/poruke",
          {
            headers: {
              token:
                "Bearer " +
                ( window.sessionStorage.getItem("auth_token")),
            },
          }
        );
        setPoruke(res.data);
        console.log(res.data)
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists2();
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
  
function refreshCart() {
  let u_korpi = telefoni.filter((p) => p.amount > 0);
  setCartProducts(u_korpi);
  var suma=0;
  cartProducts.forEach((p)=>{
    suma+=p.price*p.amount;
  })
  setSumPrice(suma);
}
function jeUKorpi(id){
  var postoji=0;
  cartProducts.forEach((p) => {
    if (p.id === id) {
     
      postoji=1;
    }
  });
   
  return postoji;
}
function addProduct( id) {
  
  setCartNum(cartNum + 1);

  telefoni.forEach((p) => {
    if (p.id === id) {
      p.amount++;
      setSumPrice(sum+p.price);
    }
  });
  refreshCart();

}

function removeProduct( id) {
 
  if(jeUKorpi(id)===1){
   
    setCartNum(cartNum - 1);
    telefoni.forEach((p) => {
      if (p.id === id) {
        if(p.amount === 0){
          return;
        }else{
          p.amount--; 
        }
      }
    });
    refreshCart();
  }


}
  return (
    <div className="App">
      <BrowserRouter className="App">
        <Navbar   cartNum={cartNum} token={token} ></Navbar>
        <Routes>

            <Route path="/" element={ <Pocetna></Pocetna>}></Route>
            <Route path="/kontakt" element={ <Kontakt></Kontakt>}></Route>

            <Route path="/login" element={ <Login addToken={addToken}></Login>}></Route>
            <Route path="/register" element={ <Register ></Register>}></Route>

            <Route path="/telefoni" element={ <Ponuda   telefoni={telefoni} dodajTelefon={dodajTelefon} onAdd={addProduct} onRemove={removeProduct}></Ponuda>}></Route>
          
          
            <Route path="/uporedi" element={ <Uporedjivanje telefoniUporedjivanje={telefoniUporedjivanje} brojTelefonaZaUporedjivanje={brojTelefonaZaUporedjivanje}></Uporedjivanje>}></Route>
            <Route   path="/korpa" element={<Korpa onAdd={addProduct} onRemove={removeProduct} products={cartProducts} sum={sum}/>}/>

            <Route path="/admin" element={ <AdminDashboard telefoni={telefoni}></AdminDashboard>}></Route>


            <Route path="/admin/poruke" element={ <Poruke poruke={poruke}></Poruke>}></Route>
            <Route path="/admin/dodajProizvod" element={ <DodajTelefon></DodajTelefon>}></Route>

            <Route path="/admin/izmeniProizvod" element={ <IzmeniProizvod></IzmeniProizvod>}></Route>
            
            
            <Route path="/*" element={<NotFound404></NotFound404>}/>
        </Routes>
           
          
          <Footer></Footer>
       </BrowserRouter>
    </div>
  );
}

export default App;
