import React from 'react';
import './style.css';

const ImageComponent = (props) => {


    return <div>
        <img className="image-poster" src={props.image} alt="image" />
    </div>
}

export default ImageComponent