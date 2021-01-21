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
                        <h4>Other Info</h4>
                        <ul className="list-unstyled">
                            <li>Blah Blah info</li>
                            <li>More Stuff</li>
                            <li>More More</li>
                        </ul>
                    </div>
                    { /* Column 3 */}
                    <div className="grid-item">
                        <h4>Last Column</h4>
                        <ul className="list-unstyled">
                            <li>Copyright</li>
                            <li>Trademark</li>
                            <li>All of that</li>
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
