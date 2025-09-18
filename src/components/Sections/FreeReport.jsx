import './FreeReport.css'
import React from 'react'

export default function FreeReport() {
    return (
        <section id="free-report" className="bg-light">
            <div className="container free-report-container">
                <div className="free-report-content">
                    <div className="section-subtitle-wrapper">
                        <h3 className="section-subtitle">FREE REPORT</h3>
                        <div className="section-subtitle-line"></div>
                    </div>
                    <h2 className="heading-xl">Embracing Remote &amp; Digital: Optimizing Physician Engagement</h2>
                    <p className="text-lg">Learn more about how to adapt to a new pharma landscape where added-value, high-quality remote and digital physician engagement is crucial to success.</p>
                    <p className="text-lg">Inside, find out more on:</p>
                    <ul className="feature-list">
                        <li>Modern physician-patient relationship</li>
                        <li>Physician engagement in the digital era</li>
                        <li>Human-centric healthcare resources</li>
                        <li>Empathic interactions in pharma communication</li>
                    </ul>
                    <p className="text-lg">
                        Fill out the form to access your free Medi UTA report, along with other exclusive high-value insights.
                    </p>
                </div>

                <div className="free-report-form-wrapper">
                    <div className="form-card">
                        <img
                            src="/assets/images/book.png"
                            alt="Report cover"
                            className="report-cover"
                        />
                        <h3 className="form-title">Get your free report</h3>
                        <form className="report-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="tel" placeholder="Phone number" />
                            <button type="submit" className="btn btn-primary">DOWNLOAD NOW</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
