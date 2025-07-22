import React from 'react';

function Universe() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our partner platforms.
        </p>
      </div>

      <div className="row text-center justify-content-center">

        <div className="col-md-4 col-sm-6 mb-5">
          <img src="media/smallcaseLogo.png" alt="Smallcase" style={{ height: '50px', objectFit: 'contain' }} />
          <p className="text-muted mt-3">Thematic investing platform</p>
        </div>

        <div className="col-md-4 col-sm-6 mb-5">
          <img src="media/streakLogo.png" alt="Streak" style={{ height: '50px', objectFit: 'contain' }} />
          <p className="text-muted mt-3">Systematic trading strategies</p>
        </div>

        <div className="col-md-4 col-sm-6 mb-5">
          <img src="media/sensibullLogo.svg" alt="Sensibull" style={{ height: '50px', objectFit: 'contain' }} />
          <p className="text-muted mt-3">Options trading analysis</p>
        </div>

        <div className="col-md-4 col-sm-6 mb-5">
          <img src="media/zerodhaFundhouse.png" alt="Zerodha Fund House" style={{ height: '50px', objectFit: 'contain' }} />
          <p className="text-muted mt-3">Index fund investments</p>
        </div>

        <div className="col-md-4 col-sm-6 mb-5">
          <img src="media/goldenpiLogo.png" alt="Tijori" style={{ height: '50px', objectFit: 'contain' }} />
          <p className="text-muted mt-3">Research and insights</p>
        </div>

        <div className="col-md-4 col-sm-6 mb-5">
          <img src="media/dittoLogo.png" alt="Ditto" style={{ height: '50px', objectFit: 'contain' }} />
          <p className="text-muted mt-3">Insurance advice without spam</p>
        </div>
<button className="btn btn-primary mt-4" style={{ width: '200px' }}> 
           Sign up Now
            </button>
      </div>
    </div>
  );
}

export default Universe;
