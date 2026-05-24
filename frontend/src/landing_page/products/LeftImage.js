import React from 'react';

function LeftImage({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container mt-5 border-bottom'>
            <div className='row'>
                <div className='col-5 p-5'>
                    <img src={imageURL}/>
                </div>
                <div className='col-2'></div>
                <div className='col-5 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className='mb-4 mt-4'>
                        <a href={tryDemo} style={{textDecoration:"None"}}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                        <a className='mx-4' href={learnMore} style={{textDecoration:"None"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div>
                        <a href={googlePlay}><img src="media\images\googlePlayBadge.svg"/></a>
                        <a className='mx-3' href={appStore}><img src="media\images\appstoreBadge.svg"/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftImage;