import React, { useRef, useState } from 'react'
import Appbar from '../../components/Appbar'
import { validateFields } from '../../utils/validate';

//ASSETS
import PallikoodamLogo from '../../assets/logo/eng_logo/Pallikoodam1.jpg';
import { navigateWhatsapp } from '../../utils/whatsapp';

const PalliKoodamEnglish = () => {
  const initialInput = {
    name: '',
    address: '',
    phoneno: '',
    email: '',
    members: '',
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
      input.members,
      input.days,
      input.feedback
    ])
    if (isInvalid) {
      return setError("All Fields Are Required...!")
    }
    setError(null)
    navigateWhatsapp({
      fields: input,
      from: "PalliKoodam"
    });
  }
  const ref = useRef(null);
  const handleLearnMore = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <main className='h-full'>
      {/* SECTION-1 */}
      <section className='bg-[#6A8275] pb-5'>
        <div className="container p-4  mx-auto">
          <Appbar />
          <div className='flex flex-col mt-8'>
            <div className=" m-1  flex justify-center">
              <img className='w-48 rounded-full' src={PallikoodamLogo} alt="காணி நிலம்" />
            </div>
            <div className=" m-3 ">
              <h1 className='font-extrabold text-center text-3xl sub-1'>PALLIKOODAM</h1>
            </div>
            <div className=" m-0.5 ">
              <h5 className='text-center font-bold text-sm'>Education And Art Center</h5>
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
          <div>
            <h3 className='flex flex-col text-center text-[15px] font-bold capitalize'>
              <span> Natural farming should prevail worldwide.</span>
              <span>We should establish Organic Farming Training Centres in every village.</span>
              <span>— G. Nammazhvar’s words</span>
            </h3>
          </div>
        </div>
      </section>

      {/* SECTION-3 */}
      <section className='bg-[#90A24E] p-5'>
        <div className="container p-1  mx-auto">
          <div>
            <h3 className='flex flex-col text-center text-[15px] font-bold capitalize'>Lakhs of youth are engaged in organic farming to realize the dreams of Nammalwar.</h3>
          </div>
        </div>
      </section>

      {/* SECTION-4 */}
      <section className='bg-[#C5D3AF] p-5'>
        <div className="container p-1  mx-auto">
          <div>
            <h3 className='flex flex-col text-center text-[15px] font-bold capitalize'>
            Our Palluyirkalam, started its journey on the way paved by Nammazhwar - The organization has various action plans and the most important of them is the Pallikoodam project.</h3>
          </div>
        </div>
      </section>

      {/* SECTION-5 */}
      <section className='bg-[#6A8275] p-5'>
        <div className="container p-1  mx-auto">
          <div>
            <h3 className='flex flex-col text-center text-[15px] font-bold'>
              <span className='my-1 capitalize'>Pallikkoodan (the school) teaches practically the natural farming practices and regional traditional arts.</span>
              <span className='my-1 capitalize'>We are passing the essence of the words of Nammalvar that agriculture is not only a profession but a way of life to those who participate in the school exercises.</span>
            </h3>
          </div>
        </div>
      </section>

      {/* SECTION-6 */}
      <section className='bg-[#E1B996] p-5'>
        <div className="container p-1  mx-auto">
          <h2 className='font-bold text-lg '>Training Programs</h2>

          {/* SECTION-6-i */}
          <div className='py-5  mx-auto'>
            <div className='bg-[#6A8275]'>
              <div className='flex justify-between'>
                <h5 className=' w-1/2 px-1 border text-center font-bold border-black'>One Day Training    </h5>
                <h5 className=' w-1/2 px-1 border text-center font-bold border-black'>8 AM - 5 PM</h5>
              </div>
              <div className='bg-[#90A24E] flex flex-col p-5'>
                <div>
                  <h1 className='font-bold text-center text-[16px]'>Subjects  </h1>
                  <div className='mt-3 flex  flex-col md:flex-row justify-between'>
                    <ul className='font-bold list-disc text-[15px] px-5 md:px-16'>
                      <li>In Class Teaching - 1 Hour</li>
                      <li>Go Around The Field - 1 Hour</li>
                      <li>Food 1 Hour</li>
                      <li>Field Training 2 Hour</li>
                    </ul>
                    <ul className='font-bold list-disc text-[15px] px-5 md:px-16'>
                      <li>Fine Training 2 Hours</li>
                      <li>Discussion 1 Hour</li>
                      <li>Certificate Distribution 15 Minutes</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h1 className='font-bold my-4 text-[16px]'>Teacher :-</h1>
                  <div>
                    <ul className='font-bold list-disc text-[15px] px-5'>
                      <li>A Poineer In Organic Farming</li>
                      <li>Experienced Agricultural Workers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION-6-ii */}
          <div className='py-5  mx-auto'>
            <div className='bg-[#6A8275]'>
              <div className='flex justify-between'>
                <h5 className=' w-1/2 px-1 border text-center font-bold border-black'>7 Days Training   </h5>
                <h5 className=' w-1/2 px-1 border text-center font-bold border-black'>7 - பகல்  , 2- இரவு</h5>
              </div>
              <div className='bg-[#90A24E] flex flex-col p-5'>
                <div>
                  <h1 className='font-bold text-center text-[16px]'>Subjects </h1>
                  <div className='mt-3 flex  flex-col md:flex-row justify-between'>
                    <ul className='font-bold list-disc text-[15px] px-5 md:px-16'>
                      <li>In Class</li>
                      <li>Design/</li>
                      <li>Work</li>
                      <li>Self-Sustainability</li>
                      <li>Worship</li>
                      <li>Bio-Diversity</li>
                      <li>Fine Arts</li>
                      <li>Business/Allied Trade</li>
                      <li>Management</li>
                    </ul>
                    <ul className='font-bold list-disc text-[15px] px-5 md:px-16'>
                      <li>Herbs</li>
                      <li>Body Building</li>
                      <li>Mindset</li>
                      <li>Food Habits</li>
                      <li>Medical</li>
                      <li>Singing,Dancing</li>
                      <li> Conversation</li>
                      <li>Certificate</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h1 className='font-bold my-4 text-[16px]'>Teacher :-</h1>
                  <div>
                    <ul className='font-bold list-disc text-[15px] px-5'>
                      <li>A Pioneer In Organic Farming</li>
                      <li>Experienced Agricultural Workers</li>
                      <li>Department Wise Lecturers-4.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION-6-iii */}
          <div className='py-5  mx-auto'>
            <div className='bg-[#6A8275]'>
              <div className='flex justify-between'>
                <h5 className=' w-1/2 px-1 border text-center font-bold border-black'>30 Days Training   </h5>
                <h5 className=' w-1/2 px-1 border text-center font-bold border-black'>30 - Mornings  , 8 - Nights</h5>
              </div>
              <div className='bg-[#90A24E] flex flex-col p-5'>
                <div>
                  <h1 className='font-bold text-center text-[16px]'>Subjects </h1>
                  <div className='mt-3 flex  flex-col md:flex-row justify-between'>
                    <ul className='font-bold list-disc text-[15px] px-5 md:px-16'>
                      <li>In Class</li>
                      <li>Design</li>
                      <li>Work</li>
                      <li>Self-Sustainability</li>
                      <li>Worship</li>
                      <li>Bio-Diversity</li>
                      <li>Fine Arts</li>
                      <li>Business/Allied Trade</li>
                      <li>Management</li>
                      <li>Herbs</li>
                      <li>Body-Building</li>
                      <li>Mindset</li>
                    </ul>
                    <ul className='font-bold list-disc text-[15px] px-5 md:px-16'>
                      <li>Food Habits</li>
                      <li>Medicine</li>
                      <li>Dancing,Singing</li>
                      <li>Conversation</li>
                      <li>Assessment</li>
                      <li>Job Oppertunity</li>
                      <li>Administration</li>
                      <li>Business Opportunity</li>
                      <li>Business Design</li>
                      <li>Investor Connects</li>
                      <li>Painting </li>
                      <li>Clay Art Sculpture </li>
                      <li>Pottery</li>
                      <li>Certificate</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h1 className='font-bold my-4 text-[16px]'>Teacher :-</h1>
                  <div>
                    <ul className='font-bold list-disc text-[15px] px-5'>
                      <li>A Pioneer In Organic Farming</li>
                      <li>Experienced Agricultural Workers</li>
                      <li>Department Wise Lecturers -  6</li>
                      <li>Meeting Pioneer Activists in Their Fields – 3</li>
                      <li>A Meeting Of Experts In Painting, Clay Sculpture, Pottery</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className='bg-[#C5D3AF] p-3' ref={ref}>
        <div className=''>
          <h1 className='font-bold text-lg md:text-xl'>To Participate In Training :-</h1>
        </div>
        <div className='flex flex-col bg-[#C5D3AF]  mt-5 p-2 md:p-5 rounded-md'>
          <div className='flex '>
            <div className='flex flex-col w-1/2 md:w-1/4'>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="name">Name </label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="address">Address </label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="phoneno">Mobile No</label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="email">Email</label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="days">Training Program You Wish To Participate</label>
              <label className='my-3 text-gray-800 font-semibold' htmlFor="members">Participating Number Of Persons</label>
            </div>
            <div className='flex flex-col w-1/2 md:w-3/4 px-5'>
              <input id='name' name='name' onChange={handleChange} value={input.name} className='my-2 bg-[#6A8275]   focus:outline-none rounded-lg px-2 py-1' type="text" />
              <input id='address' name='address' onChange={handleChange} value={input.address} className='my-2 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="text" />
              <input id='phoneno' name='phoneno' onChange={handleChange} value={input.phoneno} className='my-2 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="number" />
              <input id='email' name='email' onChange={handleChange} value={input.email} className='my-2 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="mail" />
              <div className='flex items-center my-2   rounded-lg px-2 py-1'>
                <select className='bg-[#6A8275] p-1 rounded  focus:outline-none' onChange={handleChange} name="days" id="days">
                  <option className='bg-[#6A8275]' value="null">Choose Practise </option>
                  <option className='bg-[#6A8275]' value="1">1 Day Practise</option>
                  <option className='bg-[#6A8275]' value="7">7 Days Practise</option>
                  <option className='bg-[#6A8275]' value="30">30 Days Practise</option>
                </select>
              </div>
              <input id='members' name='members' onChange={handleChange} value={input.members} className='my-9 lg:my-4 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="number" />
            </div>

          </div>
          <div className=''>
            <label className='my-3 text-gray-800 font-semibold' htmlFor="feedback">Your Comments To Improve The School :- </label>
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

export default PalliKoodamEnglish