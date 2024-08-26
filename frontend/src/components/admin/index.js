import React from 'react';
import { SideBar } from "../sideBar.js";
import { Content } from "../content.js";
import { NavBar } from "../navBar.js";

export function AdminDashboard({ toggleTheme, isDarkMode }) {
    return (
        <div className={isDarkMode ? 'dark-mode' : ''}>
            <SideBar />
            <div className={`main-content p-0 bg-${isDarkMode ? 'dark' : 'light'}`}>
                <NavBar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
                <Content />
            </div>
        </div>
    );
}

export default AdminDashboard;
