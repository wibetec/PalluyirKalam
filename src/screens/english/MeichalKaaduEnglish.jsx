//ASSETS
import MeichalLogo from '../../assets/logo/eng_logo/Meichalkaadu.png';
import Image1 from '../../assets/images/MeichalKaadu/image1.jpg';
import Image2 from '../../assets/images/MeichalKaadu/image2.png';


import Appbar from '../../components/Appbar'
import { useRef, useState } from 'react';
import { validateFields } from '../../utils/validate';
import { navigateWhatsapp } from '../../utils/whatsapp';



const MeichalKaaduEnglish = () => {
  const initialInput = {
    name: '',
    phoneno: '',
    email: '',
    address: '',
    amount: '',
    intension: '',
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
      input.phoneno,
      input.email,
      input.address,
      input.amount,
      input.intension
    ])
    if (isInvalid) {
      return setError("All Fields Are Required...!")
    }
    setError(null)
    navigateWhatsapp({
      fields: input,
      from: "Meichal Kaadu"
    });
  }
  const ref = useRef(null);
  const handleLearnMore = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <main className='h-full'>
      <section className='bg-[#90A24E] pb-5'>
        <div className="container p-4  mx-auto">
          <Appbar />
          <div className='flex justify-center items-center mt-8'>
            <div className=" m-1  flex justify-center">
              <img className='w-44' src={MeichalLogo} alt="காணி நிலம்" />
            </div>
            <div className=" m-3">
              <h1 className='font-extrabold text-center text-3xl font-meichal'> Meichal kaadu</h1>
              <h5 className='text-center font-bold text-sm capitalize'>Animal (Cattle) husbandary center</h5>
            </div>
          </div>
          <div className=" mt-3  flex justify-center">
            <button onClick={handleLearnMore} className='text-lg md:text-sm hover:bg-[#9a57b3] bg-[#432F4A] text-white px-3 py-1 rounded-xl font-semibold'>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* SECTION-2 */}
      <section className='bg-[#C5D3AF] p-5'>
        <div className="container p-1  mx-auto">
          <div>
            <h5 className='flex flex-col text-center font-bold text-[15px] capitalize'>
              <span>Meichal kaadu ( Grazing forest ) – Animal (Cattle) husbandary center will help you realize your animal husbandry dream</span>
              {/* <span>- மேய்சல் காடு - கால்நடை வளர்ப்பு மையம்</span> */}
            </h5>
          </div>
        </div>
      </section>

      {/* SECTION-3 */}
      <section className='bg-[#90A24E] p-5'>
        <div className="container p-1  mx-auto">
          <div>
            <h5 className='flex my-5 flex-col text-center font-bold text-[15px] capitalize'>Cattle are creatures that rely on humans and interact with us … </h5>
            <h5 className='flex my-5 flex-col text-center font-bold text-[15px] capitalize'>People who realized this, love them as members of their family and spend time, space and money as part of their daily life</h5>
            <h5 className='flex my-5 flex-col text-center font-bold text-[15px] capitalize'>Some people want to raise goats, cows, chickens and other animals commercially.</h5>
            <h5 className='flex my-5 flex-col text-center font-bold text-[15px] capitalize'>Animal husbandry is a dream for many.</h5>
            <h5 className='flex my-5 flex-col text-center font-bold text-[15px] capitalize'>Despite having money, they hesitate due to the constraints such as lack of time, lack of space and ignorance of upbringing methods.</h5>
          </div>
        </div>
      </section>

      {/* SECTION-4 */}
      <section className='bg-[#C5D3AF] p-5'>
        <div className="container p-1  mx-auto">
          <div>
            <h5 className='flex flex-col text-center font-bold text-[15px] capitalize'>
              <span>Grazing forest - Livestock husbandary center is designed to give action to your dreams, wishes and desires.</span>
              {/* <span>கொடுக்க மேய்சல் காடு - கால்நடை வளர்ப்பு மையம் வடிவமைக்கப்பட்டுள்ளது.</span> */}
            </h5>
          </div>
        </div>
      </section>

      {/* SECTION-5 */}
      <section className='bg-[#90A24E] p-5'>
        <div className="container p-1  mx-auto">
          <h1 className='font-extrabold text-center text-[20px]'>Project Details</h1>

          {/* SECTION-5-i */}
          <div className='mt-5'>
            <h3 className='font-bold text-[17px] capitalize '>shed available</h3>
            <div className="flex  items-center flex-wrap-reverse mt-3">
              <div className=" w-full md:w-3/4">
                <h5 className=' my-5 flex-col md:w-3/4 font-bold text-[15px] capitalize '>easy maintenance with ventilation and seasonal division.</h5>
              </div>
              <div className="w-full md:w-1/4">
                <img src={Image1} alt="மேய்ச்சல் காடு" />
              </div>
            </div>
          </div>

          {/* SECTION-5-ii */}
          <div className='mt-5'>
            <h3 className='font-bold text-[17px] '>Fodder :-</h3>
            <div className="flex  items-center flex-wrap mt-3">

              <div className="w-full md:w-1/4">
                <img src={Image2} alt="மேய்ச்சல் காடு" />
              </div>
              <div className=" w-full flex justify-end md:w-3/4">
                <h5 className=' my-5  md:w-3/4 font-bold text-[15px] capitalize '>Fodder produced in our organic farms without poisonous manure</h5>
              </div>
            </div>
          </div>

          {/* SECTION-5-iii */}
          <div className='mt-5'>
            <h3 className='font-bold text-[17px] capitalize '>Fodder produced in our organic farms without poisonous manure such as : -</h3>
            <div className=' flex justify-center'>
              <ul className='text-[15px]  font-bold list-disc  w-1/2'>
                <li>Green Fodder</li>
                <li>Energy Dense Fodder</li>
                <li>Dry Fodder</li>
              </ul>
            </div>
          </div>

          {/* SECTION-5-iv */}
          <div className='mt-5'>
            <h3 className='font-bold text-[15px] capitalize '>Maintained by staff experience in animal husbandry.</h3>
          </div>

          {/* SECTION-5-v */}
          <div className='mt-5'>
            <h3 className='font-bold text-[15px] capitalize '>Our transparent management will provide monthly growth and budget information of your livestock.</h3>
          </div>

          {/* SECTION-5-vi */}
          <div className='mt-5'>
            <h3 className='font-bold text-[15px] capitalize '>You can monitor your livestock daily from your location with a live tracking tool.</h3>
          </div>

        </div>
      </section>

      {/* SECTION-6 */}
      <section className='bg-[#C5D3AF] p-5'>
        <div className="container p-4  mx-auto">
          <h1 className='font-extrabold text-center text-[20px] capitalize'>Investment details</h1>
          <div className='bg-[#90A24E] mt-5 p-5 rounded'>
            <h3 className='font-bold text-[17px] capitalize '>For Country Cows & Country Buffaloes</h3>
            <div className=' flex justify-center mt-2'>
              <ul className='text-[15px]  font-bold list-disc  w-1/2'>
                <li>Ox - 1</li>
                <li>A Cow With A Calf 1</li>
                <li>Cow Carrying A Calf 1</li>
                <li>Mature Male Goat 2.</li>
              </ul>
            </div>
          </div>
          <ul className='list-disc mt-3 ml-5 text-[15px]'>
            <li className='pt-3'>
              <h1 className='font-bold capitalize '>Let us refer to these as 1 cow block .</h1>
            </li>
            <li className='pt-3'>
              <h1 className='font-bold capitalize '>1 cow block – Rs. 2,50,000 approximately</h1>
            </li>
            <li className='pt-3'>
              <h1 className='font-bold capitalize '>( Price varies according to market conditions ). </h1>
            </li>
          </ul>
          <div className='bg-[#90A24E] mt-5 p-5 rounded'>
            <h1 className='font-bold text-[15px] text-center mt-2 capitalize'>The procedure mentioned for cows applies to other livestock as well.</h1>
            <h1 className='font-bold text-[15px] text-center mt-2 capitalize'>Only the number varies according to the quality and type of cattle.</h1>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className=''>

        <div className='flex flex-col bg-[#E1B996]   p-5 rounded-md'>
          <div>
            <h1 className='font-bold text-lg md:text-xl capitalize' ref={ref}>For more information about this program please post your personal information here  :-</h1>
          </div>
          <div className='flex mt-8'>
            <div className='flex flex-col w-1/2 md:w-1/4'>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="name">Name </label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="address">Address </label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="phoneno">Mobile no </label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="email">Email</label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="size capitalize">Reason / Purpose For Rearing Livestock:-</label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="amount capitalize">Your Investment Amount (The Intended Amount) :-</label>
            </div>
            <div className='flex flex-col w-1/2 md:w-3/4 px-5'>
              <input id='name' name='name' onChange={handleChange} value={input.name} placeholder='Enter Name' className='my-2 focus:outline-none rounded-lg px-2 py-1' type="text" />
              <input id='address' name='address' onChange={handleChange} value={input.address} placeholder='Enter Address' className='my-2 focus:outline-none rounded-lg px-2 py-1' type="text" />
              <input id='phoneno' name='phoneno' onChange={handleChange} value={input.phoneno} placeholder='Enter Phone Number ' className='my-2 focus:outline-none rounded-lg px-2 py-1' type="number" />
              <input id='email' name='email' onChange={handleChange} value={input.email} placeholder='Enter E-Mail ' className='my-2 focus:outline-none rounded-lg px-2 py-1' type="mail" />
              <div className='my-5 flex flex-col md:flex-row'>
                <label htmlFor="service" className='mx-2 font-bold'>
                  <input onChange={handleChange} value="service" id='service' type="radio" name='intension' />
                  <span className='ml-2'>Social Cause</span>
                </label>
                <label htmlFor="business" className='mx-2 font-bold'>
                  <input onChange={handleChange} value="business" id='business' type="radio" name='intension' />
                  <span className='ml-2'>Business</span>
                </label>
              </div>
              <input id='amount' name='amount' onChange={handleChange} value={input.amount} placeholder='Enter Amount ' className=' focus:outline-none rounded-lg px-2 py-1 my-7' type="number" />
            </div>
          </div>
          <div className='flex justify-center mt-5 flex-col '>
            <button onClick={handleSubmit} className='bg-[#714E7E] mx-auto w-1/3 hover:bg-[#9a57b3] text-white px-2 py-1 font-semibold rounded-lg'>
              SEND
            </button>
            {error && <p className='text-red-600 text-center font-bold'>{error}</p>}
          </div>
        </div>
      </div>
    </main>
  )
}

export default MeichalKaaduEnglish