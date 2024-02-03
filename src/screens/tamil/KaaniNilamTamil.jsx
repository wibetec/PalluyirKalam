//ASSETS
import KaaniNilamLogo from './../../assets/images/KaaniNilam/kaanilogo.png';
import SecondSectionFirst from './../../assets/images/KaaniNilam/SecondSectionFirst.png';
import SecondSectionSecond from './../../assets/images/KaaniNilam/SecondSectionSecond.png';
import ThirdSectionImage from './../../assets/images/KaaniNilam/ThirdSectionImage.png';


import { useRef, useState } from 'react'
import Appbar from '../../components/Appbar';
import { validateFields } from '../../utils/validate';
import { navigateWhatsapp } from '../../utils/whatsapp';

const KaaniNilamTamil = () => {
  const initialInput = {
    name: '',
    phoneno: '',
    email: '',
    size: ''
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
      input.size,
      input.phoneno,
      input.email,

    ])
    if (isInvalid) {
      return setError("அனைத்து தகவல்களையும் உள்ளிடவும்...!")
    }
    setError(null)
    let landSize;
    if (parseInt(input.size) === 1) {
      landSize = `${input.size} Acre`
    } else {
      landSize = `${input.size} Cents`
    }

    navigateWhatsapp({
      fields: { ...input, size: landSize },
      from: "KaaniNilam"
    });
  }
  const ref = useRef(null);
  const handleLearnMore = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className='h-full'>
      <section className='bg-[#C5D3AF] pb-5'>
        <div className="container p-4  mx-auto">
          <Appbar />
          <div className='flex flex-col mt-8'>
            <div className=" m-1  flex justify-center">
              <img className='w-40' src={KaaniNilamLogo} alt="காணி நிலம்" />
            </div>
            <div className=" m-3 ">
              <h1 className='font-extrabold text-center text-3xl sub-1'>காணி நிலம்</h1>
            </div>
            <div className=" m-0.5 ">
              <h5 className='text-center font-bold text-sm'>ஒருங்கிணை ந்த கூட்டு பண்ணை நிலங்கள்</h5>
            </div>
            <div className=" mt-7  flex justify-center">
              <button onClick={handleLearnMore} className='text-lg md:text-sm hover:bg-[#9a57b3] bg-[#432F4A] text-white px-3 py-1 rounded-xl font-semibold'>
                மேலும் அறிய
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#EACAAD] p-5 pb-5'>
        <div className="container p-1  mx-auto">
          {/* ஒருங்கிணைந்த பண்ணை - விளக்கம் */}
          <div className='my-16'>
            <div>
              <h1 className='font-bold text-lg md:text-xl'>ஒருங்கிணைந்த பண்ணை - விளக்கம் :-</h1>
            </div>

            <div className='flex flex-wrap items-center mt-5'>
              <div className=" w-full md:w-1/2  ">
                <div className='flex justify-center p-5'>
                  <img src={SecondSectionFirst} alt="காணி நிலம்" />
                </div>
              </div>
              <div className=" w-full md:w-1/2  ">
                <div className='text-gray-800 md:p-5'>
                  <p className='font-semibold  mt-5 '>பண்ணை கழிவுகள் மூலம் , கால்நடைகளுக்கு உணவளிப்பது, கால்நடை கழிவுகள்  மூலம் உரம் , பூச்சி விரட்டி தயாரித்து விவசாயத்திற்கு பயன்படுத்துவது என ஓர் சுழற்சிக்கான கட்டமைப்பே ஒருங்கிணைந்த பண்ணை ஆகும்.</p>
                </div>
              </div>
            </div>

            <div className='flex flex-wrap-reverse items-center mt-5'>
              <div className=" w-full md:w-1/2 ">
                <div className='text-gray-800 md:p-5'>
                  <p className='font-semibold  mt-5 '>ஒருங்கிணைந்த பண்ணை வடிவமைப்பில் சிறு விவசாய நிலங்களாக ( FARM PLOTS ) பிரித்துள்ளோம் அதில் ஒன்றை நீங்கள் சொந்தமாக்கி , விதைப்பு முதல் சந்தைபடுத்துவது வரை பொது வசதிகளுடன் தற்சார்பு  இயற்கை விவசாயம் செய்யலாம் . </p>
                  <p className='font-semibold  mt-5 '>நீங்கள் வேறு ஊரில் இருந்தாலும் உங்கள் நிலத்தில் விவசாய  பணிகள்  தொடர்ந்து நடக்கும்.</p>
                  <p className='font-semibold  mt-5 '>உங்களுக்கு உகந்த காலத்தில்  நேரடியாக  நீங்கள் விவசாய பணிகளை செய்யலாம்  .                                                 </p>
                </div>
              </div>
              <div className=" w-full md:w-1/2  ">
                <div className='flex justify-center p-5'>
                  <img src={SecondSectionSecond} alt="காணி நிலம்" />
                </div>
              </div>
            </div>

          </div>
          {/* காணிநிலத்தில் உள்ள வசதிகள் */}
          <div className='mt-28'>
            <div>
              <h1 className='font-bold text-lg md:text-xl'>காணிநிலத்தில் உள்ள வசதிகள் :-</h1>
            </div>
            <div className='flex flex-wrap items-center mt-5'>
              <div className=" w-full md:w-1/2  ">
                <div className='flex justify-center p-5'>
                  <img src={ThirdSectionImage} alt="காணி நிலம்" />
                </div>
              </div>
              <div className=" w-full md:w-1/2  ">
                <div className='font-semibold text-gray-800'>
                  <ul className='list-disc' >
                    <li className='m-3'>உயிர் வேலி</li>
                    <li className='m-3'>அகழி</li>
                    <li className='m-3'> மேட்டு பாத்தி விவசாய அமைப்பு</li>
                    <li className='m-3'>திட்டமிட்ட இடைவெளியில் டிம்பர் , பழ , மரபு மரங்கள்</li>
                    <li className='m-3'>ஊடு பயிராக பணப்பயிர் முதல் காய்கறி விவசாயம் செய்ய வாய்ப்பு.</li>
                    <li className='m-3'>பண்ணை குடில்  அமைக்க  இட வசதி  </li>
                    <li className='m-3'>தடையில்லா , வீரீய பாசன வசதி</li>
                    <li className='m-3'>பொது பண்ணை பாதுகாப்பு</li>
                    <li className='m-3'>( காவலர் , CCTV , முகப்பு கதவு , காவல் நாய்கள்   ) வசதிகள் </li>
                    <li className='m-3'>பராமரிப்பு கருவிகள்</li>
                    <li className='m-3'>பணியாளர் தங்குமிடம் </li>
                    <li className='m-3'>அனுபவம் வாய்ந்த விவசாய பணியாளர்கள்</li>
                    <li className='m-3'>கழிவறை</li>
                    <li className='m-3'>அதில் இயற்கை விவசாயம் செய்ய தேவையான அமைப்புகள் ஏற்படுத்தப்பட்டுள்ளது.</li>
                    <li className='m-3'>விதைப்பு முதல் விற்பனை வரை ஒருங்கிணைந்த பண்ணை வசதிகளுடன் </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
          {/* இத்திட்டத்தை பற்றி மேலும் அரிய விரும்புவோர்  */}
          {/* FORM */}
          <div className='mt-28' ref={ref}>
            <div>
              <h1 className='font-bold text-lg md:text-xl'>இத்திட்டத்தை பற்றி மேலும் அரிய விரும்புவோர் -உங்களை பற்றி :-</h1>
            </div>
            <div className='flex flex-col bg-[#6A8275]  mt-5 p-2 md:p-5 rounded-md'>
              <div className='flex '>
                <div className='flex flex-col w-1/2 md:w-1/4'>
                  <label className='my-3 text-gray-800 font-semibold' htmlFor="name">பெயர் </label>
                  <label className='my-3 text-gray-800 font-semibold' htmlFor="phoneno">அலைபேசி எண்</label>
                  <label className='my-3 text-gray-800 font-semibold' htmlFor="email">மின்னஞ்சல்</label>
                  <label className='my-3 text-gray-800 font-semibold' htmlFor="size">விவசாயம் செய்ய விரும்பும் இட அளவு</label>
                </div>
                <div className='flex flex-col w-1/2 md:w-3/4 px-5'>
                  <input id='name' name='name' onChange={handleChange} value={input.name} placeholder='Enter Name' className='my-2 bg-[#C5D3AF] focus:outline-none rounded-lg px-2 py-1' type="text" />
                  <input id='phoneno' name='phoneno' onChange={handleChange} value={input.phoneno} placeholder='Enter Phone Number ' className='my-2 bg-[#C5D3AF] focus:outline-none rounded-lg px-2 py-1' type="number" />
                  <input id='email' name='email' onChange={handleChange} value={input.email} placeholder='Enter E-Mail ' className='my-2 bg-[#C5D3AF] focus:outline-none rounded-lg px-2 py-1' type="mail" />
                  <select id='size' name='size' onChange={handleChange} value={input.size} className='my-2 bg-[#C5D3AF] focus:outline-none rounded-lg px-2 py-1' >
                    <option value="null">----</option>
                    <option value="33">திட்டம் -  1 -  33 சென்ட்</option>
                    <option value="50">திட்டம் -  2 -  50 சென்ட்</option>
                    <option value="1">திட்டம்  -  3 -  1  ஏக்கர்</option>
                  </select>
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

        </div>
      </section>
    </main >
  )
}

export default KaaniNilamTamil