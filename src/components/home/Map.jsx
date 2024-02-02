import React, { useContext } from 'react'
import { Language } from '../../hooks/Language'

const Map = () => {
    const{language}=useContext(Language)
    return (
        <div className='block xl:flex'>
            <iframe
                title="PalluyirKalam"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.477818673193!2d78.39188085324056!3d9.770308147102154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00e3a6ef147bc5%3A0x224f95dae317b43b!2zUGFsbHV5aXIga2FsYW0g4K6q4K6y4K-N4K6y4K-B4K6v4K6_4K6w4K-NIOCuleCus-CuruCvjQ!5e1!3m2!1sen!2sin!4v1705086700894!5m2!1sen!2sin"
                style={{ border: '0' }}
                className='w-full xl:w-3/4 h-[500px]'
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className='bg-[#e0bb96ff] h-[250px] xl:h-[500px] xl:w-1/4 xl:pl-6 flex justify-center'>
                <div className='text-center xl:text-left my-auto'>
                    <h1 className='text-lg lg:text-2xl 2xl:text-3xl font-semibold '>{language ? "மதுரை To" : "Madurai To"}</h1>
                    <h1 className='text-lg lg:text-2xl 2xl:text-3xl font-semibold mt-1'>{language?"ராமேஸ்வரம் 4 வழிச்சாலை,":"Rameshwaram 4 Ways,"}</h1>
                    <h1 className='text-lg lg:text-2xl 2xl:text-3xl font-semibold mt-1'>{language?"இடைக்காட்டூர் கிராமம்":"Idaikattur Village"}</h1>
                    <a href={"https://maps.app.goo.gl/U5d4DSFCwG8RcYEh9"}><button className='px-2 py-1 bg-[#432d4aff] hover:bg-[#71487dff] text-white text-sm xl:text-2xl font-bold rounded-xl w-3/4 mt-10 mx-auto'>{language?"வழியை பெற":"Get Direction"}</button></a>
                </div>
            </div>
        </div>
    )
}

export default Map