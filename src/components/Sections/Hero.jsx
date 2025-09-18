import React from 'react'
import './Hero.css'

import VideoPlayer from '../VideoPlayer/VideoPlayer'

export default function Hero() {
    return (
        <section id="hero">
            <div className="container hero-container">
                <div className="section-subtitle-wrapper">
                    <h2 className="section-subtitle">MEDICAL EXPLAINER VIDEOS</h2>
                    <div className="section-subtitle-line"></div>
                </div>

                <h1 className="heading-xl">We transform your medical data into a 2 minute video</h1>
                <p className="text-lg">Save physicians time and make your data memorable.</p>

                <VideoPlayer
                    src="/assets/video/01.mp4"
                    logo="/assets/images/Logo-Medi-UTA-Light.png"
                    text={<>
                        MEDICAL<br /><span className="hv-pill">EXPLAINER</span><br />VIDEOS
                    </>}
                    overlay
                    videoId="heroVid"
                />

                <form className="demo-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="Email" />
                    <button type="submit" className="btn btn-primary">BOOK FREE DEMO</button>
                </form>
            </div>
        </section>
    )
}
