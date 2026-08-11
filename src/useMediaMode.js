import { useEffect, useState } from 'react'

function readMediaMode() {
  if (typeof window === 'undefined') return 'full'

  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const compactViewport = window.matchMedia('(max-width: 800px), (hover: none), (pointer: coarse)').matches
  const slowConnection = connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType || '')

  if (prefersReducedMotion || slowConnection) return 'single'
  return compactViewport ? 'single' : 'full'
}

export default function useMediaMode() {
  const [mediaMode, setMediaMode] = useState(readMediaMode)

  useEffect(() => {
    const viewportQuery = window.matchMedia('(max-width: 800px), (hover: none), (pointer: coarse)')
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
    const update = () => setMediaMode(readMediaMode())

    const listen = (query) => {
      if (query.addEventListener) query.addEventListener('change', update)
      else query.addListener?.(update)
    }
    const unlisten = (query) => {
      if (query.removeEventListener) query.removeEventListener('change', update)
      else query.removeListener?.(update)
    }
    listen(viewportQuery)
    listen(motionQuery)
    connection?.addEventListener?.('change', update)

    return () => {
      unlisten(viewportQuery)
      unlisten(motionQuery)
      connection?.removeEventListener?.('change', update)
    }
  }, [])

  return mediaMode
}
