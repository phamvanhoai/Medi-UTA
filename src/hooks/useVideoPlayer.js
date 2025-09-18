import { useRef, useState, useCallback } from 'react'

export default function useVideoPlayer(initialMuted = true) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const play = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = initialMuted
    v.play()
    setPlaying(true)
  }, [initialMuted])

  const pause = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.pause()
    setPlaying(false)
  }, [])

  const toggle = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      play()
    } else {
      pause()
    }
  }, [play, pause])

  return { videoRef, playing, play, pause, toggle }
}
