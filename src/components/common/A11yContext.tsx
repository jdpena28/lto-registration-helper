import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type FontScale = 'normal' | 'lg' | 'xl'
export type ContrastMode = 'normal' | 'high'

interface A11yState {
  fontSize: FontScale
  contrast: ContrastMode
  setFontSize: (s: FontScale) => void
  setContrast: (c: ContrastMode) => void
}

const A11yContext = createContext<A11yState>({
  fontSize: 'normal',
  contrast: 'normal',
  setFontSize: () => {},
  setContrast: () => {},
})

export function A11yProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSizeState] = useState<FontScale>('normal')
  const [contrast, setContrastState] = useState<ContrastMode>('normal')

  // Read from localStorage on mount
  useEffect(() => {
    const savedFs = localStorage.getItem('lto-fontscale') as FontScale | null
    const savedContrast = localStorage.getItem('lto-contrast') as ContrastMode | null
    if (savedFs) setFontSizeState(savedFs)
    if (savedContrast) setContrastState(savedContrast)
  }, [])

  // Sync to document and localStorage
  useEffect(() => {
    const html = document.documentElement
    html.removeAttribute('data-fontscale')
    if (fontSize !== 'normal') html.setAttribute('data-fontscale', fontSize)
    localStorage.setItem('lto-fontscale', fontSize)
  }, [fontSize])

  useEffect(() => {
    const html = document.documentElement
    if (contrast === 'high') {
      html.setAttribute('data-contrast', 'high')
    } else {
      html.removeAttribute('data-contrast')
    }
    localStorage.setItem('lto-contrast', contrast)
  }, [contrast])

  function setFontSize(s: FontScale) {
    setFontSizeState(s)
  }

  function setContrast(c: ContrastMode) {
    setContrastState(c)
  }

  return (
    <A11yContext.Provider value={{ fontSize, contrast, setFontSize, setContrast }}>
      {children}
    </A11yContext.Provider>
  )
}

export function useA11y() {
  return useContext(A11yContext)
}
