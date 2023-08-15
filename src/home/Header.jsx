'use client'
import { TfiMenu } from 'react-icons/tfi'
import { IoClose } from 'react-icons/io5'
import { useState, useEffect } from 'react'



export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuOptions = ['Features', 'Pricing', 'Resources', 'Login', 'Sign Up']

  useEffect(()=>{
    const handleScroll = ()=> setIsScrolled(window.scrollY > 0) 
    
    window.addEventListener('scroll', handleScroll)

    return ()=>{
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    function handleResize(){
      setIsMenuOpen(window.innerWidth >= 1024);

    };
    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function Menu(){
    return(
      <ul className='menu-container'>
        {menuOptions.map(item=>{
          return <li className='menu-opt' key={item}>{item}</li>
        })}
      </ul>
    )
  }

  return (
    <header className={isScrolled ? 'shadow' : ''}>
      <div className="content">
        <img src="/images/logo.svg" alt="brand-logo" />
        {isMenuOpen ? <IoClose className='menu-icon' onClick={e=>setIsMenuOpen(!isMenuOpen)}/> : <TfiMenu className='menu-icon' onClick={e=>setIsMenuOpen(!isMenuOpen)}/>}
        {isMenuOpen && <Menu/>}
      </div>
    </header>
  )
}

