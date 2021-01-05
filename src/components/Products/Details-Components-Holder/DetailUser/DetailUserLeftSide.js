import React from 'react';
import '../../style.css';

const DetailUserLeftSide = (data) => {
    console.log(data.data.photoURL);
    return <div className="col-5 bg-white up-right-left text-center">
    <p className="mt-4">User:</p>
    <p><img src={data.data.photoURL} className="user-image" /></p>
    <p>Phone number</p>
    <p>{data.data.phone}</p>
    </div>
}

export default DetailUserLeftSide