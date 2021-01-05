import React from 'react';
import '../../style.css';

const DetailUserRightSide = (data) => {
    return <div className="col-7 up-right-left bg-white text-center">
    <p className="mt-4">{data.data.name}</p>
    <p >{data.data.address}</p>
    <br />
    <p className="mt-4">Message goes here</p>
    <p>
    <button className="btn btn-success message-button" >Message</button>
    </p>
    </div>
}

export default DetailUserRightSide