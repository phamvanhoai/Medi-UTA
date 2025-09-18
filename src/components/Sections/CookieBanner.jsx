import './CookieBanner.css'
import React, { useState, useEffect } from 'react'

export default function CookieBanner() {
    const [show, setShow] = useState(true)

    // Nếu muốn nhớ lựa chọn: bật localStorage
    useEffect(() => {
        const ok = localStorage.getItem('cookie_accept_all')
        if (ok === '1') setShow(false)
    }, [])

    if (!show) return null

    return (
        <div id="cookie-banner">
            <div className="container cookie-container">
                <p>
                    Medi UTA uses cookies to help visitors to easily find information on this website. Medi UTA uses functional cookies to make this website work properly. We use analytical and tracking cookies to optimize your experience on this website, to share content via social media and to tailor advertisements to your preferences. In this context, third parties may also place cookies.
                    Read <a href="#" className="cookie-link">here</a> our cookie statement for more information.
                </p>
                <a
                    href="#"
                    id="cookie-accept"
                    className="cookie-accept"
                    onClick={(e) => { e.preventDefault(); localStorage.setItem('cookie_accept_all', '1'); setShow(false) }}
                >
                    Accept All Cookies
                </a>
            </div>
        </div>
    )
}
