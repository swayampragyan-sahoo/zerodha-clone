import React from 'react';

function Footer() {
    return (
        <footer className='bg-light'> 
            <div className='container mt-5 border-top'>
                <div className='row mt-5'>
                    <div className='col mx-3'>
                        <img src="media/images/logo.svg" style={{width: "50%"}} className='mb-4'/>
                        <p className='mb-0'>&copy; 2010 - 2024, Not Zerodha Broking Ltd.</p>
                        <p className='mb-4 text-small'>All rights reserved.</p>
                        <a href='/'><i className="fa-brands fa-twitter fa-lg px-3" style={{color: "grey"}}></i></a>
                        <a href='/'><i className="fa-brands fa-square-facebook fa-lg px-3" style={{color: "grey"}}></i></a>
                        <a href='/'><i class="fa-brands fa-instagram fa-lg px-3" style={{color: "grey"}}></i></a>
                        <a href='/'><i class="fa-brands fa-linkedin-in fa-lg px-3" style={{color: "grey"}}></i></a>
                        <a href='/'><i class="fa-brands fa-telegram fa-lg px-3" style={{color: "grey"}}></i></a>
                    </div>
                    <div className='col'>
                        <h1 className='fs-5 mb-3'>Company</h1>
                        <a href='/' style={{color: "black", textDecoration: "none"}} className='text-muted'><p>About</p></a>
                        <a href='/' style={{color: "black", textDecoration: "none"}} className='text-muted'><p>Products</p></a>
                        <a href='/' style={{color: "black", textDecoration: "none"}} className='text-muted'><p>Pricing</p></a>
                        <a href='/' style={{color: "black", textDecoration: "none"}} className='text-muted'><p>Referral programme</p></a>
                        <a href='/' style={{color: "black", textDecoration: "none"}} className='text-muted'><p>Careers</p></a>
                        <a href='/' style={{color: "black", textDecoration: "none"}} className='text-muted'><p>Zerodha.tech</p></a>
                        <a href='/' style={{color: "black", textDecoration: "none"}} className='text-muted'><p>Press & media</p></a>
                        <a href='/' style={{color: "black", textDecoration: "none"}} className='text-muted'><p>Zerodha cares (CSR)</p></a>
                    </div>
                    <div className='col'>
                        <h1 className='fs-5 mb-3'>Support</h1>
                        <a href='/' style={{color: "black", textDecoration: "none"}} className='text-muted'><p>Contact</p></a>
                        <a href='/' style={{color: "black", textDecoration: "none"}} className='text-muted'><p>Support portal</p></a>
                        <a href='/' style={{color: "black", textDecoration: "none"}} className='text-muted'><p>Z-Connect blog</p></a>
                        <a href='/' style={{color: "black", textDecoration: "none"}} className='text-muted'><p>List of charges</p></a>
                        <a href='/' style={{color: "black", textDecoration: "none"}} className='text-muted'><p>Downloads & resources</p></a>
                    </div>
                    <div className='col'>
                        <h1 className='fs-5 mb-3'>Account</h1>
                        <a href='/' style={{color: "black", textDecoration: "none"}} className='text-muted'><p>Open an account</p></a>
                        <a href='/' style={{color: "black", textDecoration: "none"}} className='text-muted'><p>Fund Transfer</p></a>
                        <a href='/' style={{color: "black", textDecoration: "none"}} className='text-muted'><p>60 day challenge</p></a>
                    </div>
                </div>
                <div className='row fs-6'>
                    <p>Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
                    INZ000031633 CDSL: Depository services through Zerodha Securities
                    Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
                    through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
                    no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
                    #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
                    J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
                    complaints pertaining to securities broking please write to
                    complaints@zerodha.com, for DP related to dp@zerodha.com. Please
                    ensure you carefully read the Risk Disclosure Document as prescribed
                    by SEBI | ICF</p>

                    <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES
                    portal. Mandatory details for filing complaints on SCORES: Name,
                    PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
                    Communication, Speedy redressal of the grievances</p>

                    <p>Investments in securities market are subject to market risks; read
                    all the related documents carefully before investing.</p>

                    <p>"Prevent unauthorised transactions in your account. Update your
                    mobile numbers/email IDs with your stock brokers. Receive
                    information of your transactions directly from Exchange on your
                    mobile/email at the end of the day. Issued in the interest of
                    investors. KYC is one time exercise while dealing in securities
                    markets - once KYC is done through a SEBI registered intermediary
                    (broker, DP, Mutual Fund etc.), you need not undergo the same
                    process again when you approach another intermediary." Dear
                    Investor, if you are subscribing to an IPO, there is no need to
                    issue a cheque. Please write the Bank account number and sign the
                    IPO application form to authorize your bank to make payment in case
                    of allotment. In case of non allotment the funds will remain in your
                    bank account. As a business we don't give stock tips, and have not
                    authorized anyone to trade on behalf of others. If you find anyone
                    claiming to be part of Zerodha and offering such services, please
                    create a ticket here.</p>
                </div>
                <div className='row mb-4'>
                    <div className='col-3'></div>
                    <div className='col'>
                        <a href='/' style={{color: "black", textDecoration: "none"}} className='mx-3'>BSE</a>
                        <a href='/' style={{color: "black", textDecoration: "none"}} className='mx-3'>MCX</a>
                        <a href='/' style={{color: "black", textDecoration: "none"}} className='mx-3'>Terms & conditions</a>
                        <a href='/' style={{color: "black", textDecoration: "none"}} className='mx-3'>Policies & procedures</a>
                        <a href='/' style={{color: "black", textDecoration: "none"}} className='mx-3'>Privacy policy</a>
                        <a href='/' style={{color: "black", textDecoration: "none"}} className='mx-3'>Disclosure</a>
                    </div>
                    <div className='col-2'></div>
                </div>
            </div>
        </footer>
     );
}

export default Footer;