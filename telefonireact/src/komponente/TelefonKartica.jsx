import React from 'react'
// import { DiGitCompare } from 'react-icons/di';
import { BsFillPhoneFill} from 'react-icons/bs';
import { MdMobileScreenShare,MdPriceChange } from 'react-icons/md';
import { FaWeightHanging } from 'react-icons/fa';


function TelefonKartica({product,dodajTelefon}) {
  return (
    <div className="card">
     
    <div className="card-header" >
         <img className='card-img-top'  src ={product.image}   /> 
    </div>
    <div className="card-body">
        
        
        <h4 className = "naslovKartice"> <BsFillPhoneFill></BsFillPhoneFill> {product.name}   </h4>
        <hr />
        <h6 className="opisProizvoda"> 
        
        <br /><br /><MdMobileScreenShare></MdMobileScreenShare> <b> OPIS:</b>   {product.description} 
        <br /><br /> <FaWeightHanging></FaWeightHanging><b>  Kategorija: </b> {product.category.naziv}
         
        <br /><br /><MdPriceChange></MdPriceChange><b>  Cena:</b> {product.price} RSD 
         </h6>
         <button className='btn' onClick={()=>dodajTelefon(product.id)} style={{background:"#adcaf7",marginLeft:"60%"}}> Uporedi  </button>
        
    </div> 
</div>
  )
}

export default TelefonKartica