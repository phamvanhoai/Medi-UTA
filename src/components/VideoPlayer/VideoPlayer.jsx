import React from 'react'
import './VideoPlayer.css'
import useVideoPlayer from '../../hooks/useVideoPlayer'

/**
 * Props:
 *  - src (string): video source
 *  - className (string): thêm "small" cho player nhỏ
 *  - logo (string): path logo
 *  - text (ReactNode): text dưới góc phải
 *  - overlay (bool): có lớp overlay gradient
 */
export default function VideoPlayer({
    src,
    className = '',
    logo,
    text,
    overlay = true,
    videoId,
}) {
    const { videoRef, playing, toggle } = useVideoPlayer(true)

    return (
        <div className={`hero-video ${className} ${playing ? 'playing' : ''}`} onClick={(e) => {
            // chặn double toggle khi click nút
            const isBtn = e.target.closest('.hv-play')
            if (!isBtn) toggle()
        }}>
            <video
                id={videoId}
                className="hv-bg"
                preload="metadata"
                ref={videoRef}
            >
                <source src={src} type="video/mp4" />
            </video>

            {overlay && <div className="hv-overlay"></div>}

            <a
                href="#"
                className={`hv-play ${playing ? '' : ''}`}
                aria-label="Play/Pause"
                onClick={(e) => { e.preventDefault(); toggle() }}
            />

            {logo && (
                <div className="hv-logo">
                    <img src={logo} alt="Medi UTA" />
                </div>
            )}

            {text && (
                <div className="hv-text">{text}</div>
            )}
        </div>
    )
}
