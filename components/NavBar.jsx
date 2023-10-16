import React from 'react'
import Link from 'next/link'
const NavBar = () => {
  return (
    <nav>
            <ul className='flex gap-2'>
              <li>
                <Link href="/" className='font-bold font-orbitron text-orange-800 hover:underline'>Indie Gamer</Link>
              </li>
              <li className='ml-auto'>
                <Link href="/reviews" className='text-orange-800 hover:underline'>Reviews</Link>
              </li>
              <li>
                <Link href="/about" className='text-orange-800 hover:underline' prefetch={false}>About</Link>
              </li>
            </ul>
          </nav>
  )
}

export default NavBar