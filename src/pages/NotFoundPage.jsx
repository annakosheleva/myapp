import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div>
            Page not found... Please go back to <Link to={'/'}>Home</Link>
        </div>
    )
}

export default NotFoundPage;