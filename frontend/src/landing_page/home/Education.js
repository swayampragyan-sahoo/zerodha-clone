import React from 'react';

function Education() {
    return ( 
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-4 p-3 mt-4'>
                    <img src='media/images/education.svg' style={{width: '99%'}}/>
                </div>
                <div className='col-2'></div>
                <div className='col-6 p-3 mt-4'>
                    <div className='row'>
                        <div className='row'>
                            <h1 className='mb-5 fs-2'>Free and open market education</h1>
                            <p>Varsity the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                            <a href='/' style={{textDecoration: "none"}} className='mb-5'>Versity <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                        <div className='col'>
                            <p>TradingQ&A, the most active trading and investment community in India for all your market related queries</p>
                            <a href='/' style={{textDecoration: "none"}} className='mb-5'>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Education;