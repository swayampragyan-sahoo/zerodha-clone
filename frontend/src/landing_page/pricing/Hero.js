import React from 'react';

function Hero() {
    return ( 
        <div className='container px-5'>
            <div className='row text-center mt-5'>
                <h1 className='mb-4'>Pricing</h1>
                <p className='text-muted text-small mb-5'>Free equity investments and flat &#8377;20 traday and F&O trades</p>
                <hr></hr>
            </div>
            <div className='row fs-6 border-bottom text-center' style={{lineHeight:"1.9", justifyItems:"space-between"}}>
                <div className='col-4 p-4'>
                    <img src='media\images\pricingEquity.svg' />
                    <h1 className='mb-4 fs-3'>Free equity delivery</h1>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src='media\images\intradayTrades.svg' />
                    <h1 className='mb-4 fs-3'>Intraday and F&O trades</h1>
                    <p className='text-muted'>Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
                </div>
                <div className='col-4 p-4'>
                    <img src='media\images\pricingMF.svg' />
                    <h1 className='mb-4 fs-3'>Free direct MF</h1>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;