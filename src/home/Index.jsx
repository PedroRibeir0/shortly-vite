'use client'
import Header from './Header'
import Info from './Info'
import ShortLinks from './ShortLinks'
import Link from './Link'
import Statistics from './Statistics'
import Footer from './Footer'
import '../css/home/home.css'
import { useState } from 'react'


export default function Index() {

  const [links, setLinks] = useState([])
  
  const endPoint = 'https://api-ssl.bitly.com/v4/shorten'; 
  const token = 'c7c7e7d44c1a28ad7596ead52fa89fcd02c585c5'; 
  
  async function apiRequest(){
    const linkInput = document.querySelectorAll('.link-input')[0].value

    if(!linkInput.includes('https://')){
      window.alert('Invalid URL')
      return
    }

    const body = {
      long_url: linkInput,
      domain: 'bit.ly',
    };
    

    const response = await fetch(endPoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    const data = await response.json()
    console.log(data)
    if (!data.link) {
      window.alert('error when shortening link')
      return
    }
    const newLink = {
      url: linkInput,
      shortUrl: data.link
    }
    setLinks([...links, newLink])
  }

  return (
    <div className='app'>
      <section className='bg-1'>
        <Header/>
        <Info/>
      </section>
      <section className='bg-2'>
        <ShortLinks
          short={apiRequest}/>
        <ul className='links'>
          {links.map(item=>{
            return <Link 
              key={links.indexOf(item)}
              fullUrl={item.url}
              shortUrl={item.shortUrl}
            />
          })}
        </ul>
        <Statistics/>
        <Footer/>
      </section>
    </div>
  )
}
