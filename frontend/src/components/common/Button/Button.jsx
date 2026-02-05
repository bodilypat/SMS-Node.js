//src/components/common/Button/Button.jsx 

import React from 'react';
import Proptypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    type = 'button',
    disabled = false,
    loading = false,
    onClick,
    className = '',
    ...rest 
}) => {
    return (
        <button
            type={type}
            className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
            disabled={disabled || loading ? styles.disabled : ''}
            onClick={onClick}
            {...rest}
        >
            {loading ? <span className={styles.loader}>Loading...</span> : children}
        </button>
        );
};

Button.propTypes = {
    children: Proptypes.node.isRequired,
    variant: Proptypes.oneOf(['primary', 'secondary', 'danger','outline']),
    size: Proptypes.oneOf(['small', 'medium', 'large']),
    type: Proptypes.oneOf(['button', 'submit', 'reset']),
    disabled: Proptypes.bool,
    loading: Proptypes.bool,
    onClick: Proptypes.func,
    className: Proptypes.string,
};




