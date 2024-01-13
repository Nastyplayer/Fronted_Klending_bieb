import React from 'react';

function Button({type, className, onClick, disabled, children}) {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>

    );
}

export default Button;