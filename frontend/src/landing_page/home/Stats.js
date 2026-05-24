import React from 'react';

function Stats() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-3 mt-4'>
                    <h1 className='mb-5 fs-2'>Trust with Confidence</h1>
                    <h3 className='fs-4'>Customer-first always</h3>
                    <p className='mb-4 text-muted'>That's why 1.3+ crore customers trust Zerodha with &#8377;3.5+ lakh crores worth equity investments.</p>
                    <h3>No spam or gimmicks</h3>
                    <p className='mb-4 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h3>The Zerodha universe</h3>
                    <p className='mb-4 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3>Do better with money</h3>
                    <p className='mb-4 text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions but help you do better with your money.</p>
                </div>
                <div className='col-6 px-5'>
                    <img src='media/images/ecosystem.png' style={{width: "90%"}}/>
                    <div>
                        <a className='p-4' style={{textDecoration: "none"}} href='/'>Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                        <a className='p-4' style={{textDecoration: "none"}} href='/'>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;