import React, { useContext } from 'react'
import Image1 from '../../assets/images/testimonial/Sample1.jpg'
import { Language } from '../../hooks/Language'

const Tesimonials = () => {
    const {language}=useContext(Language)
    return (
        <div>
            <section className="bg-[#698275ff]">
                <div className="container mx-auto">
                    <div className="py-16">
                        <h2 className="text-center text-3xl text-white lg:text-5xl font-bold">
                        {language?"சான்றுகள்":"Testimonials"}
                        </h2>                        
                    </div>
                    <div className="flex flex-wrap  pb-28 justify-center">
                        <div className="w-3/4 lg:w-1/2 xl:w-1/3 py-5 lg:p-5">
                            <div className="bg-[#8ea851ff] lg:h-[400px] p-10 rounded-2xl shadow-lg">
                                <img className='w-20 rounded-full' src={Image1} alt="" />
                                <h3 className="text-2xl font-bold text-gray-200 mt-1 ">Velusamy</h3>
                                <p className="mt-3 capitalize">
                                {language?"'பல்லுயிர்களம்' விவசாய கல்விக்கும், தொழில்நுட்பத்திற்கும் மிகப் பெரிய செல்வமாக அமைந்துள்ளது. அது எனக்கு உயர்ந்த அறிவை அளித்துவிட்டது, எனது மனதில் எப்போதும் புகழுகின்றது.":"'PalluyirKalam' is a great asset for agricultural education and technology. It has given me a higher knowledge and is always praised in my mind."}
                                </p>
                            </div>
                        </div>                        
                        <div className="w-3/4 lg:w-1/2 xl:w-1/3 py-5 lg:p-5">
                        <div className="bg-[#8ea851ff] lg:h-[400px] p-10 rounded-2xl shadow-lg">
                                <img className='w-20 rounded-full' src={Image1} alt="" />
                                <h3 className="text-2xl font-bold text-gray-200 mt-1 ">Velusamy</h3>
                                <p className="mt-3 capitalize">
                                    {language?"பல்லுயிர்களம் எனக்கு இது ஒரு அருமையான அனுபவமாயிருக்கிறது. இந்த நிறுவனம் பராமரிக்கப்பட்டு, அந்தச் சிறந்த அறிவு மூலம் விவசாயம் மற்றும் தொழில்நுட்பம் பற்றி நன்கு அறிந்துவிட்டேன்.":"PalluyirKalam has been a wonderful experience for me. This institute was maintained and through that great knowledge I got to know about agriculture and technology."}
                                </p>
                            </div>
                        </div>                        
                        <div className="w-3/4 lg:w-1/2 xl:w-1/3 py-5 lg:p-5">
                        <div className="bg-[#8ea851ff] lg:h-[400px] p-10 rounded-2xl shadow-lg">
                                <img className='w-20 rounded-full' src={Image1} alt="" />
                                <h3 className="text-2xl font-bold text-gray-200 mt-1 ">Velusamy</h3>
                                <p className="mt-3">
                                {language?"பராமரிக்கப்பட்டு விளங்கிய 'பல்லுயிர்களம்', அதிக உற்பத்தி மற்றும் விவசாய தொழில் மூலம் எனக்கு புதுப்பித்துவிட்டது. இந்த அருமையான அறிவு அனுபவம் எனக்கு மிகவும் பயனுள்ளதாக உள்ளது.":"A 'PalluyirKalam' that has been maintained has been rejuvenated by high productivity and agricultural industry. This wonderful knowledge experience is very useful for me."}
                                </p>
                            </div>
                        </div>                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Tesimonials