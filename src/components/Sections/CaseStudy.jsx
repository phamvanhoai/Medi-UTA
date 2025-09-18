import './CaseStudy.css'
import React from 'react'

export default function CaseStudy() {
    return (
        <section id="case-study">
            <div className="container case-study-container">
                <div className="case-study-content">
                    <div className="section-subtitle-wrapper">
                        <h3 className="section-subtitle">LEARN</h3>
                        <div className="section-subtitle-line"></div>
                    </div>
                    <h2 className="heading-xl">Get our latest case-study</h2>
                    <p className="text-lg">
                        See how pharma brands around the world use our medical video solutions to increase engagement with physicians.
                    </p>
                    <a href="#" className="btn btn-primary">SEE MORE EXAMPLES</a>
                </div>
                <div className="case-study-image">
                    <img src="/assets/images/case.png" alt="Case study engagement chart" />
                </div>
            </div>
        </section>
    )
}
