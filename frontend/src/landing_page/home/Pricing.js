import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row mb-4'>
                <div className='col-4 p-3 mt-4'>
                    <h1 className='mb-5 fs-2'>Unbeatable pricing</h1>
                    <p className='mb-3 text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a style={{textDecoration: "none"}} href='/'>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 p-3 mt-4'>
                    <div className='row'>
                        <div className='col border p-4'>
                            <h1 style={{textAlign: "center"}} className='mb-4'>&#8377;0</h1>
                            <p style={{textAlign: "center"}}>Free equity delivery and<br/> direct mutual funds</p>
                        </div>
                        <div className='col border p-4'>
                            <h1 style={{textAlign: "center"}} className='mb-4'>&#8377;20</h1>
                            <p style={{textAlign: "center"}}>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;