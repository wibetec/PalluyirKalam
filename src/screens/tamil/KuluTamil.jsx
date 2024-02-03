//ASSETS
import { useRef, useState } from 'react';
import KuluLogo from '../../assets/images/Kulu/kululogo.png'
import { products } from '../../assets/text/kulu';

import Appbar from '../../components/Appbar'
import { validateFields } from '../../utils/validate';
import { navigateWhatsapp } from '../../utils/whatsapp';

const KuluTamil = () => {
  const initialInput = {
    name: '',
    address: '',
    phoneno: '',
    email: '',
    as: ''
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
      input.as,
    ])
    console.log(input);
    if (isInvalid) {
      return setError("அனைத்து தகவல்களையும் உள்ளிடவும்...!")
    }
    setError(null)

    navigateWhatsapp({
      fields: input,
      from: "Kulu"
    });


  }
  const ref = useRef(null);
  const handleLearnMore = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <main className='h-full'>

      {/* SECTION-1 */}
      <section className='bg-[#C5D3AF] pb-5'>
        <div className="container p-4  mx-auto">
          <Appbar />
          <div className='flex flex-col mt-8'>
            <div className=" m-1  flex justify-center">
              <img className='w-40' src={KuluLogo} alt="குழு" />
            </div>
            <div className=" m-0.5 ">
              <h5 className='text-center font-bold text-sm'>மதிப்பு கூட்டு பொருள் தயாரிப்பு மையம்.</h5>
            </div>
            <div className=" mt-7  flex justify-center">
              <button onClick={handleLearnMore} className='text-lg md:text-sm hover:bg-[#9a57b3] bg-[#432F4A] text-white px-3 py-1 rounded-xl font-semibold'>
                மேலும் அறிய
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-2 */}
      <section className='bg-[#E1B996] p-5'>
        <div className="container p-1  mx-auto">
          <h1 className='font-bold text-center text-[17px]'>நீங்கள் புதிய தொழில் தொடங்கும் நோக்கத்தில் உள்ளீர்களா ?</h1>
          <div className='font-bold text-center text-[15px] mt-7'>
            <h5 className='my-3'>குழு மதிப்பு கூட்டு பொருள் தயாரிப்பு மையம் - உங்களுக்கான பலவித வசதிகளை தருகிறது.</h5>
            <h5 className='my-3'>தொழில் முனைவோர்கள் நீங்கள் குறைவான ஆரம்பகட்ட  முதலீடு (மூலபொருள்களுக்கு) மட்டும் செய்து.இந்த வசதிகளை கட்டண அடிப்படையில் பயன்படுத்தலாம்.</h5>
          </div>
        </div>
      </section>

      {/* SECTION-3 */}
      <section className='bg-[#6A8275] p-5'>
        <div className="container p-4  mx-auto">
          <h1 className='font-bold text-[17px] text-nowrap'>கருவிகளின் / வசதிகளின் வகை :-</h1>
          <div className='mt-7'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div className="drop-shadow-lg" key={index}>
                  {index % 2 === 0 ? (<div className='flex '>
                    <div className=" w-[40%] h-32 flex  ">
                      <img src={product.image} alt={product.title} className='w-full h-full object-cover ' />
                    </div>
                    <div className="bg-[#C5D3AF] ml-1 w-[60%] flex justify-center items-center">
                      <h3 className='font-bold test-[15px] text-center'>{product.title}</h3>
                    </div>
                  </div>) : (<div className='flex '>
                    <div className="bg-[#C5D3AF] ml-1 w-[60%] flex justify-center items-center">
                      <h3 className='font-bold test-[15px] text-center'>{product.title}</h3>
                    </div>
                    <div className=" w-[40%] h-32 flex  ">
                      <img src={product.image} alt={product.title} className='w-full h-full object-cover ' />
                    </div>
                  </div>)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section ref={ref} className='bg-[#E1B996] p-3'>
        <div className=''>
          <h1 className='font-bold text-lg md:text-xl'>பயிற்சிகளில் பங்குகொள்ள :-</h1>
        </div>
        <div className='flex flex-col bg-[#C5D3AF]  mt-5 p-2 md:p-5 rounded-md'>
          <div className='flex '>
            <div className='flex flex-col w-1/2 md:w-1/4'>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="name">பெயர் </label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="address">முகவரி </label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="phoneno">அலைபேசி எண்</label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="email">மின்னஞ்சல்</label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="as">இந்த திட்டத்தில் நீங்கள் பங்கெடுக்க விரும்புகிறீர்களா ?</label>
            </div>
            <div className='flex flex-col w-1/2 md:w-3/4 px-5'>
              <input id='name' name='name' onChange={handleChange} value={input.name} className='my-2 bg-[#6A8275]   focus:outline-none rounded-lg px-2 py-1' type="text" />
              <input id='address' name='address' onChange={handleChange} value={input.address} className='my-2 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="text" />
              <input id='phoneno' name='phoneno' onChange={handleChange} value={input.phoneno} className='my-2 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="number" />
              <input id='email' name='email' onChange={handleChange} value={input.email} className='my-2 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="mail" />
              <div className='flex items-center my-2   rounded-lg px-2 py-1'>
                <select className='bg-[#6A8275] mt-5 w-32 h-8 p-2 rounded-lg  focus:outline-none' onChange={handleChange} name="as" id="as">
                  <option className='bg-[#6A8275]' value="null">---</option>
                  <option className='bg-[#6A8275]' value="Manifacturer">உற்பத்தியாளர்</option>
                  <option className='bg-[#6A8275]' value="Worker">பணியாளர்</option>
                </select>
              </div>
            </div>

          </div>

          <div className='flex justify-center mt-5 flex-col '>
            <button onClick={handleSubmit} className='bg-[#714E7E] mx-auto w-1/3 hover:bg-[#9a57b3] text-white px-2 py-1 font-semibold rounded-lg'>
              அனுப்புக
            </button>
            {error && <p className='text-red-600 text-center font-bold'>{error}</p>}
          </div>
        </div>
      </section>

    </main>
  )
}

export default KuluTamil