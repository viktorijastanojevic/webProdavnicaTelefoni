import React from 'react'
 
 

function Uporedjivanje({telefoniUporedjivanje,brojTelefonaZaUporedjivanje}) {


  return (
    <div className='telefoniUporedjivanje' >
           
        {brojTelefonaZaUporedjivanje<2 ?
                <>


                <div className='nemoguceUporedjivanje'>
                    <h3><strong><p>Niste odabrali telefone za uporedjivanje</p></strong></h3> 
                    <p> Pogledajte nasu najnoviju ponudu, odaberite najvise tri proizvoda i uporedite njihove karakteristike</p>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3S8Kw9JCfStAkd0m-jhjIYvG3T9x0AOQiGw&usqp=CAU"   />
                </div>
                
                
                </>
        :
            <>

                {brojTelefonaZaUporedjivanje>4 ?
                         <>
                        
                         <div className='nemoguceUporedjivanje'>
                            <h3><strong> <p>Odabrali ste previse telefona</p></strong></h3> 
                            <p> Pogledajte nasu najnoviju ponudu, odaberite najvise tri proizvoda i uporedite njihove karakteristike</p>
                            <img src="data:image/png;base64,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"   />
                     </div>
                 
                      </>
                  :
                    <>
                     <table>
                     
                          <tbody>
                                <tr><th>Slika</th>{telefoniUporedjivanje.map((t)=><td className='celijaSlika'><img src={t.image} className="slika"/></td>)}</tr>
                                <tr><th>Model</th>{telefoniUporedjivanje.map((t)=><td>{t.name}</td>)}</tr>
                                <tr><th>Tezina</th>{telefoniUporedjivanje.map((t)=><td>{t.tezina}g</td>)}</tr>
                                <tr><th>Ekran</th>{telefoniUporedjivanje.map((t)=><td>{t.ekran} "</td>)}</tr>
                                <tr><th>RAM</th>{telefoniUporedjivanje.map((t)=><td>{t.memorija}GB</td>)}</tr>
                                <tr><th>Kamera</th>{telefoniUporedjivanje.map((t)=><td>{t.kamera}MP</td>)}</tr>
                                <tr><th>Cena</th>{telefoniUporedjivanje.map((t)=><td>{t.price}RSD</td>)}</tr>
                                <tr><th>Baterija</th>{telefoniUporedjivanje.map((t)=><td>{t.baterija}mAh</td>)}</tr>
                       
              
                              
              
                                    
                        
                          </tbody>
                    </table> 


                    </>

                }





     

            </>
        
        
        }



      




    </div>





  )
}

export default Uporedjivanje