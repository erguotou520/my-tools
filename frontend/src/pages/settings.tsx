import { useEffect } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { setWindowSize } from '@/utils/window'
import { Path } from '../constants'

export default function SettingsContainer() {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (location.pathname === Path.Settings) {
      navigate(Path.HotkeySettings, { replace: true })
    }
  }, [location])

  useEffect(() => {
    setWindowSize(500)
  }, [])

  return (
    <div className="flex items-start">
      <div className="w-80 border-r-[1px] border-gray-100 p-4">
        <NavLink to="/settings/hotkey">快捷键</NavLink>
      </div>
      <div className="overflow-auto p-4">
        <Outlet />
      </div>
    </div>
  )
}
