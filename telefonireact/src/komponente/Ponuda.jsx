import React from 'react'
import TelefonKartica from './TelefonKartica'

function Ponuda({telefoni,dodajTelefon,onAdd,onRemove }) {
  return (
    <div className='sviTelefoni'>
           

      
           {telefoni.map((t)=>(<TelefonKartica key={t.id} product={t} dodajTelefon={dodajTelefon}  onAdd={onAdd} onRemove={onRemove} inCart={1}></TelefonKartica>))}
          
           

    </div>
  )
}

export default Ponuda