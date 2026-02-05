//src/components/coomon/Card/Card.jsx 

import React from 'react';
import Proptypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ title, children, footer, className = '', hover = true }) => {
    return (
        <div className={`${styles.card} ${hover ? styles.hover : ''} ${className}`}>
            {title && <div className={styles.header}>{title}</div>}
            {children}
            {footer && <div className={styles.footer}>{footer}</div>}
        </div>
    );
};

Card.propTypes = {
    title: Proptypes.string,
    children: Proptypes.node.isRequired,
    footer: Proptypes.string,
    className: Proptypes.string,
    hover: Proptypes.bool,
};

export default Card;
