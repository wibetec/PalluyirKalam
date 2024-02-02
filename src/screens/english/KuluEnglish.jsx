//ASSETS
import { useRef, useState } from 'react';
import KuluLogo from '../../assets/logo/eng_logo/kulu.jpg'
import { products } from '../../assets/text/kulu';

import Appbar from '../../components/Appbar'
import { validateFields } from '../../utils/validate';
import { navigateWhatsapp } from '../../utils/whatsapp';

const KuluEnglish = () => {
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
      return setError("All Fields Are Required...!")
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
              <h5 className='text-center font-bold text-sm capitalize'>Value-added Product Manufacturing Center</h5>
            </div>
            <div className=" mt-7  flex justify-center">
              <button onClick={handleLearnMore} className='text-lg md:text-sm hover:bg-[#9a57b3] bg-[#432F4A] text-white px-3 py-1 rounded-xl font-semibold'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-2 */}
      <section className='bg-[#E1B996] p-5'>
        <div className="container p-1  mx-auto">
          <h1 className='font-bold text-center text-[17px] capitalize'>Are you intending to start a new business venture?</h1>
          <div className='font-bold text-center text-[15px] mt-7'>
            <h5 className='my-3 capitalize'>Our Value-added Product Manufacturing Center is providing various facilities for you.</h5>
            <h5 className='my-3 capitalize'>As entrepreneurs, you can start with a minimal initial investment (for raw materials). These facilities can be utilized at a nominal cost.</h5>
            <h5 className='my-3 capitalize'>Workers can avail stable job opportunities.</h5>
          </div>
        </div>
      </section>

      {/* SECTION-3 */}
      <section className='bg-[#6A8275] p-5'>
        <div className="container p-4  mx-auto">
          <h1 className='font-bold text-[17px] text-nowrap'>Types Of Equipment / Facilities :-</h1>
          <div className='mt-7'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div className="drop-shadow-lg" key={index}>
                  <div className='flex '>
                    <div className=" w-[40%] h-32 flex  ">
                      <img src={product.image} alt="Ok" className='w-full h-full object-cover ' />
                    </div>
                    <div className="bg-[#C5D3AF] ml-1 w-[60%] flex justify-center items-center">
                      <h3 className='font-bold test-[15px] text-center capitalize'>{product.titleEng}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section ref={ref} className='bg-[#E1B996] p-3'>
        <div className=''>
          <h1 className='font-bold text-lg md:text-xl'>About Yourself :-</h1>
        </div>
        <div className='flex flex-col bg-[#C5D3AF]  mt-5 p-2 md:p-5 rounded-md'>
          <div className='flex '>
            <div className='flex flex-col w-1/2 md:w-1/4'>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="name">Name </label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="address">Address </label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="phoneno">Mobile No</label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="email">Email</label>
              <label className='my-3 text-gray-800 font-semibold capitalize' htmlFor="as">Are you interested in participating in this scheme?</label>
            </div>
            <div className='flex flex-col w-1/2 md:w-3/4 px-5'>
              <input id='name' name='name' onChange={handleChange} value={input.name} className='my-2 bg-[#6A8275]   focus:outline-none rounded-lg px-2 py-1' type="text" />
              <input id='address' name='address' onChange={handleChange} value={input.address} className='my-2 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="text" />
              <input id='phoneno' name='phoneno' onChange={handleChange} value={input.phoneno} className='my-2 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="number" />
              <input id='email' name='email' onChange={handleChange} value={input.email} className='my-2 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="mail" />
              <div className='flex items-center my-2   rounded-lg px-2 py-1'>
                <select className='bg-[#6A8275] mt-5 w-32 h-8 p-2 rounded-lg  focus:outline-none' onChange={handleChange} name="as" id="as">
                  <option className='bg-[#6A8275]' value="null">---</option>
                  <option className='bg-[#6A8275]' value="Manifacturer">Manufacturer</option>
                  <option className='bg-[#6A8275]' value="Worker">Worker</option>
                </select>
              </div>
            </div>

          </div>

          <div className='flex justify-center mt-5 flex-col '>
            <button onClick={handleSubmit} className='bg-[#714E7E] mx-auto w-1/3 hover:bg-[#9a57b3] text-white px-2 py-1 font-semibold rounded-lg'>
              SEND
            </button>
            {error && <p className='text-red-600 text-center font-bold'>{error}</p>}
          </div>
        </div>
      </section>

    </main>
  )
}

export default KuluEnglish