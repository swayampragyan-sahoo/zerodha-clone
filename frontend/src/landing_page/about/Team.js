import React from 'react';

function Team() {
    return ( 
        <div className='container px-5'>
            <div className='row text-center p-5'>
                <div className='col-2'></div>
                <div className='col-7 m-5'>
                    <h1 className='border-top p-5' style={{color:"#424242",lineHeight:"1.5"}}>People</h1>
                </div>
                <div className='col-2'></div>
            </div>
            <div className='row p-5 fs-6' style={{color:"#424242", lineHeight:"1.9"}}>
                <div className='col-1'></div>
                <div className='col-5 text-center'>
                    <img src='media\images\nithinKamath.jpg' style={{borderRadius:"100%", width:"50%"}} />
                    <h4 className='mt-5'>Nithin Kamath</h4>
                    <h6>Founder, CEO</h6>
                </div>
                <div className='col-5'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a style={{textDecoration:"None"}} href="">Homepage</a> / <a style={{textDecoration:"None"}} href="">TradingQnA</a> /{" "}
                    <a style={{textDecoration:"None"}} href="">Twitter</a>
                    </p>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
     );
}

export default Team;