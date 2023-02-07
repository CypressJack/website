import Image from 'next/future/image'
import logo from '../../public/images/logo.png'

export function Logomark(props) {
  return <Image src={logo} className="h-12 w-12" />
}

export function Logo(props) {
  return (
    <div className="flex flex-row items-end text-2xl font-bold text-white">
      <Logomark width="40" height="40" className="fill-cyan-500" />
      <h2
        className="ml-4 mb-0"
      ></h2>
    </div>
  )
}
