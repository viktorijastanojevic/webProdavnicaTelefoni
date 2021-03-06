import React from 'react'; 
import {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
   
  
  
const IzmeniProizvod = () => {
 

    const [productData,setProductData]=useState({
        name:"",
        description:'',
        price:10000,
        amount:0, 
        image:'',
        uporedi:0,
        amount:0, 
        tezina:'200',
        ekran:'5.8',
        baterija:5000, 
        kamera:13, 
        category:4,
        id:0



    });
    function handleInput(e){  
        let newProductData = productData;  
        
        newProductData[e.target.name]=e.target.value;
        if(productData.id!==0){
            axios.get("http://127.0.0.1:8000/api/proizvod/"+productData.id,{headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`} }).then((res)=>{
                console.log(res.data.data);
                setProductData(res.data.data);
            
                })  .catch(function (error) {
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
        }
        setProductData(newProductData);
       
    }
    let navigate = useNavigate();
 

    function obrisi(e){

        e.preventDefault();   
    
        axios.delete("http://127.0.0.1:8000/api/proizvod/" +  productData.id, 
        {headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`} }
        )
        alert("USPESNO")

    }
    function azuriraj(e){
        e.preventDefault();   
        axios
            .put("http://127.0.0.1:8000/api/proizvod", productData,{headers:{'Authorization': `Bearer ${ window.sessionStorage.getItem('auth_token')}`} } )
            .then((res)=>{  
                console.log(res.data);
                 alert("USPESNO")
                 navigate("/admin");
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
    }

  return (
    <div className="limiter">
    <div className="container-login100">
        <div className="wrap-login100">
            <div className="login100-form-title" >
                <span className="login100-form-title-1">
                Izmeni ili obrisi proizvod
                </span>
            </div>

            <form className="login100-form validate-form" method="post"  >
                    <div className="wrap-input100 m-b-18"  >
                        <span className="label-input100">ID</span>
                        <input className="input100" type="text" name="id" id="id" placeholder="Enter id" defaultValue={productData.id}  onInput={handleInput}/>
                        <span className="focus-input100"></span>
                    </div>
                    <div className="wrap-input100 m-b-18" data-validate = "Name is required">
                        <span className="label-input100">Name</span>
                        <input className="input100" type="text" name="name" id="name" placeholder="Enter name"  defaultValue={productData.name}  onInput={handleInput}/>
                        <span className="focus-input100"></span>
                    </div>
                    
                 
                 
                    <div className="wrap-input100  m-b-18" data-validate = "Description is required">
                        <span className="label-input100">Description</span>
                        <input className="input100" type="text" name="description" id="description" placeholder="Enter description"  defaultValue={productData.description} onInput={handleInput}/>
                        <span className="focus-input100"></span>
                    </div>
                     

                    <div className="wrap-input100  m-b-18" data-validate = "Price is required">
                        <span className="label-input100">Price</span>
                        <input className="input100" type="text" name="price" id="price" placeholder="Enter price" defaultValue={productData.price} onInput={handleInput}/>
                        <span className="focus-input100"></span>
                    </div>
                     

                    <div className="wrap-input100  m-b-18" data-validate = "Image is required">
                        <span className="label-input100">Image</span>
                        <input className="input100" type="text" name="image" id="image" placeholder="Enter image url"  defaultValue={productData.image}   onInput={handleInput}/>
                        <span className="focus-input100"></span>
                    </div>
                   

                    <div className="wrap-input100  m-b-18" data-validate = "Obavezno polje">
                        <span className="label-input100">Tezina</span>
                        <input className="input100" type="text" name="tezina" id="tezina" placeholder="Unesi tezinu"  defaultValue={productData.tezina} onInput={handleInput}/>
                        <span className="focus-input100"></span>
                    </div>
                     

                    <div className="wrap-input100  m-b-18" data-validate = "Obavezno polje">
                        <span className="label-input100">Kamera</span>
                        <input className="input100" type="text" name="kamera" id="kamera" placeholder="Unesi kameru" defaultValue={productData.kamera} onInput={handleInput}/>
                        <span className="focus-input100"></span>
                    </div>
                     
 
                    <div>
                     
                         
                        <select  className="input--style-3" name="category" id="category" defaultValue={productData.category.id} onInput={handleInput}>
                                        
                                        <option  className="input--style-3" value="1" id={1} >zicni telefoni</option>
                                        <option className="input--style-3" value="2" id={2} > standardni telefoni </option> 
                                        <option className="input--style-3" value="3" id={3} >bezicni telefoni </option> 
    
                                        <option className="input--style-3" value="4" id={4} > smart telefoni </option> 
    
                                        <option className="input--style-3" value="5" id={5} >ostali telefoni </option> 
    
                        </select>
                    </div>
                    <br /><br /><br />
                    
                <div className="container-login100-form-btn">
                 
                    <button className="login100-form-btn" id="izmeni" name="izmeni" onClick={azuriraj}> 	Izmeni 	</button>
                    <button className="login100-form-btn" id="obrisi" name="obrisi" onClick={obrisi}> 	Obrisi 	</button>

                </div>
            </form>
        </div>
    </div>



 
                            
          
                          
                         
           
    </div>
  )
}

export default IzmeniProizvod