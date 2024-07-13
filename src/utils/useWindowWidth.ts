import { useEffect, useState } from 'react'

const useWindowDimensions = (
  initialWidth = Infinity,
  initialHeight = Infinity
) => {
  const isBrowser = typeof window !== 'undefined'
  const [state, setState] = useState({
    width: isBrowser ? window.innerWidth : initialWidth,
    height: isBrowser ? window.innerHeight : initialHeight,
  })

  useEffect(() => {
    if (isBrowser) {
      const handler = () => {
        setState({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
      window.addEventListener('resize', handler, { passive: true })
      
      return () => {
        window.addEventListener('resize', handler, { passive: true })
      }
    }
  }, [isBrowser])

  return state
}

export default useWindowDimensions
