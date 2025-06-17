import { FaBook, FaHome, FaList, FaMap } from 'react-icons/fa'
import { PiBracketsCurlyBold, PiStarFourFill } from "react-icons/pi";
import { TbCertificate } from 'react-icons/tb';

export default function Sidebar() {
    return (
      <aside className="fixed left-0 w-67 h-full border-r border-gray-300 bg-white text-gray-800 pt-9">
        <nav className="space-y-4">
        <div>
          <a href="/home" className="flex block hover:bg-gray-200 text-base py-3 pl-6">
            <FaHome className='mr-2' size={24} />
            <p>Home</p>
        </a>
          <a href="/mycareer" className="flex block hover:bg-gray-200 text-base py-3 pl-6"><FaMap className='mr-2' size={24} /><p>My Career Journey</p></a>
        </div>
        <div className="mt-6">
        <p className='text-sm text-gray-500 mb-1 pl-6'>Learn</p>
          <a href="#" className="flex block hover:bg-gray-200 text-base py-3 pl-6"><FaBook className='mr-2' size={24} /><p>My Library</p></a>
          <a href="#" className="flex block hover:bg-gray-200 text-base py-3 pl-6"><FaList className='mr-2' size={24} /><p>Content</p></a>
          <a href="#" className="flex block hover:bg-gray-200 text-base py-3 pl-6"><PiStarFourFill className='mr-2' size={24} />AI Coaching</a>
        </div>
        <div className="mt-6">
        <p className='text-sm text-gray-500 mb-1 pl-6'>Apply</p>
          <a href="#" className="flex block hover:bg-gray-200 text-base py-3 pl-6"><PiBracketsCurlyBold  className='mr-2' size={24} />Coding Practice</a>
          <a href="#" className="flex block hover:bg-gray-200 text-base py-3 pl-6"><TbCertificate  className='mr-2' size={24} />Certifications</a>
        </div>
        <div className="mt-6">
        <p className='text-sm text-gray-500 mb-1 pl-6'>Trending Topics</p>
          <a href="#" className="flex block hover:bg-gray-200 text-base py-3 pl-6">Leadership and Management</a>
          <a href="#" className="block hover:bg-gray-200 text-base py-3 pl-6">Artificial Intelligence</a>
          <a href="#" className="block hover:bg-gray-200 text-base py-3 pl-6">Cybersecurity</a>
        </div>
        </nav>
      </aside>
    );
  }