import './InsightsDeck.css'
import React from 'react'

export default function InsightsDeck() {
    return (
        <section id="insights-deck">
            <div className="container insights-container">
                <div className="insights-content">
                    <div className="section-subtitle-wrapper">
                        <h3 className="section-subtitle">FREE PHARMA INSIGHTS DECK</h3>
                        <div className="section-subtitle-line"></div>
                    </div>
                    <h2 className="heading-xl">Humanizing pharma interactions with video</h2>
                    <p className="text-lg">
                        Did you know that a 90-second medical explainer video has a 60% probability of being watched till the end? Access the latest stats on video that show you how this content format can play a vital role in your patient and physician engagement strategies!
                    </p>
                    <a href="#" className="btn btn-primary">DOWNLOAD NOW</a>
                </div>
                <div className="insights-image">
                    <img src="/assets/images/human.png" alt="World map made of leaves" />
                </div>
            </div>
        </section>
    )
}
