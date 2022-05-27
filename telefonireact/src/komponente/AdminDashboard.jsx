import React from 'react'
import Chart from './Chart';
import "./AdminDashboard.css";

const AdminDashboard = () => {







  return (
    <main>

<div className="main__container">
      {/* <!-- MAIN TITLE STARTS HERE --> */}

      <div className="main__title">
        {/* <img src={hello} alt="hello" /> */}
        <div className="main__greeting">
          <h1>Zdravo </h1>
          <p>Dobrodosli na admin stranicu</p>
        </div>
      </div>

      {/* <!-- MAIN TITLE ENDS HERE --> */}

      {/* <!-- MAIN CARDS STARTS HERE --> */}
      <div className="main__cards">
        <div className="cardAdmin">
          <i
            className="fa fa-user-o fa-2x text-lightblue"
            aria-hidden="true"
          ></i>
          <div className="card_inner">
            <p className="text-primary-p">Broj korisnika</p>
            <span className="font-bold text-title">578</span>
          </div>
        </div>

        <div className="cardAdmin">
          <i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
          <div className="card_inner">
            <p className="text-primary-p">Broj proizvoda</p>
            <span className="font-bold text-title">2467</span>
          </div>
        </div>

        <div className="cardAdmin">
          <i
            className="fa fa-video-camera fa-2x text-yellow"
            aria-hidden="true"
          ></i>
          <div className="card_inner">
            <p className="text-primary-p">Number of Videos</p>
            <span className="font-bold text-title">340</span>
          </div>
        </div>

        <div className="cardAdmin">
          <i
            className="fa fa-thumbs-up fa-2x text-green"
            aria-hidden="true"
          ></i>
          <div className="card_inner">
            <p className="text-primary-p">Number of Likes</p>
            <span className="font-bold text-title">645</span>
          </div>
        </div>
      </div>
      {/* <!-- MAIN CARDS ENDS HERE --> */}

      {/* <!-- CHARTS STARTS HERE --> */}
      <div className="charts">
        <div className="charts__left">
          <div className="charts__left__title">
            <div>
              <h1>Daily Reports</h1>
              <p>Cupertino, California, USA</p>
            </div>
            <i className="fa fa-usd" aria-hidden="true"></i>
          </div>
          <Chart />
        </div>

        </div> 
      {/* <!-- CHARTS ENDS HERE --> */}
    </div>
  </main>
    

      
   
);
   
}

export default AdminDashboard