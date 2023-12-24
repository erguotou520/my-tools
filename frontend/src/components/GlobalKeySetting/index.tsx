import { RegisterGlobalHotkey } from '@wails/go/app/App'

const GlobalKeySetting = () => {
  return (
    <select
      onChange={e => {
        const v = e.currentTarget.value
        RegisterGlobalHotkey([v, v])
      }}
    >
      <option value="cmd">双击cmd</option>
      <option value="ctrl">双击ctrl</option>
      <option value="alt">双击alt</option>
      <option value="shift">双击shift</option>
    </select>
  )
}

export default GlobalKeySetting
