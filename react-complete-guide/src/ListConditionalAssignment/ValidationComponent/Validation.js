import React from 'react';
import './Validation.css';


const validation = (props) => {
    return (
        props.length < 5 ?
        <p className="validation-text invalid-text">Text is too short</p> :
        <p className="validation-text valid-text">Text is long enough</p>
    )
}

export default validation;