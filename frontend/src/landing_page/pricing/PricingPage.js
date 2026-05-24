import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import OpenAccount from '../OpenAccount';

function PricingPage() {
    return ( 
        <>
            <Hero />
            <OpenAccount />
            <hr></hr>
            <Brokerage />
        </>
     );
}

export default PricingPage;