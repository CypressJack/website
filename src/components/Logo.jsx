import Image from 'next/future/image'
import logo from '../../public/images/logo.png'
import logoDark from '../../public/images/logo-dark.png'

export function Logomark(props) {
  return <Image src={logo} className="h-12 w-12" alt="logo" />
}

export function Logo(props) {
  return (
    <div className="flex flex-row items-center text-2xl font-bold text-white">
      <Logomark width="40" height="40" className="fill-indigo-500" />
      <h2
        className="ml-4 mb-0"
      >Delta Web Works</h2>
    </div>
  )
}
