import React from 'react';

const Posts = (props) => {

    return <div  className="card text-center">
        <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Active</a>
                </li>

            </ul>
        </div>
        <div className="card-body">
            <h5 className="card-title">{props.props.subject}</h5>

            <p className="card-text">{props.props.content}</p>

            <a href="#" className="btn btn-primary">Go somewhere</a>

        </div>
    </div>
}

export default Posts