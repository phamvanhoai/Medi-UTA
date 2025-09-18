import './Footer.css'
import React from 'react'

export default function Footer() {
    return (
        <footer id="footer" className="bg-light">
            <div className="container footer-container">
                <div className="footer-info">
                    <a href="#" className="logo">
                        <img src="/assets/images/Logo-Medi-UTA.png" alt="Medi UTA Logo" />
                    </a>
                    <p>We help companies educate physicians and improve patient outcomes.</p>
                    <div className="address">
                        <strong>Medi UTA</strong>
                        <p>36 Nguyen Huy Luong, Ward 14, Binh Thanh District, Ho Chi Minh City, Vietnam</p>
                    </div>
                </div>

                <nav className="footer-nav">
                    <div className="footer-nav-col">
                        <h4>Products</h4>
                        <ul>
                            <li><a href="#">PubExplainer</a></li>
                            <li><a href="#">MedExplainer</a></li>
                        </ul>
                    </div>
                    <div className="footer-nav-col">
                        <h4>Knowledge</h4>
                        <ul>
                            <li><a href="#">Case Studies</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-nav-col">
                        <h4>About</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </footer>
    )
}
