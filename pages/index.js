import Head from 'next/head'

import { useState } from 'react'
// import { replies } from '../data'
import StandHead from '../componunts/Head'
import StandHeader from '../componunts/Header'
import StandMain from '../componunts/Main'


export default function Home() {
  const hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
  const [createCookie, hourly_sales]
  const [title, setTitle] = useState('');
  const [minCust, setMin] = useState('');
  const [maxCust, setMax] = useState('');
  const [location, setLocation] = useState('');
  const [avg, setAvg] = useState('');
  const createCookie = {
    id: createCookie.length -1,
    minCust,
    maxCust,
    location,
    avg,
    }
    setcreateCookies = (state => ([... state, createCookie]))
  }

  function createCookieHandler(e){
    e.preventDefault();
    setLocation(e.target.location.value)
    setMin(e.target.minCust.value)
    setMax(e.target.maxCust.value)
    setAvg(e.target.avg.value)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <StandHead title = {title}/>
      <StandHeader title = {title}/> 
      <StandMain title={title} location={location} minCust={minCust} maxCust={maxCust} avg={avg} handler={[ ... createCookieHandler]}/>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
