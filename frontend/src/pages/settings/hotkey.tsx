import GlobalKeySetting from '@/components/GlobalKeySetting'

export default function HotkeySetting() {
  return (
    <div className="flex items-center">
      <label>系统快捷键</label>
      <GlobalKeySetting />
    </div>
  )
}
