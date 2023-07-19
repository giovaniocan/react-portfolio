'use client'
import { useTheme } from 'next-themes'
import { List, Moon, Sun, X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { MenuNav } from './MenuNav'

export function Header() {
  const { resolvedTheme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  const [nav, setNav] = useState(false)

  function handletoggleNav() {
    setNav(!nav)
    console.log(nav)
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div
      id="header"
      className="  w-full p-8 top-0 md:pb-6 flex justify-between items-center  "
    >
      <h2 className=" text-3xl font-semibold ">Portfolio</h2>
      <div className=" flex gap-4 md:gap-12 ml-auto lg:">
        <div className=" hidden md:flex gap-12 visible ">
          <a href="#about" className="  text-lg relative group ">
            About me
            <span className="absolute -bottom-1 left-1/2 w-0 h-[calc(4px-2px)] bg-green-500 group-hover:w-1/2 group-hover:transition-all duration-500"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-[calc(4px-2px)] bg-green-500 group-hover:w-1/2 group-hover:transition-all duration-500"></span>
          </a>

          <a href="#projects" className=" text-lg relative group ">
            Projects
            <span className="absolute -bottom-1 left-1/2 w-0 h-[calc(4px-2px)] bg-green-500 group-hover:w-1/2 group-hover:transition-all duration-500"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-[calc(4px-2px)] bg-green-500 group-hover:w-1/2 group-hover:transition-all duration-500"></span>
          </a>
          <a href="#skills" className="text-lg relative group ">
            Skills
            <span className="absolute -bottom-1 left-1/2 w-0 h-[calc(4px-2px)] bg-green-500 group-hover:w-1/2 group-hover:transition-all duration-500"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-[calc(4px-2px)] bg-green-500 group-hover:w-1/2 group-hover:transition-all duration-500"></span>
          </a>
        </div>
        <button
          onClick={() => {
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
          }}
        >
          {resolvedTheme === 'dark' ? (
            <Sun size={30} color="#00DF5E" />
          ) : (
            <Moon size={30} color="#00DF5E" />
          )}
        </button>
        <div className="transition-all  md:hidden ">
          {nav ? (
            <X
              size={45}
              onClick={handletoggleNav}
              className="fixed right-8 top-8 text-3xl text-dark md:hidden z-50"
            />
          ) : (
            <List size={45} onClick={handletoggleNav} />
          )}
        </div>
        {nav ? <MenuNav closeNav={handletoggleNav} nav={nav} /> : ''}
      </div>

      <div />
    </div>
  )
}
