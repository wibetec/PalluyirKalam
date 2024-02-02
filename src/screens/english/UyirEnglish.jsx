//ASSETS
import UyirLogo from '../../assets/logo/eng_logo/Uyir.jpg';
import Image1 from '../../assets/images/Uyir/image1.png';
import Image2 from '../../assets/images/Uyir/image2.png';
import Image3 from '../../assets/images/Uyir/image3.png';
import { getTrees } from '../../assets/text/uyirText';

import Appbar from '../../components/Appbar';
import { useEffect, useRef, useState } from 'react';
import { validateFields } from '../../utils/validate';
import { navigateWhatsapp } from '../../utils/whatsapp';



const UyirEnglish = () => {
  const [phase1, setPhase1] = useState([])
  const [phase2, setPhase2] = useState([])
  const [phase3, setPhase3] = useState([])
  useEffect(() => {
    const { phase1Eng, phase2Eng, phase3Eng } = getTrees();
    setPhase1(phase1Eng);
    setPhase2(phase2Eng);
    setPhase3(phase3Eng);
  }, [])
  const initialInput = {
    name: '',
    address: '',
    phoneno: '',
    email: '',
    businessName: '',
    yours: '',
    feedback: '',
    service: ''
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
      input.businessName,
      input.yours,
      input.feedback,
      input.service
    ])
    if (isInvalid) {
      return setError("All Fields Are Required...!")
    }
    setError(null)

    navigateWhatsapp({
      fields: input,
      from: "Uyir"
    });
  }
  const ref = useRef(null)
  const handleLearnMore = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <main className='h-full capitalize'>

      {/* SECTION-1 */}
      <section className='bg-[#E1B996] pb-5'>
        <div className="container p-4  mx-auto">
          <Appbar />
          <div className='flex flex-col mt-8'>
            <div className=" m-1  flex justify-center">
              <img className='w-48 rounded-full' src={UyirLogo} alt="உயிர்" />
            </div>
            <div className=" m-0.5 ">
              <h5 className='text-center font-bold text-sm'>Abroriculture Center</h5>
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
      <section className='bg-[#6A8275] p-5'>
        <div className="container p-4  mx-auto">
          <h1 className='font-bold text-lg'>In Abroriculture center we grow trees from</h1>
          <ul className='list-disc w-3/4 ml-auto mt-2 font-bold text-[15px]'>
            <li>saplings</li>
            <li>planting by cutting propagation method</li>
            <li>By seed ball method</li>
          </ul>
          <p className='mt-3 ml-5 font-bold text-[14px]'>We will further grow trees by many such methods</p>
        </div>
      </section>

      {/* SECTION-3 */}
      <section className='bg-[#90A24E] p-5'>
        <div className="container p-4  mx-auto text-center text-[15px] font-bold">
          <h5 className='my-1'>With the said methods a few service organizations and private companies are willing to plant saplings along roads, water bodies, public spaces, and private individuals.</h5>
        </div>
      </section>

      {/* SECTION-3.5 */}
      <section className='bg-[#E1B996]  p-5'>
        <div className="container p-4  mx-auto text-center text-[13px] font-bold">
          <h5 className='my-1 text-[15px]'>Our organisation is ready to collaborate with your company that is willful of this activity.</h5>
        </div>
      </section>

      {/* SECTION-4 */}
      <section className='bg-[#6A8275] p-5'>
        <div className="container p-4  mx-auto">
          <h1 className='text-lg font-bold  '>How is our UYIR-Abroriculture center different from other tree planting events?</h1>

          {/* SECTION-4-i */}
          <div className='my-5'>
            <h1 className='font-bold text-lg'>planting by cutting propagation method :</h1>
            <div className="flex flex-wrap-reverse mt-3 w-[85%] ml-auto items-center">
              <div className="  w-full md:w-1/2 ">
                <ul className='list-disc font-bold text-[15px] my-2'>
                  <li>10 ft tall</li>
                  <li>Livestock wouldn’t affect them </li>
                  <li>Faster growth</li>
                </ul>
              </div>
              <div className="  w-full md:w-1/2 p-1 ">
                <img src={Image1} alt="உயிர்" className='w-56' />
              </div>
            </div>
          </div>

          {/* SECTION-4-ii */}
          <div className='my-5'>
            <h1 className='font-bold text-lg'>Security & Advertising :</h1>
            <div className="flex flex-wrap-reverse mt-3 w-[85%] ml-auto items-center">
              <div className="  w-full md:w-1/2 ">
                <ul className='list-disc font-bold text-[15px] my-2'>
                  <li>Tree safety netting</li>
                  <li>Advertisement of your establishment</li>
                  <li>Number of clear trees</li>
                </ul>
              </div>
              <div className="  w-full md:w-1/2 p-1 ">
                <img src={Image2} alt="உயிர்" className='w-48' />
              </div>
            </div>
          </div>

          {/* SECTION-4-iii*/}
          <div className='my-5'>
            <h1 className='font-bold text-lg'>Mode of service :</h1>
            <div className="flex flex-wrap-reverse mt-3 w-[85%] ml-auto items-center">
              <div className="  w-full md:w-1/2 ">
                <ul className='list-disc font-bold text-[15px] md:my-2'>
                  <li>Cultivation</li>
                  <li>Obtaining proper permission letter from land related owners.(Individual land, Department of Public Works, Forest, Panchayat, Village Administrator etc.).</li>
                  <li>planting</li>
                  <li>Registration in government departments (Forest, Panchayat, Village Administrator)</li>
                </ul>
              </div>
              <div className="  w-full md:w-1/2 p-1 ">
                <ul className='list-disc font-bold text-[15px] md:m-2'>
                  <li>Watering</li>
                  <li>Fertilization</li>
                  <li>Application of growth promoter.</li>
                  <li>Pest control.</li>
                  <li>Handing over to the respective organization after the development period.</li>
                  <li>Continuity contracting if the organization wants continuous maintenance.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SECTION-4-iv */}
          <div className='my-5'>
            <h1 className='font-bold text-lg'>Split service fee system (on contractual basis):-</h1>
            <div className="flex flex-wrap-reverse mt-3 w-[85%] ml-auto items-center">
              <div className="  w-full md:w-1/2 ">
                <ul className='list-disc font-bold text-[15px] my-2'>
                  <li>Cash transfer only at the time of completing each stage of services.</li>
                  <li>Current account transaction facility.</li>
                  <li>GST inclusive formal receipt facility.</li>
                  <li>Obtaining documents related to the provision of public services by your company</li>
                </ul>
              </div>
              <div className="  w-full md:w-1/2 p-1 ">
                <img src={Image3} alt="உயிர்" className='w-48' />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION-5 */}
      <section className='bg-[#E1B996] p-5 '>
        <div className="container p-4  mx-auto">
          <h1 className='font-bold text-lg'>Traditional tree species suitable for our area. We prioritize tree species that provide habitat and food for birds and other species such as:-</h1>
          <div className='my-5 font-bold text-[15px] flex flex-wrap'>
            <div className="w-full my-0 md:w-1/3">
              <ul className='text-[15px]'>
                {
                  phase1.map((phase, index) => <li key={`${index}/${phase}`} className='my-1'>{phase}</li>)
                }
              </ul>
            </div>
            <div className="w-full my-0 md:w-1/3">
              <ul className='text-[15px]'>
                {
                  phase2.map((phase, index) => <li key={`${index}/${phase}`} className='my-1'>{phase}</li>)
                }
              </ul>
            </div>
            <div className="w-full my-0 md:w-1/3">
              <ul className='text-[15px]'>
                {
                  phase3.map((phase, index) => <li key={`${index}/${phase}`} className='my-1'>{phase}</li>)
                }
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-6 */}
      <section className='bg-[#90A24E] p-5'>
        <div className="container p-4  mx-auto ">
          <h1 className='font-bold text-lg'>Special Program for Bird feeding</h1>
          <div className='text-[15px] mt-5 text-center'>
            <h5 className='my-3 font-bold'>The world is under human occupation. Nature, through its intricate mechanisms, has been transforming itself from human habitats since thousands of years.</h5>
            <h5 className='my-3 font-bold'>In this, beings other than humans are the significantly affected ones.</h5>
            <h5 className='my-3 font-bold'>In pursuit of this, some individuals worldwide are actively engaged. </h5>
            <h5 className='my-3 font-bold'>Palluyir kalam – As part of the `Uyir’ program feeds the birds – based on their species, to provide nutrition without altering its natural course.</h5>
            <h5 className='my-3 font-bold'>The species of birds range from long , medium and small beaked ones to herbivores, insectivores and carnivores; we all know this </h5>
            <h5 className='my-3 font-bold'>Do all these have proper food, water and shelter?</h5>
            <h5 className='my-3 font-bold'>Human activities, driven by our self-centered thoughts, have led to the disruption of ecosystems, deforestation, pollution of oceans, rivers, depletion of natural resources leading to the extinction of species, including birds that naturally inhabit these areas. Do humans have the responsibility to restore what they have disrupted?</h5>
            <h5 className='my-3 font-bold'>Farmland is probably the only answer for birds in their search for food...</h5>
            <h5 className='my-3 font-bold'>In this situation, is it only the responsibility of the farmers to provide food for the creatures? Industrialists and concrete lovers - what are we going to do? </h5>
            <h5 className='my-3 font-bold'>This line of thought also involves the responsibility of sharing this concept with others, engaging in activities in different parts, conducting research on opportunities to provide food without altering the natural balance in various regions. This is the goal of our ‘Uyir’ program.</h5>
            <h5 className='my-3 font-bold'>You can also be a participant. </h5>
          </div>
        </div>

      </section>

      {/* FORM */}
      <section ref={ref} className='bg-[#C5D3AF] p-3'>
        <div className=''>
          <h1 className='font-bold text-lg md:text-xl'>Get our services for tree planting and other related :-</h1>
        </div>
        <div className='flex flex-col bg-[#C5D3AF]  mt-5 p-2 md:p-5 rounded-md'>
          <div className='flex '>
            <div className='flex flex-col w-1/2 md:w-1/4'>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="name">Name </label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="address">Address </label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="phoneno">Mobile No</label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="email">Email</label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="service">The service you wish to avail</label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="yours">About your organization</label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="businessName">Name of your company if private company</label>
            </div>
            <div className='flex flex-col w-1/2 md:w-3/4 px-5'>
              <input id='name' name='name' onChange={handleChange} value={input.name} className='my-2 bg-[#6A8275]   focus:outline-none rounded-lg px-2 py-1' type="text" />
              <input id='address' name='address' onChange={handleChange} value={input.address} className='my-2 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="text" />
              <input id='phoneno' name='phoneno' onChange={handleChange} value={input.phoneno} className='my-2 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="number" />
              <input id='email' name='email' onChange={handleChange} value={input.email} className='my-2 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="mail" />
              <div className='flex items-center my-2 p-1'>
                <select className='bg-[#6A8275]  rounded-lg   focus:outline-none h-8 w-32' onChange={handleChange} name="service" id="service">
                  <option className='bg-[#6A8275]' value="null">---</option>
                  <option className='bg-[#6A8275]' value="Tree Plating">Tree planting</option>
                  <option className='bg-[#6A8275]' value="Birds Feeding">Bird feeding</option>
                </select>
              </div>
              <div className='flex items-center my-2 p-1 mt-5 md:mt-0'>
                <select className='bg-[#6A8275]  rounded-lg   focus:outline-none h-8 w-32' onChange={handleChange} name="yours" id="yours">
                  <option className='bg-[#6A8275]' value="null">Choose Practise </option>
                  <option className='bg-[#6A8275]' value="Individual">Individual</option>
                  <option className='bg-[#6A8275]' value="Charity Company">Charitable trust</option>
                  <option className='bg-[#6A8275]' value="Private Company">Private organization</option>
                </select>
              </div>
              <input id='businessName' name='businessName' onChange={handleChange} value={input.businessName} className='my-9 lg:my-4 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="text" />
            </div>

          </div>
          <div className=''>
            <label className='my-3 text-gray-800 font-semibold' htmlFor="feedback">Your comments to improve us :- </label>
            <div className='flex justify-center mt-3'>
              <textarea onChange={handleChange} value={input.feedback} className="p-2 bg-[#6A8275] rounded-md focus:outline-none md:w-full" name="feedback" id="feedback" cols="35" rows="8"></textarea>
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

export default UyirEnglish