import './GlobalReach.css'
import React from 'react'

export default function GlobalReach() {
    return (
        <section id="global-reach">
            <div className="container global-reach-container">
                <div className="global-reach-image">
                    <img src="/assets/images/word.png" alt="Man using a tablet" />
                </div>
                <div className="global-reach-content">
                    <div className="section-subtitle-wrapper">
                        <h3 className="section-subtitle">HOLA-GUTEN TAG-SALVE-HELLO</h3>
                        <div className="section-subtitle-line"></div>
                    </div>
                    <h2 className="heading-xl">Lead globally with confidence</h2>
                    <p className="text-lg">
                        33 countries, 28 languages. Our medical video solutions are used by global, regional and local teams. Book a fee expert session now.
                    </p>
                    <a href="#" className="btn btn-primary">BOOK EXPERT SESSION</a>
                </div>
            </div>
        </section>
    )
}
