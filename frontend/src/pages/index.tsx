import { useEffect } from 'react'
import GlobalSearch from '@/components/GlobalSearch'
import { useLocation } from 'react-router'
import { setWindowSize } from '@/utils/window'

function App() {
  const location = useLocation()
  useEffect(() => {
    setWindowSize(200)
  }, [location])
  return (
    <div className="h-screen w-screen overflow-hidden rounded-md p-2">
      <GlobalSearch />
    </div>
  )
}

export default App
