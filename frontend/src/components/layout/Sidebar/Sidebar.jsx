//src/components/layout/Sidebar/Sidebar.jsx 

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Sidebar = ({ links = [], brand = 'InventoryMS', user = null }) => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();

    const toggleCollapse = () => setCollapsed(!collapsed);

    return (
        <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
            {/* Brand */}
            <div className={styles.brand}>
                <span className={styles.brandIcon}>{brand.charAt(0)}</span>
                {!collapsed && <span className={styles.brandText}>{brand}</span>}
                <button className={styles.collapseBtn} onClick={toggleCollapse}>
                    {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
                </button>
            </div>

            {/* User Info */}
            {user && !collapsed && (
                <div className={styles.userInfo}>
                    <span className={styles.userName}>{user.name}</span>
                    <span className={styles.userRole}>{user.role}</span>
                </div>
            )}

            {/* Navigation Links */}
            <nav className={styles.nav}>
                {links.map(link => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
                    >
                        <span className={styles.linkIcon}>{link.icon}</span>
                        {!collapsed && <span className={styles.linkText}>{link.name}</span>}
                    </Link>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
