import { useState, useEffect } from 'react'

type Query =
  | '(max-width: 600px)'
  | '(min-width: 600px)'
  | '(max-width: 900px)'
  | '(min-width: 900px)'
  | '(max-width: 1200px)'
  | '(min-width: 1200px)'
  | '(max-width: 1450px)'
  | '(min-width: 1450px)'
  | '(max-width: 1536px)'
  | '(min-width: 1536px)'
const useMediaQuery = (query: Query) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, query])

  return matches
}

export default useMediaQuery
