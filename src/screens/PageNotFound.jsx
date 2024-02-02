//ASSETS
import { useContext, useEffect } from 'react';
import PageNotFoundImage from '../assets/images/pagenotfound.png'

import { useNavigate } from 'react-router-dom'
import { Language } from '../hooks/Language';

const PageNotFound = () => {
  const { language } = useContext(Language);
  const naviagte = useNavigate();
  useEffect(()=>{window.scrollTo(0,0)},[])
  return (
    <main className='h-full'>
      <section className='bg-[#E1B996] pb-5 h-screen flex flex-col justify-center items-center'>
        <div>
          <img src={PageNotFoundImage} alt="Page Not Found" className='w-60' />
        </div>
        <h4 className='font-bold text-xl'>{language?"தவறான பக்கம்":"Page Not Found"}</h4>
        <div>
          <button onClick={() => naviagte('/')} className='text-lg md:text-sm hover:bg-[#9a57b3] bg-[#432F4A] text-white px-3 py-1 rounded-xl font-semibold'>{language?"திரும்ப செல்ல":"Back"}</button>
        </div>
      </section>
    </main>
  )
}

export default PageNotFound
