import React from 'react'
import { Link } from 'react-router-dom'
import { BsCartFill } from "react-icons/bs";
import axios from "axios";
import Kontakt from './Kontakt';
function Navbar({cartNum,token}) {
  
  function handleLogout(){ 
    console.log("USAO")
     
    var config = {
      method: 'post',
      url: '/logout',
      headers: { 
        'Authorization': 'Bearer '+window.sessionStorage.getItem("auth_token")
        
      },
    };
    console.log(window.sessionStorage.getItem("auth_token"))
    
    axios(config)
    .then(function (response) {
     
      console.log(response);
     
      window.sessionStorage.setItem('auth_token',null); 
      window.sessionStorage.setItem('auth_name',null); 
      

    })
    .catch(function (error) {
     
      
      console.log(error);
      

    }); 
  }
    
  return (
    <div>
            <ul className='listaNavbar'>
                <li className='elementListeNavbar'> <Link to="/">Pocetna</Link>  </li>

                {token == null ?   //ako nije ulogovan moze da se uloguje ili registruje
            <> 
            <li className='elementListeNavbar'> <Link to="/kontakt" className="navbar-items" >Kontakt  </Link>  </li>
            <li className='elementListeNavbar'> <Link to="/login"  className="navbar-items" >Uloguj se  </Link>  </li>
            <li className='elementListeNavbar'><Link to="/register"  className="navbar-items" >Registruj se  </Link>  </li> 
                
                
             
             
             </> 
             :  //ako jeste ulologovan treba da vidimo da li je admin ili nije admin
             <>  
             
                {window.sessionStorage.getItem("auth_name")=='Admin'  ? 
                //admin moze da vidi poruke i da dodaje nove proizvode
                    <> 
                        
                    </>
                : //ulogovani korisnici koji nisu admin mogu da vide korpu i da dodaju proizvode
                    <>


                      <li className='elementListeNavbar'><Link to="/telefoni">Telefoni</Link>  </li>
                      <li className='elementListeNavbar'><Link to="/uporedi">Uporedi</Link> </li>
                      <li className='elementListeNavbar'> <Link to="/korpa" >
                        <BsCartFill /> <p className="cart-num">{cartNum}</p>

                    </Link></li>
                    </>
                
                //svi korisnici mogu da se odloguju
                }
                    <li className='elementListeNavbar'> <a href="/" className="navbar-items" onClick={handleLogout}> Odjavi se </a> </li>
                 
                
             </>
              
        }



               


                
            </ul>




    </div>
  )
}

export default Navbar