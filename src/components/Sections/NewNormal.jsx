import './NewNormal.css'
import React from 'react'
import VideoPlayer from '../VideoPlayer/VideoPlayer'

export default function NewNormal() {
    return (
        <section id="new-normal">
            <div className="container new-normal-container">
                <VideoPlayer
                    className="small"
                    src="/assets/video/02.mp4"
                    logo="/assets/images/Logo-Medi-UTA-Light.png"
                    text={<>
                        PHARMA<br /><span className="hv-pill">2022</span>
                    </>}
                    overlay
                    videoId="smallVid"
                />

                <div className="new-normal-content">
                    <div className="section-subtitle-wrapper">
                        <h3 className="section-subtitle">PHARMA 2022</h3>
                        <div className="section-subtitle-line"></div>
                    </div>
                    <h2 className="heading-xl">The new normal</h2>
                    <p className="text-lg">
                        Pharma companies are ditching paper and reprints and prepping for the future using video solutions. See how you can use video to engage with physicians, saving them time and making your data memorable.
                    </p>
                    <form className="demo-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Email" />
                        <button type="submit" className="btn btn-primary">BOOK FREE DEMO</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
