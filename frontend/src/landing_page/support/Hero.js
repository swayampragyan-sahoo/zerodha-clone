import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id="supportHero" style={{backgroundColor:"rgb(56,126,209)", color:"white"}}>
            <div className='p-5' id="supportWrapper">
                <h4>Support Portal</h4>
                <a href='/' style={{color:"white"}}>Track tickets</a>
            </div>
            <div className='row px-5 mb-5 mt-3' id="supportContent">
                <div className='px-5 col-6 mb-5'>
                    <p className='fs-4'>Search for an answer or browse help topics to create a ticket</p>
                    <input placeholder='Eg: how do i activate F&O, why is my order getting rejected..' style={{padding:"20px", width:"100%", borderRadius:"6px", border:"none",marginBottom:"20px"}}/>
                    <a href='/'style={{color:"white"}}>Track account opening</a>
                    <a href='/'style={{color:"white",paddingLeft:"20px"}}>Track segment activation</a>
                    <a href='/'style={{color:"white",paddingLeft:"20px"}}>Intraday margins</a>
                    <a href='/'style={{color:"white",paddingLeft:"20px"}}>Kite user manual</a>
                </div>
                <div className='col-1'></div>
                <div className='col-5 px-5 mb-5'>
                    <p className='fs-4'>Featured</p>
                    <ol>
                        <li className='mb-3'><a href='/' style={{color:"white"}}>Current Takeovers and Delisting - January 2026</a></li>
                        <li><a href='/' style={{color:"white"}}>Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;