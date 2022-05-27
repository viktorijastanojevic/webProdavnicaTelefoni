import React, { useState } from 'react'
import TelefonKartica from './TelefonKartica'

function Ponuda({telefoni,dodajTelefon,onAdd,onRemove }) {
  const [sort, setSort] = useState(true);
  function sortAsc(){
    
    setSort(true);
  }
  function sortDesc(){
    
    setSort(false);
  }
  return (
    <div>
        <button className="sortbtn btn" onClick={sortAsc}>Sortiraj rastuće</button>
        <button className="sortbtn btn" onClick={sortDesc}>Sortiraj opadajuće</button>
        <div className='sviTelefoni'>
              
            {sort===true?
              <>
                {telefoni
                     .sort((a, b) => a.price < b.price ? -1 : 1)
                    .map((t)=>(<TelefonKartica key={t.id} product={t} dodajTelefon={dodajTelefon}  onAdd={onAdd} onRemove={onRemove} inCart={1}></TelefonKartica>))}
              </>
              :
              <>
                {telefoni
                     .sort((a, b) => a.price > b.price ? -1 : 1)
                    .map((t)=>(<TelefonKartica key={t.id} product={t} dodajTelefon={dodajTelefon}  onAdd={onAdd} onRemove={onRemove} inCart={1}></TelefonKartica>))}
              </>
            }
          
              
              
              

        </div>
    </div>
  )
}

export default Ponuda