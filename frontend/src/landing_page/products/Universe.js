import React from 'react';

function Universe() {
    return ( 
        <div className='container text-center mt-5'>
            <div className='row mb-5'>
                <h1 className='m-2 p-2'>The Zerodha Universe</h1>
                <p>Extend your trading and investment even further with our partner platforms</p>
            </div>
            <div className='row' style={{justifyContent:"Center"}}>
                <div className='col-4'>
                    <img src='media\images\smallcaseLogo.png' className='mb-4'/>
                    <p className='mb-4 text-small text-muted'>Thematic investment platform</p>
                    <img src='media\images\zerodhaFundHouse.png' style={{width:"60%"}} className='mt-4'/>
                    <p className='mt-4 text-small text-muted'>Asset management</p>
                </div>
                <div className='col-4'>
                    <img src='media\images\streakLogo.png' className='mb-4' style={{width:"40%"}}/>
                    <p className='mb-4 text-small text-muted'>Algo & strategy platform</p>
                    <img src='media\images\goldenPiLogo.png' style={{width:"60%"}} className='mt-4'/>
                    <p className='mt-4 text-small text-muted'>Bonds trading platform</p>
                </div>
                <div className='col-4'>
                    <img src='media\images\sensibullLogo.svg' style={{width:"70%"}} className='mb-4 mt-2'/>
                    <p className='mb-4 text-small text-muted'>Options trading platform</p>
                    <img src='media\images\dittoLogo.png' style={{width:"35%"}} className='mt-3'/>
                    <p className='mt-5 text-small text-muted'>Insurance</p>
                </div>
            </div>
            <div className='row m-5'>
                <button style={{width: "15%", margin: "0 auto"}} className="btn btn-primary p-2 fs-5">Signup now</button>

            </div>
        </div>
     );
}

export default Universe;