import React from 'react';
//import './style.css';
import style from './style.module.css';

const NotFound = () => {
    
    return <div className={style.notFoundPage}>
        
        <h2 className={style.headerNotFound}>
            the page you are looking for is not found
        </h2>

    </div>
}

export default NotFound;