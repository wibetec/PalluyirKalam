import React, { useRef, useState } from 'react'
import Appbar from '../../components/Appbar'
import { validateFields } from '../../utils/validate';
//ASSESTS
import UlaaLogo from '../../assets/logo/eng_logo/Ulaa.png';
import Image1 from '../../assets/images/Ulaa/image1.png';
import Image2 from '../../assets/images/Ulaa/image2.png';
import Image3 from '../../assets/images/Ulaa/image3.png';
import Image4 from '../../assets/images/Ulaa/image4.png';
import Image5 from '../../assets/images/Ulaa/Image5.png';
import Image6 from '../../assets/images/Ulaa/image6.png';
import Image7 from '../../assets/images/Ulaa/image7.png';
import { navigateWhatsapp } from '../../utils/whatsapp';


const UlaaEnglish = () => {
  const initialInput = {
    name: '',
    address: '',
    phoneno: '',
    email: '',
    days: '',
    feedback: ''
  }
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isInvalid = validateFields([
      input.name,
      input.address,
      input.phoneno,
      input.email,
      input.days,
      input.feedback
    ])
    if (isInvalid) {
      return setError("All Fields Are Required...!")
    }
    setError(null)
    navigateWhatsapp({
      fields: input,
      from: "Ulaa"
    });

  }
  const ref = useRef(null)
  const handleLearnMore = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <main className='h-full '>
      {/* HERO */}
      <section className='bg-[#EACAAD] pb-5'>
        <div className="container p-4  mx-auto">
          <Appbar />
          <div className='flex flex-col mt-8'>
            <div className=" m-1  flex justify-center">
              <img src={UlaaLogo} alt="உலா" className='w-40' />
            </div>
            <div className=" m-3 ">
              <h1 className='font-extrabold text-center text-3xl sub-1'>ULAA</h1>
            </div>
            <div className=" m-0.5 ">
              <h5 className='text-center font-bold text-sm capitalize'>agro tourism center</h5>
            </div>
            <div className=" mt-7  flex justify-center">
              <button onClick={handleLearnMore} className='text-lg md:text-sm hover:bg-[#9a57b3] bg-[#432F4A] text-white px-3 py-1 rounded-xl font-semibold'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#C5D3AF] '>
        <div className="container p-4 text-gray-800  mx-auto">

          {/* FIRST */}
          <div className='my-10'>
            <div className="flex flex-wrap items-center">
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <img src={Image1} alt="உலா" />
                </div>
              </div>
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <p className='my-8 font-semibold capitalize '>Undoubtedly, you will experience a transformed encounter with our Ulaa – The Agro tourism center</p>
                  <p className='my-8 font-semibold capitalize '>This industry is growing rapidly on a global scale.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SECOND */}
          <div className='my-10'>
            <div className="flex flex-wrap-reverse items-center">
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <p className='my-8 font-semibold capitalize '>Success is witnessed in various aspects of this industry, including commerce, education, vocational training, research, inquiry, and appreciation of traditional resources.</p>
                </div>
              </div>
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <img src={Image2} alt="உலா" />
                </div>
              </div>
            </div>
          </div>

          {/* THIRD */}
          <div className='my-10'>
            <div className="flex flex-wrap items-center">
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <img src={Image3} alt="உலா" />
                </div>
              </div>
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <p className='my-8 font-semibold capitalize '>In the southern state of Tamil Nadu in India, nestled near the vibrant rural life, is the small village of Idaikattur located close to Madurai</p>
                </div>
              </div>
            </div>
          </div>

          {/* FOURTH */}
          <div className='my-10'>
            <div className="flex flex-wrap-reverse items-center">
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <p className='my-8 font-semibold capitalize '>The Ulaa – Agro tourism Center, with its well-planned yards, porch, country cattle dung usage and ponds, preserves the traditional rural lifestyle, offering an unchanged experience of simple village living.</p>
                </div>
              </div>
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <img src={Image4} alt="உலா" />
                </div>
              </div>
            </div>
          </div>

          {/* FIFTH */}
          <div className='mt-10 mb-5'>
            <div className="flex flex-wrap items-center">
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <img src={Image5} alt="உலா" />
                </div>
              </div>
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <p className='my-8 font-semibold capitalize '>You can explore the nuances of organic farming here, without altering its essence, with small changes.</p>
                  <p className='my-8 font-semibold capitalize '>Whether individually or as a group, you can engage in our farming activities via Ulaa.</p>
                  <p className='my-8 font-semibold capitalize '>Furthermore, with guidance from our organic farming training experts, you too can become a farmer one day.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SIXTH */}
          <div className='my-10'>
            <div className="flex flex-wrap-reverse items-center">
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <p className='my-8 font-semibold capitalize '>Here, the food offerings include a rich array of natural and traditional agricultural products, such as millets, traditional rice varieties, and pesticide-free vegetables, skillfully prepared by our rural culinary artisans, providing an exceptional experience of our village culinary artistry.</p>
                </div>
              </div>
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <img src={Image6} alt="உலா" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEVENTH */}
      <div className=''>
        <div style={{ backgroundImage: `url(${Image7})` }} className='bg-cover h-full w-full p-5'>
          <div className='bg-[#432F4A] bg-opacity-70 text-white p-3 '>
            <div>
              <p className='font-bold text-center my-2 text-[8px] md:text-sm capitalize'>Explore places steeped in historical significance and rich information with our innovative travel itinerary.</p>
              <p className='font-bold text-center my-2 text-[8px] md:text-sm capitalize'>Our travel guide and vehicle are expertly crafted to illuminate the history and specialties of these places.</p>
              <div className='my-5'>
                <h1 className='text-[8px] md:text-sm p-1 my-2  font-bold bg-white text-black capitalize'>1. "Idaikkadar" Siddhar’s Kovil (Temple) :-</h1>
                <p className='font-bold indent-24 my-1 text-gray-300 text-[8px] md:text-sm capitalize'>Inhabited by a resident, a sage who transcended planetary states, one among the 18 Siddhars.</p>
              </div>
              <div className='my-5'>
                <h1 className='text-[8px] md:text-sm p-1 my-2  font-bold bg-white text-black capitalize'>2. Thiru Irudaya Andavar Church :-</h1>
                <p className='font-bold indent-24 my-1 text-gray-300 text-[8px] md:text-sm capitalize'>Constructed approximately 130 years ago, the French-Gothic architectural marvel.</p>
              </div  >
              <div className='my-5'>
                <h1 className='text-[8px] md:text-sm p-1 my-2  font-bold bg-white text-black capitalize'>3. Keezhadi Excavation Site :-</h1>
                <p className='font-bold indent-24 my-1 text-gray-300 text-[8px] md:text-sm capitalize'>The archaeological site showcasing the cultural remains of ancient Tamils.</p>
              </div>
              <h1 className='text-[8px] md:text-sm p-1 my-2 md:my-10  font-bold bg-white text-black capitalize'>4. Grand Almirah (Cupboard) with about 5 acres of surroundings</h1>
              <h1 className='text-[8px] md:text-sm p-1 my-2 md:my-10  font-bold bg-white text-black capitalize'>5. Samanar Padukai (Beds) - Kunrathur</h1>
              <h1 className='text-[8px] md:text-sm p-1 my-2 md:my-10  font-bold bg-white text-black capitalize'>6. Parambu Hill - Vellala Pari Adichan's Jurisdiction</h1>
              <h1 className='text-[8px] md:text-sm p-1 my-2 md:my-10  font-bold bg-white text-black capitalize'>7. Thirumayam Fort</h1>
              <p className='font-bold text-center my-2 md:mb-10 text-[8px] md:text-sm capitalize'> Our Ulaa – Agro tourism center will provide you with more information about these and other interesting places.</p>
            </div>
          </div>
        </div>
      </div>

      {/* EIGHTH */}
      <section className='bg-[#C5D3AF] '>
        <div className="container p-4 text-gray-800  mx-auto">
          <div className="my-10">
            <div>
              <h1 className='font-extrabold text-xl text-center'> 7 Days Package</h1>
            </div>
            <div className='mt-7 px-5 md:px-0'>
              <ul className='list-disc text-[15px]'>
                <li className='font-bold text-gray-800 my-3 capitalize'>Software engineers have the opportunity to relieve their minds and continue working without interruption through this initiative.</li>
                <li className='font-bold text-gray-800 my-3 capitalize'>6 AM - 6 PM - Work from the village home</li>
                <li className='font-bold text-gray-800 my-3 capitalize'>Three meals a day, midday snacks, and evening refreshments daily</li>
                <li className='font-bold text-gray-800 my-3 capitalize'>High-speed internet connectivity</li>
                <li className='font-bold text-gray-800 my-3 capitalize'>Opportunities to engage in agricultural activities</li>
                <li className='font-bold text-gray-800 my-3 capitalize'>Opportunities to participate in fitness activities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NINETH */}
      <section className='bg-[#EACAAD] p-5'>
        <div className="container p-4  mx-auto">
          <h5 className='text-[15px] font-bold text-center capitalize'>AGRO TOURISM - activities in alphabetical order</h5>
        </div>
      </section>

      {/* FORM */}
      <section className='bg-[#6A8275] ' ref={ref}>
        <div className=" p-4 text-gray-800  mx-auto">
          <div>
            <h1 className='font-bold text-lg md:text-xl capitalize'>Enquiry form  :-</h1>
          </div>
          <div className='flex flex-col  mt-5 p-2 md:p-5 rounded-md'>
            <div className='flex '>
              <div className='flex flex-col w-1/2 md:w-1/4'>
                <label className='my-3 text-gray-800 font-semibold' htmlFor="name">Name </label>
                <label className='my-3 text-gray-800 font-semibold' htmlFor="address">Address </label>
                <label className='my-3 text-gray-800 font-semibold' htmlFor="phoneno">Mobile no</label>
                <label className='my-3 text-gray-800 font-semibold' htmlFor="email">Email</label>
                <label className='my-3 text-gray-800 font-semibold' htmlFor="days">Your Tour Days</label>
              </div>
              <div className='flex flex-col w-1/2 md:w-3/4 px-5'>
                <input id='name' name='name' onChange={handleChange} value={input.name} className='my-2 bg-[#C5D3AF] focus:outline-none rounded-lg px-2 py-1' type="text" />
                <input id='address' name='address' onChange={handleChange} value={input.address} className='my-2 bg-[#C5D3AF] focus:outline-none rounded-lg px-2 py-1' type="text" />
                <input id='phoneno' name='phoneno' onChange={handleChange} value={input.phoneno} className='my-2 bg-[#C5D3AF] focus:outline-none rounded-lg px-2 py-1' type="number" />
                <input id='email' name='email' onChange={handleChange} value={input.email} className='my-2 bg-[#C5D3AF] focus:outline-none rounded-lg px-2 py-1' type="mail" />
                <input id='days' name='days' onChange={handleChange} value={input.days} className='my-2 bg-[#C5D3AF] lg:my-4 focus:outline-none rounded-lg px-2 py-1' type="number" />
              </div>

            </div>
            <div className='flex justify-center'>
              <textarea onChange={handleChange} value={input.feedback} className="p-2 bg-[#C5D3AF]  rounded-md focus:outline-none md:w-full" name="feedback" id="feedback" cols="33" rows="8"></textarea>

            </div>
            <div className='flex justify-center mt-5 flex-col '>
              <button onClick={handleSubmit} className='bg-[#714E7E] mx-auto w-1/3 hover:bg-[#9a57b3] text-white px-2 py-1 font-semibold rounded-lg'>
                SEND
              </button>
              {error && <p className='text-red-600 text-center font-bold'>{error}</p>}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default UlaaEnglish