import React from 'react';
import '../../style.css';

const DetailMap = (data) => {
    return <div className="col-12 bg-white up-right-right">
    {/* <p className="mt-4"> So hard to do this<br /> never again </p> */}
    <p className="mt-3">Populated place:<br /><text className="mt-1">{data.data.city}</text></p>
    <div className="text-center"><p>Google maps here.</p></div>
 </div>
}

export default DetailMap