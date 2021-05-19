import React from 'react'
import { Link } from 'react-router-dom'
import "./ErrorPage.css";

export default function Error() {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>We are sorry, Page not found!</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <Link to="/">Back to Homepage</Link>                
            </div>
        </div>
    )
}