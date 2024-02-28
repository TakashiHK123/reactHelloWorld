import React from 'react';

const Button2 = ({text = "Don't touch me", onClick}) => {
    return (
        <button onClick={onClick}>{text}</button>
    );
};

export default Button2;