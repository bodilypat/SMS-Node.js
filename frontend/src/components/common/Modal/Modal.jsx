//src/components/common/Modal.jsx 

import React from 'react';
import Proptypes from 'prop-types';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Modal = ({ 
    isOpen,
    title,
    children,
    onClose,
    footer,
    size = 'medium'
    closeOnOverlayClick = true,
 }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } 
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className={styles.overlay} onClick={closeOnOverlayClick ? onClose : undefined}>
            <div 
                className={`${styles.modal} ${styles[size]}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                {(title || onClose) && (
                    <div className={styles.header}>
                        {title && <h2 className={styles.title}>{title}</h2>}
                        {onClose && (
                            <button className={styles.closeButton} onClick={onClose}>
                                &times;
                            </button>
                        )}
                    </div>
                )}

                {/* Body */}
                <div className={styles.body}>{children}</div>

                {/* Footer */}
                {footer && <div className={styles.footer}>{footer}</div>}
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

Modal.propTypes = {
    isOpen: Proptypes.bool.isRequired,
    title: Proptypes.string,
    children: Proptypes.node.isRequired,
    onClose: Proptypes.func,
    footer: Proptypes.node,
    size: Proptypes.oneOf(['small', 'medium', 'large']),
    closeOnOverlayClick: Proptypes.bool,
};

export default Modal;
