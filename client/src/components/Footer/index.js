import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="main-footer">
            <div className="grid-container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="grid-item">
                        <h4>ManyGigs Inc</h4>
                        <ul className="list-unstyled">
                            <li>123-456-7891</li>
                            <li>Somewhere, USA</li>
                            <li>345 Street Ave</li>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="grid-item">
                        <h4>Community</h4>
                        <ul className="list-unstyled">
                            <li>Careers</li>
                            <li>Disaster Aid</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    { /* Column 3 */}
                    <div className="grid-item">
                        <h4>Legal</h4>
                        <ul className="list-unstyled">
                            <li>Copyright</li>
                            <li>Trademark</li>
                            <li>Patent Pending</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} ManyGigs INC | All Rights Reserved | Terms of Service
                    </p>
                </div>
            </div>
        </div>
    )}

export default Footer;
