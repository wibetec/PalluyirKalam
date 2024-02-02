import React, { useContext, useEffect } from 'react'
import Hero from '../components/home/Hero'
import HeroEnglish from '../components/home/english/HeroEnglish'
import Activities from '../components/home/Activities'
import Services from '../components/home/Services'
import Contact from '../components/home/Contact'
import Map from '../components/home/Map'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import Tesimonials from '../components/home/Tesimonials'
import ActivityEnglish from '../components/home/english/ActivityEnglish'
import ServicesEnglish from '../components/home/english/ServicesEnglish'
import ContactEnglish from '../components/home/english/ContactEnglish'
import { Language } from '../hooks/Language'

const Home = () => {
  const {language}=useContext(Language)
  useEffect(()=>{window.scrollTo(0,0)},[])
  
  return (
    <>
      {language ? <Hero /> : <HeroEnglish/>}
      {language?<Activities />:<ActivityEnglish/>}
      {language?<Services />:<ServicesEnglish/>}
      <Tesimonials/>
      {language?<Contact />:<ContactEnglish/>}
      <Map />
      <Footer />
      <Copyright/>
    </>
  )
}

export default Home