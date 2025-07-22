import React from 'react';

function Hero
() {
    return ( 
        <div className='container p-5 mb-5'>
          <div className='row text-center'>
              <div className='col-4'>
                <img src='media/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks,derivatives,mutual funds and more</p>
                <button className='p-3 btn btn-primary fs-5 mb-5' style = {{width:"45%",margin:"0 auto"}}>Signup Now</button>
              </div>
              <div className='col-8'>

              </div>

          </div>
        </div>
     );
}

export default Hero;