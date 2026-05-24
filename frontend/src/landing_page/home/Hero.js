import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-10'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds and more</p>
                <button style={{width: "15%", margin: "0 auto"}} className="btn btn-primary p-2 fs-5">Signup now</button>
            </div>
        </div>
     );
}

export default Hero;