//ASSETS
import MeichalLogo from '../../assets/images/MeichalKaadu/meichallogo.png';
import Image1 from '../../assets/images/MeichalKaadu/image1.jpg';
import Image2 from '../../assets/images/MeichalKaadu/image2.png';


import Appbar from '../../components/Appbar'
import { useRef, useState } from 'react';
import { validateFields } from '../../utils/validate';
import { navigateWhatsapp } from '../../utils/whatsapp';



const MeichalKaaduTamil = () => {
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
      return setError("அனைத்து தகவல்களையும் உள்ளிடவும்...!")
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
              <h1 className='font-extrabold text-center text-3xl font-meichal'> மேய்ச்சல் காடு</h1>
              <h5 className='text-center font-bold text-sm'>கால்நடை வளர்ப்பு மையம்</h5>
            </div>
          </div>
          <div className=" mt-3  flex justify-center">
            <button onClick={handleLearnMore} className='text-lg md:text-sm hover:bg-[#9a57b3] bg-[#432F4A] text-white px-3 py-1 rounded-xl font-semibold'>
              மேலும் அறிய
            </button>
          </div>
        </div>
      </section>

      {/* SECTION-2 */}
      <section className='bg-[#C5D3AF] p-5'>
        <div className="container p-1  mx-auto">
          <div>
            <h5 className='flex flex-col text-center font-bold text-[15px]'>
              <span>உங்களின் கால்நடை வளர்ப்பு கனவை நிறைவேற்ற துணை நிற்கும்</span>
              <span>- மேய்சல் காடு - கால்நடை வளர்ப்பு மையம்</span>
            </h5>
          </div>
        </div>
      </section>

      {/* SECTION-3 */}
      <section className='bg-[#90A24E] p-5'>
        <div className="container p-1  mx-auto">
          <div>
            <h5 className='flex my-5 flex-col text-center font-bold text-[15px]'>கால்நடைகள் - மனிதர்களை நம்பி நம்மோடு உறவாடும்  உயிரினங்கள் … </h5>
            <h5 className='flex my-5 flex-col text-center font-bold text-[15px]'>இதை உணர்ந்த பலரும் கால்நடைகளை தங்கள் குடும்ப உறுப்பினர்களாக அன்பு செலுத்தி தங்களின் அன்றாட வாழ்வில் நேரம் , இடம் மற்றும்  பணம் செலவு செய்து  வளர்க்கிறனர்.</h5>
            <h5 className='flex my-5 flex-col text-center font-bold text-[15px]'>வணிக ரீதியில் சிலர் ஆடு , மாடு , கோழி மற்றும் பிற உயிரினங்களை  வளர்க்க விரும்புகின்றனர்.</h5>
            <h5 className='flex my-5 flex-col text-center font-bold text-[15px]'>பலருக்கும் கால்நடை வளர்ப்பு ஓர் கனவாகவே உள்ளது.</h5>
            <h5 className='flex my-5 flex-col text-center font-bold text-[15px]'>பணம் இருந்தும் நேரமின்மை , இட வசதி இல்லாமை , வளர்ப்பு முறை அறியாமை போன்ற பல காரணங்களால் தயங்கி வருகின்றனர்.</h5>
          </div>
        </div>
      </section>

      {/* SECTION-4 */}
      <section className='bg-[#C5D3AF] p-5'>
        <div className="container p-1  mx-auto">
          <div>
            <h5 className='flex flex-col text-center font-bold text-[15px]'>
              <span>உங்கள் கனவு , விருப்பம் , தயக்கம் உங்கள் எண்ணங்களுக்கு செயல் வடிவம் </span>
              <span>கொடுக்க மேய்சல் காடு - கால்நடை வளர்ப்பு மையம் வடிவமைக்கப்பட்டுள்ளது.</span>
            </h5>
          </div>
        </div>
      </section>

      {/* SECTION-5 */}
      <section className='bg-[#90A24E] p-5'>
        <div className="container p-1  mx-auto">
          <h1 className='font-extrabold text-center text-[20px]'>திட்ட விபரம்</h1>

          {/* SECTION-5-i */}
          <div className='mt-5'>
            <h3 className='font-bold text-[17px] '>கொட்டகை :-</h3>
            <div className="flex  items-center flex-wrap-reverse mt-3">
              <div className=" w-full md:w-3/4">
                <h5 className=' my-5 flex-col md:w-3/4 font-bold text-[15px] '>எளிமையான பராமரிப்பு , காற்றோட்டம் , பருவத்துக்கேற்ற பிரிவுடன் கூடியது.</h5>
              </div>
              <div className="w-full md:w-1/4">
                <img src={Image1} alt="மேய்ச்சல் காடு" />
              </div>
            </div>
          </div>

          {/* SECTION-5-ii */}
          <div className='mt-5'>
            <h3 className='font-bold text-[17px] '>தீவணம் :-</h3>
            <div className="flex  items-center flex-wrap mt-3">

              <div className="w-full md:w-1/4">
                <img src={Image2} alt="மேய்ச்சல் காடு" />
              </div>
              <div className=" w-full flex flex-col justify-center md:w-3/4">
                <div className='ml-auto'>
                  <h5 className=' my-5 ml-auto md:w-3/4 font-bold text-[15px] '>நமது இயற்கை விவசாய பண்ணைகளில் விளைவிக்க கூடிய நஞ்சில்லா புல் வகைகள் மற்றும் தீவணங்கள்  உள்ளன அவை : -</h5>
                  <div className='w-[90%] md:w-[70%] ml-auto'>
                    <ul className='text-[15px] border  font-bold list-disc'>
                      <li>பசுந்தீவணங்கள்</li>
                      <li>அடர் தீவணங்கள்</li>
                      <li>உலர் தீவணங்கள்</li>
                      <li>மேலும்...</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5-iii-COMBINED TO 5-ii */}

          {/* SECTION-5-iv */}
          <div className='mt-5'>
            <h3 className='font-bold text-[15px] '>கால்நடை வளர்ப்பில் அனுபவம் மிக்க ஊழியர்களால் பராமரிக்கப்படுகிறது.</h3>
          </div>

          {/* SECTION-5-v */}
          <div className='mt-5'>
            <h3 className='font-bold text-[15px] '>வெளிப்படையான இந்த நிர்வாகம்  - உங்கள் கால்நடைகளின் மாதாந்திர வளர்ச்சி , வரவு மற்றும் செலவு விபரங்களை வழங்கும்.</h3>
          </div>

          {/* SECTION-5-vi */}
          <div className='mt-5'>
            <h3 className='font-bold text-[15px] '>உங்கள் கால்நடைகளை தினமும் கண்காணிப்பு கருவி மூலம் நீங்கள் இருந்த இடத்தில் இருந்தே கவனிக்க முடியும்.</h3>
          </div>

        </div>
      </section>

      {/* SECTION-6 */}
      <section className='bg-[#C5D3AF] p-5'>
        <div className="container p-4  mx-auto">
          <h1 className='font-extrabold text-center text-[20px]'>முதலீடு விபரங்கள்</h1>
          <div className='bg-[#90A24E] mt-5 p-5 rounded'>
            <h3 className='font-bold text-[17px] '>நாட்டு மாடுகள் & நாட்டு எருமைககள்</h3>
            <div className=' flex justify-center mt-2'>
              <ul className='text-[15px]  font-bold list-disc  w-1/2'>
                <li>காளை - 1</li>
                <li>கன்றுடன் உள்ள மாடு 1</li>
                <li>சினையுடன் மாடு 1</li>
                <li>இணையும் பருவத்தில் கிடேறி 2.</li>
              </ul>
            </div>
          </div>
          <ul className='list-disc mt-3 ml-5 text-[15px]'>
            <li className='pt-3'>
              <h1 className='font-bold '>இவைகளை 1 மாடு தொகுதி என குறிப்பிடுவோம்.</h1>
            </li>
            <li className='pt-3'>
              <h1 className='font-bold '>1 மாடு தொகுதி - சுமார் ₹ 2,50,000 என கணக்கிட்டலாம்.</h1>
            </li>
            <li className='pt-3'>
              <h1 className='font-bold '>( விலை சந்தை நிலை பொருத்து மாறுபடும் ). </h1>
            </li>
          </ul>
          <div className='bg-[#90A24E] mt-5 p-5 rounded'>
            <h1 className='font-bold text-[15px] text-center mt-2'>மாடுகளுக்கு கூறப்பட்ட இதே நடைமுறை மற்ற கால்நடைகளுக்கும் பொருந்தும்.</h1>
            <h1 className='font-bold text-[15px] text-center mt-2'>எண்ணிக்கை மட்டும் கால்நடைகளின் தரம் மற்றும் வகை பொருத்து மாறுபடும்.</h1>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <div className=''>

        <div className='flex flex-col bg-[#E1B996]   p-5 rounded-md'>
          <div>
            <h1 className='font-bold text-lg md:text-xl' ref={ref}>இந்த திட்டம் குறித்து மேலும் விபரம் அரிய உங்களை பற்றிய தகவல்களை இங்கு பதிவிடவும்  :-</h1>
          </div>
          <div className='flex mt-8'>
            <div className='flex flex-col w-1/2 md:w-1/4'>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="name">பெயர் </label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="address">முகவரி </label>
              <label className='my-3 text-gray-800 font-semibold text-nowrap' htmlFor="phoneno">அலைபேசி எண்</label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="email">மின்னஞ்சல்</label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="size">கால்நடை வளர்க்க காரணம் / நோக்கம் :-</label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="amount">உங்கள் முதலீடு அளவு - (உத்தேசமான தொகை):-</label>
            </div>
            <div className='flex flex-col w-1/2 md:w-3/4 px-5'>
              <input id='name' name='name' onChange={handleChange} value={input.name}  className='my-2 focus:outline-none rounded-lg px-2 py-1' type="text" />
              <input id='address' name='address' onChange={handleChange} value={input.address}  className='my-2 focus:outline-none rounded-lg px-2 py-1' type="text" />
              <input id='phoneno' name='phoneno' onChange={handleChange} value={input.phoneno}  className='my-2 focus:outline-none rounded-lg px-2 py-1' type="number" />
              <input id='email' name='email' onChange={handleChange} value={input.email}  className='my-2 focus:outline-none rounded-lg px-2 py-1' type="mail" />
              <div className='my-5 flex flex-col sm:flex-row'>
                <label htmlFor="service" className='mx-2 text-nowrap font-bold'>
                  <input onChange={handleChange} value="service" id='service' type="radio" name='intension' />
                  <span className='ml-2'>சேவை</span>
                </label>
                <label htmlFor="business" className='mx-2 text-nowrap font-bold'>
                  <input onChange={handleChange} value="business" id='business' type="radio" name='intension' />
                  <span className='ml-2'>வணிகம்</span>
                </label>
              </div>
              <input id='amount' name='amount' onChange={handleChange} value={input.amount}  className=' focus:outline-none rounded-lg px-2 py-1 my-5 sm:my-7 lg:my-0 w-1/2 mx-auto' type="number" />
            </div>
          </div>
          <div className='flex justify-center mt-5 flex-col '>
            <button onClick={handleSubmit} className='bg-[#714E7E] mx-auto w-1/3 hover:bg-[#9a57b3] text-white px-2 py-1 font-semibold rounded-lg'>
              அனுப்புக
            </button>
            {error && <p className='text-red-600 text-center font-bold'>{error}</p>}
          </div>
        </div>
      </div>
    </main>
  )
}

export default MeichalKaaduTamil