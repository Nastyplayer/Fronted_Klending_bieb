import React from 'react';
import "./Button.css";
function Button({id, type, className, onClick, disabled, children}) {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
            disabled={disabled}
            id ={id}
        >
            {children}
        </button>

    );
}

export default Button;