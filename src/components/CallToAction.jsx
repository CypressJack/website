import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from './Button'
import { TextField } from './Fields'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative mb-24 overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Connect with us today
          </h2>
          <p className="mt-4 text-lg text-gray-300">
              Reach out and get the process started, we'll work with you to create a website that best represents your business.
          </p>
          <form className="mt-8 flex w-full justify-center md:w-auto">
            <TextField
              type="email"
              aria-label="Email address"
              placeholder="Email address"
              autoComplete="email"
              required
              className="w-60 min-w-0 shrink bg-gray text-white"
            />
            <Button type="submit" color="white" className="hover:bg-gray-300 hover:transition-all ease-in-out text-black ml-4 flex-none">
              <span className="hidden lg:inline">Get a Quote</span>
              <span className="lg:hidden">Get a Quote</span>
            </Button>
          </form>
        </div>
      </Container>
    </section>
  )
}
