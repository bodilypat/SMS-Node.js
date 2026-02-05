//src/commponents/layout/Breadcrumb/Breadcrumb.jsx 

import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.less';

const Breadcrumb = ({ items = [] }) => {
    if (!items.length) return null;

    return (
        <nav className={styles.breadcrumb} aria-label="breadcrumb">
                <ol className={styles['breadcrumb-list']}>
                    {items.map((item, index) => (
                        <li key={index} className={styles['breadcrumb-item']}>
                            {item.path ? (
                                <Link to={item.path} className={styles['breadcrumb-link']}>
                                    {item.label}
                                </Link>
                            ) : (
                                <span className={styles['breadcrumb-text']}>{item.label}</span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
    );
}
Breadcrumb.propTypes = {
    items: Proptypes.arrayOf(
        Proptypes.shape({
            label: Proptypes.string.isRequired,
            path: Proptypes.string,
        })
    ),
};
export default Breadcrumb;
