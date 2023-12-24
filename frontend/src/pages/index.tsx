// import GlobalKeySetting from './components/GlobalKeySetting'
import { useEffect } from 'react'
import GlobalSearch from '@/components/GlobalSearch'
// import { setWindowSize } from './utils/window'

function App() {
  // useEffect(() => {
  //   setWindowSize(80)
  // }, [])
  return (
    <div className="h-screen w-screen overflow-hidden rounded-md p-2">
      <GlobalSearch />
      {/* <GlobalKeySetting /> */}
    </div>
  )
}

export default App
