import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container p-5 mb-10'>
            <div className='row text'>
                <h1 className='mt-5 mb-4'>404 Not Found</h1>
                <p className='mb-4 text-muted'>Sorry, the page you are looking for does not exist.</p>
                <Link to="/"><button style={{width: "15%", margin: "0 auto"}} className="btn btn-primary p-2 fs-5">Go Home</button></Link>
            </div>
        </div>
     );
}

export default NotFound;