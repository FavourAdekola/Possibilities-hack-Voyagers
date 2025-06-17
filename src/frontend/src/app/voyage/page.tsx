import Form from 'next/form'
import { PiStarFour} from 'react-icons/pi';

export default function VoyagePage() {
    return (
      <Form action="/search" className="bg-white  w-full h-full flex flex-col flex-1 justify-center items-center">
      <PiStarFour className='mb-6 text-blue-500 font-bold' size={36} />
      <h1 className='font-semibold text-3xl text-gray-900 mb-18'>Help us tailor your journey by providing a few details:</h1>
      <div className="md:flex md:items-start mb-6 flex-col mb-4">
        <div className="mb-3">
          <label className="block text-gray-900 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Job Title
          </label>
        </div>
        <div className="flex flex-col">
          <input className="w-lg bg-transparent appearance-none border-2 border-gray-200 rounded-full w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" placeholder="I want to be a..." />
        </div>
      </div>
      <div className="md:flex md:items-start mb-6 flex-col">
        <div className="mb-3">
          <label className="block text-gray-900 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Company
          </label>
        </div>
        <div className="">
          <input className="w-lg bg-transparent appearance-none border-2 border-gray-200 rounded-full w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-password" type="text" placeholder="I want to work at..." />
        </div>
      </div>
      <div className="md:flex md:items-center mt-8">
        <div className="">
          <a href='/journey' className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full" type="button">
            Generate your path
          </a>
        </div>
      </div>
    </Form>
    )
}