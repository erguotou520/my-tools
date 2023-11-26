import { useEffect, useState } from "react"
import { mapEventKey, mapModifiers } from "../utils/keyboard"
import { RegisterGlobalHotkey } from "../../wailsjs/go/main/App"

const GlobalKeySetting = () => {
  const [keyPressed, setKeyPressed] = useState<string[]>([])
  const [tip, setTip] = useState('')

  const handleKeyPress = (event: KeyboardEvent) => {
    setTip('')
    const keys: string[] = []
    if (event.ctrlKey) {
      keys.push('ctl')
    }
    if (event.shiftKey) {
      keys.push('shift')
    }
    if (event.altKey) {
      keys.push('alt')
    }
    if (event.metaKey) {
      keys.push('cmd')
    }
    if (mapEventKey(event)) {
      keys.push(event.key)
    }
    if (keys.length < 2) {
      setTip('请至少按一个功能键和一个非功能键')
    }
    setKeyPressed(keys)
    const modifiers = mapModifiers(event)
    const key = mapEventKey(event)
    if (modifiers && key) {
      RegisterGlobalHotkey(modifiers, key)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return (
    <div>
      <div>{tip}</div>
      <div>{keyPressed.join(' + ')}</div>
    </div>
  )
}

export default GlobalKeySetting