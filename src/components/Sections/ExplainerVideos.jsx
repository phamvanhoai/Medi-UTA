import './ExplainerVideos.css'
import React from 'react'

function Card({ icon, title, text }) {
    return (
        <div className="explainer-card">
            <img src={icon} alt="" className="card-icon" />
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{text}</p>
            <a href="#" className="btn btn-primary">SEE MORE EXAMPLES</a>
        </div>
    )
}

export default function ExplainerVideos() {
    return (
        <section id="explainer-videos">
            <div className="container explainer-container">
                <h2 className="heading-xl">Our medical explainer videos for patients or physicians</h2>
                <div className="explainer-cards">
                    <Card
                        icon="/assets/images/2365_204.svg"
                        title="PubExplainer videos for physicians"
                        text="Clinical trials, MOA, meta-analysis, guidelines, protocols."
                    />
                    <Card
                        icon="/assets/images/651_8837.svg"
                        title="MedExplainer videos for patients"
                        text="Support patients across the disease lifecycle."
                    />
                </div>
            </div>
        </section>
    )
}
