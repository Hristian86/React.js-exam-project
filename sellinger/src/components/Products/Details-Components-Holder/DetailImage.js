import React from 'react';
import '../style.css';

const DetailImage = (data) => {
    return <div className="col-8 container-up-left bg-white">
    <img src={data.data.image} className="image-poster" />
    </div>
}

export default DetailImage