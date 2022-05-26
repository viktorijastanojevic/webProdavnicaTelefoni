import React    from 'react';
import {Link} from "react-router-dom";
 import './NotFound.css';
function NotFound404( ) {
    return (
      <div>
       <div className='notfound'>
       <h1>404</h1>
       <h3>Not Found</h3>
       <img className='smajli' src='https://www.webtekno.com/images/editor/default/0003/49/d69c8ccfa20fc2ef66b4655df8631cd433a037a3.jpeg'></img>
       <h5>Stranica koju tražite ne postoji ili je uklonjena.</h5>
       <Link to="/"><span>Vrati se nazad na početnu stranu</span></Link>
      </div>
    </div>
      );
}
export default NotFound404;