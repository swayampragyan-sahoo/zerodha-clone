import React from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom mb-5'>
            <div className='text-center p-5'>
                <h1 style={{lineHeight:"2"}}>Technology</h1>
                <h3 className='text-muted fs-4' style={{lineHeight:"2"}}>Sleek, modern and intuitive trading platforms</h3>
                <p style={{lineHeight:"2"}}>Check out our <a href='/'style={{textDecoration:"None"}}>investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;