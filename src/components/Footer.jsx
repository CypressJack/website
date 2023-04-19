import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-10 sm:pt-16 sm:pb-6 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-white">
              <Logomark className="h-10 w-10 flex-none fill-indigo-500" />
              <div className="ml-4">
                <p className="text-base font-semibold">Delta Web Works</p>
                <p className="mt-1 text-sm">Websites &mdash; built locally.</p>
              </div>
            </div>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
          </div>
        </div>
        <div className="flex flex-col justify-start items-center border-t border-gray-200 pt-8 pb-12 md:flex-row md:justify-between md:pt-6">
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
