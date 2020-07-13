import React from 'react';

const Details = (props) => {
    //console.log(props)
    return <div className="details-page bg-warning">
        <div className="right-corner">

            <h5 className="mt-1">Phone number:<br />{props.props.phone}<br /><br />Email:<br />{props.props.email}</h5>
        </div>
        <h3 className="mt-2" >Content:</h3>
        <h3 className="ml-4 content-place">{props.props.content}</h3>

    </div>
}

export default Details