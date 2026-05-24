import React from 'react';

function Brokerage() {
    return (
        <div className='container px-5 mt-5'>
            <div className='row fs-6 border-bottom' style={{lineHeight:"1.9", justifyItems:"space-between"}}>
                <div className='col-8 p-3'>
                    <a href='/' style={{textDecoration:"None"}}><h3 className='mb-5 fs-4 text-center'>Brokerage Calculator</h3></a>
                    <p className='text-muted'>
                        <ul style={{lineHeight:"2.5", fontSize:"16px"}}>
                            <li>Call & Trade and RMS auto-square off:Additional charges of ₹50 + GST per order.
                            </li>
                            <li>Digital contract notes will be sent via e-mail.</li>
                            <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
                            </li>
                            <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
                            </li>
                            <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
                            </li>
                            <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
                            </li>
                        </ul>
                    </p>
                </div>
                <div className='col-4 p-4'>
                    <a href='/' style={{textDecoration:"None"}}><h3 className='mb-4 fs-4 text-center'>List of charges</h3></a>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;