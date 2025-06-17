import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'
import { FaSearch, FaGlobe, FaTimesCircle } from 'react-icons/fa'

export default function Header() {
  return (
    <header className={`${styles.stickyHeader} bg-white text-white p-1 py-2`}>
      <nav className="flex justify-between items-center ml-6 mr-10 text-gray-600">
        <Link href="/" className="text-xl font-bold flex items-center">
          <FaTimesCircle size={24} className='mr-4' />

          <Image
            src="/img/Linkedin-Learning.png"
            alt="LinkedIn"
            height={24}
            width={140}
            className=""
          />
        </Link>
        <div className="flex h-12 space-x-4">
          <Link className={`${styles.navBtn} h-full justify-between`}href="/">
            <FaSearch size={24} />
            <p>Search</p>
          </Link>
          <Link className={`${styles.navBtn} h-full justify-top`} href="/about">
            <Image
              src="/img/1729802663735.jpg"
              alt="Profile Picture"
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
            <p>Me</p>
          </Link>
          <Link className={`${styles.navBtn} h-full justify-between`} href="/contact"><FaGlobe size={24}  /><p>EN</p></Link>
        </div>
      </nav>
    </header>
  )
}