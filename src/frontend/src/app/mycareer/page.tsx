import Image from 'next/image'
import { TbSailboat } from "react-icons/tb";

export default function MyCareerPage() {
    return (
      <div className=''>
        <div className="py-18 px-8 bg-white">
            <h1 className="text-2xl font-semibold text-black text-4xl text-gray-900 mb-8">My Career Journey</h1>
            <div className='flex'>
              <div className="border-2 border-gray-200 rounded-lg flex w-1/2 p-4 flex-col text-gray-900 mr-4">
                  <Image
                    src="/img/1729802663735.jpg"
                    alt="Profile Picture"
                    width={64}
                    height={64}
                    className="rounded-full object-cover mb-3"
                  />
                  <p className='text-xl font-semibold'>Guilherme Luvielmo</p>
                  <p className='text-blue-500 font-semibold'>Add experience</p>
              </div>
              <div className="border-2 border-gray-200 rounded-lg flex w-1/2 p-4 flex-col text-gray-900 flex flex-col justify-between">
                  <div>
                    <p className='text-xl font-semibold'>Career Goal</p>
                    <p className='font-medium'>Tell us what to achieve and we'll create a personalized learning plan</p>
                  </div>
                  <a href='/voyage' className="bg-transparent bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-4 rounded-full cursor-pointer text-gray-600 border-1 w-max hover:text-white">
                    Add goal
                  </a>
              </div>
            </div>
        </div>
        <div className='flex flex-col flex-1 justify-center items-center h-100'>
          <h1 className="text-5xl font-semibold text-black text-4xl text-gray-900 mb-8">Welcome</h1>
          <a href='/voyage' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full cursor-pointer text-lg flex">
            <p className='mr-2'>Start your Voyage</p>
            <TbSailboat className='text-white' size={24} />
          </a>
        </div>
      </div>
  )
}