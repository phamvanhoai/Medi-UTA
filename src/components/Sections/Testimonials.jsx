import './Testimonials.css'
import React from 'react'

const items = [
    {
        quoteIcon: '/assets/images/651_8860.svg',
        text: `Video is mission critical for us. We see a shift in how people perceive information. The attention span is getting shorter, people are busier than ever before. With medical videos from Medi UTA we are getting in front of our audience. Face-to-face, on medical congresses and online. It just works.`,
        title: 'Global Medical Affairs Manager',
        field: 'Neurology',
    },
    {
        quoteIcon: '/assets/images/651_8870.svg',
        text: `The feedback from physicians and patients is amazing. We really see the difference how people interact with our brands. We will use PubExplainer and MedExplainer videos in the future for sure.`,
        title: 'Patient Engagement Manager',
        field: 'Cardiology',
    },
    {
        quoteIcon: '/assets/images/651_8880.svg',
        text: `Physicians love how we present new data in this new video format. We have seen a huge increase in call requests. PubExplainer videos simplify our scientific work and that is exactly what physicians are looking for.`,
        title: 'Global Brand Manager',
        field: 'Oncology',
    },
]

function TestimonialCard({ q, text, title, field }) {
    return (
        <div className="testimonial-card">
            <div className="quote-icon">
                <img src={q} alt="Quote" />
            </div>
            <div className="card-content">
                <p className="testimonial-text">{text}</p>
                <div className="author-info">
                    <p className="author-title">{title}</p>
                    <p className="author-field">{field}</p>
                </div>
            </div>
        </div>
    )
}

export default function Testimonials() {
    return (
        <section id="testimonials" className="bg-light">
            <div className="container testimonials-container">
                <h2 className="heading-xl">What do our clients say?</h2>
                <div className="testimonial-cards">
                    {items.map((it, i) => (
                        <TestimonialCard key={i} q={it.quoteIcon} text={it.text} title={it.title} field={it.field} />
                    ))}
                </div>
            </div>
        </section>
    )
}
