import React from 'react';

function Brokerage() {
    return ( 
        <div className="container">
         <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
            <a href="" style={{ textDecoration: "none" }}><h3 className='fs-5'>Brokerage Calculator</h3></a>
            <ul style={{textAlign: "left", lineHeight: "2.5"}} className='text-muted'>
                <li>Calculate your brokerage and taxes for intraday, delivery, and F&O trades.</li>
                <li>Get an estimate of your earnings after brokerage and taxes.</li>
                <li>Understand how much you will pay in brokerage and taxes for your trades.</li>
            </ul>
        </div>
        <div className="col-4 p-4">
            <a href="" style={{ textDecoration: "none" }}><h3 className='fs-5'>List of charges</h3></a>
        </div>
      </div>
      </div>
     );
}

export default Brokerage;