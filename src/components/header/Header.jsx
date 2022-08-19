import React from 'react';
import './header.css';
import {
    UilApps,
    UilBriefcaseAlt,
    UilEstate,
    UilFile,
    UilMessage,
    UilTimes,
    UilUser
} from '@iconscout/react-unicons'

const Header = () => {
    return (
        <header className="header">
            <nav className=" nav container">
                <a href="index.html" className="nav-logo">Edier Sanchez Sanchez</a>
                <div className="nav-menu">
                    <ul className="nav-list grid">
                        <li className="nav-item">
                            <a href={"#home"} className="nav-link active-link"><UilEstate />
                                <div className="nav-icon">Home</div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href={"#about"} className="nav-link"><UilUser />
                                <p className="nav-icon">About</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href={"#skills"} className="nav-link"><UilFile />
                                <p className="nav-icon">Skills</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href={"#services"} className="nav-link"><UilBriefcaseAlt />
                                <p className="nav-icon">Services</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href={"#contact"} className="nav-link"><UilMessage />
                                <p className="nav-icon">Contact</p>
                            </a>
                        </li>
                    </ul>
                    <i className="nav-close"><UilTimes /></i>
                </div>
                <div className="nav-toggle">
                    <i className="nav-open"><UilApps /></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;