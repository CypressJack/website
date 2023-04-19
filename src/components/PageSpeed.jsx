import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import classnames from '@/utils/classNames'
import Spinner from './Spinner'

export default function PageSpeed({ open, setOpen }) {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState({})

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    // setLoadingText();
    const res = await fetch('/api/pageSpeed')
    const data = await res.json()
    if (data.success) {
      setResults(data)
    }
    setLoading(false)
    console.log(data)
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-900 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                {!loading ? (
                  !results?.success && (
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-white"
                      >
                        Find out how your site is doing
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consequatur amet labore.
                        </p>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="website"
                              id="website"
                              value={url}
                              onChange={(e) => setUrl(e.target.value)}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              placeholder="https://your-website.com"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                        // onClick={() => setOpen(false)}
                      >
                        Get my report
                      </button>
                    </div>
                  </form>
                  )
                ) : (
                  <div className="relative h-52">
                    <h2 className="mx-auto text-center text-xl font-bold text-white">
                      Testing your websites performance
                    </h2>
                    <Spinner className="top-1/2" />
                  </div>
                )}
                {results?.success && (
                  <div className="relative h-52">
                    <h2 className="mx-auto text-center text-xl font-bold text-white">
                      Results:222
                    </h2>
                    <h2 className="mx-auto text-center text-xl font-bold text-white">
                      {results.finalUrl}
                    </h2>
                    <h2 className="mx-auto text-center text-xl font-bold text-white">
                      Performance: {results.performance}
                    </h2>
                    <h2 className="mx-auto text-center text-xl font-bold text-white">
                      SEO: {results.seo}
                    </h2>
                    <h2 className="mx-auto text-center text-xl font-bold text-white">
                      Accessibility: {results.accessibility}
                    </h2>
                    <h2 className="mx-auto text-center text-xl font-bold text-white">
                      Best Practices: {results.bestPractices}
                    </h2>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
