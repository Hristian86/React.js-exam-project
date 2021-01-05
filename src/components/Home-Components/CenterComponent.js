import React from 'react';
import MainHeader from './MainHeader';
import Cards from '../Cards/Cards';
import './style.css';

const CenterComponent = (props) => {
    console.log(props.props);
    
    return <div>
        <MainHeader />
        {props.props ? <Cards props={props.props} /> : <em>Loading...</em>}
    </div>
}

export default CenterComponent;