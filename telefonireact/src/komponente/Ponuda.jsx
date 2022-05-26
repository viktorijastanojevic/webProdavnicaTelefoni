import React from 'react'
import TelefonKartica from './TelefonKartica'

function Ponuda({telefoni,dodajTelefon}) {
  return (
    <div className='sviTelefoni'>
           

      
           {telefoni.map((t)=>(<TelefonKartica key={t.id} product={t} dodajTelefon={dodajTelefon}></TelefonKartica>))}
          
           

    </div>
  )
}

export default Ponuda