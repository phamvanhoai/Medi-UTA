import './TrustedBy.css'
import React from 'react'

const logos = Array.from({ length: 30 }, (_, i) => `/assets/images/Logo ${String(i + 1).padStart(2, '0')}.png`)

export default function TrustedBy() {
    return (
        <section id="trusted-by" className="new-bg">
            <div className="container trusted-by-container">
                <h2 className="heading-xl">These companies trust Medi UTA with their digital pharma marketing</h2>
                <p className="text-lg">Working with global, regional & local teams</p>

                <div className="logo-strip-wrapper">
                    <div className="logo-strip">
                        {logos.map((src, i) => <img key={i} src={src} alt={`Logo ${i + 1}`} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}
