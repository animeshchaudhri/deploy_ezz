'use client'

import { FC } from 'react'
import { ThemeToggle } from '../ThemeToggle'
import { buttonVariants } from "@/components/ui/button"
import Link from 'next/link'
import LoginButton from './LoginButton'


interface NavBarProps {

}

const NavBar: FC<NavBarProps> = ({ }) => {
  return (
    <nav className={'fixed w-full container '} >
      <div className={'flex items-center justify-between w-full p-2'}>
        <div className='font-black text-3xl '>
          NODE RIZZ
        </div>
        <div className='flex items-center justify-center gap-10'>
          <a href="/#" className='hover:underline underline-offset-1 transition-all duration-500'>HOME</a>
          <a href="/generate" className='hover:underline underline-offset-1 transition-all duration-500'>NODE RIZZ</a>
          <a href="/docs" className='hover:underline underline-offset-1 transition-all duration-500'>DOCS</a>
        </div>
        <div>
          <LoginButton />
        </div>
      </div>
    </nav>
  )
}

export default NavBar