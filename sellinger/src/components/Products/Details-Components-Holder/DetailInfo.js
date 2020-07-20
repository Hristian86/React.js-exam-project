import React from 'react';
import '../style.css';

const DetailInfo = (data) => {
    return <div className="row mt-4">
        <div className="col-8 container-up-left bg-white">
            <div className="image-poster">
                <p><h2>{data.data.subject}</h2></p>
                <p><h1>{data.data.price} $</h1></p>
                <br />
                <br />
                <br />
                <p>Description</p>
                <p>{data.data.content}</p>

            </div>
        </div>
        <div className="col-3 container-up-right">
           {/* second half goes here from className row*/}
        </div>
    </div>
}
export default DetailInfo