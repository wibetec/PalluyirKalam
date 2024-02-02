import React, { useContext } from 'react'
//ASSETS
import MainLogo from './../assets/images/main.png'
import { IoMdHome } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { Language } from '../hooks/Language';

const Appbar = () => {
    const{language}=useContext(Language)
    const navigate = useNavigate()
    return (
        <nav className='flex justify-between items-center rounded-xl bg-[#432F4A] p-2'>
            <div className=' flex text-white items-center'>
                <div className=' mx-1'>
                    <img src={MainLogo} alt="பல்லுயிர் களம்" className='w-12 md:w-6' />
                </div>
                <div className=' mx-1'>
                    <h2 className='font-bold'>{language?"பல்லுயிர்களம்":"PalluyirKalam"}</h2>
                </div>
            </div>
            <div>
            <div className='px-2'>
            {/* {!language?<button onClick={()=>setLanguage(true)} className='text-lg px-3 mx-5 h-8 my-auto rounded-xl bg-[#debd97ff] text-center text-black font-semibold'>Eng</button>:<button onClick={()=>setLanguage(false)} className='text-lg px-3 mx-5 h-8 my-auto rounded-xl bg-[#debd97ff] text-center text-black font-semibold'>தமிழ்</button>} */}
                <button onClick={()=>navigate('/')}>
                    <IoMdHome size={25} color='white' />
                </button>
            </div>
            </div>
        </nav>
    )
}

export default Appbar