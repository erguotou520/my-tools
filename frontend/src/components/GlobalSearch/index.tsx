import { IconSettings } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { Path } from '@/constants'

type GlobalSearchProps = {
  onInput: (v: string) => void
}

const GlobalSearch = ({ onInput }: GlobalSearchProps) => {
  return (
    <div className="flex items-center">
      <input
        className="h-16 flex-1 appearance-none rounded-md bg-[rgba(0,0,0,0.1)] px-2 text-4xl tracking-wider text-black outline-none"
        autoFocus
        onInput={e => onInput(e.currentTarget.value.trim())}
      />
      <Link to={Path.Settings} className="ml-2 inline-flex ">
        <IconSettings className="h-10 w-10 text-gray-600 hover:text-gray-800" />
      </Link>
    </div>
  )
}

export default GlobalSearch
