import routes from '~react-pages'
import { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
console.log(routes)

export default function App() {
  return <Suspense fallback={<></>}>{useRoutes(routes)}</Suspense>
}
