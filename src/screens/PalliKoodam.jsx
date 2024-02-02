// import React, { useRef, useState } from 'react'
// import Appbar from '../components/Appbar'
// import { validateFields } from '../utils/validate';

// //ASSETS
// import PallikoodamLogo from '../assets/images/PalliKoodam/pallikoodamlogo.png';
// import { navigateWhatsapp } from '../utils/whatsapp';

// const PalliKoodam = () => {
//   const initialInput = {
//     name: '',
//     address: '',
//     phoneno: '',
//     email: '',
//     members: '',
//     days: '',
//     feedback: ''
//   }
//   const [input, setInput] = useState(initialInput);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInput((prev) => {
//       return {
//         ...prev,
//         [name]: value
//       }
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const isInvalid = validateFields([
//       input.name,
//       input.address,
//       input.phoneno,
//       input.email,
//       input.members,
//       input.days,
//       input.feedback
//     ])
//     if (isInvalid) {
//       return setError("All Fields Are Required...!")
//     }
//     setError(null)
//     navigateWhatsapp({
//       fields: input,
//       from: "PalliKoodam"
//     });
//   }
//   const ref = useRef(null);
//   const handleLearnMore = () => {
//     ref.current?.scrollIntoView({ behavior: 'smooth' })
//   }
//   return (
//     <main className='h-full'>
//       {/* SECTION-1 */}
//       <section className='bg-[#6A8275] pb-5'>
//         <div className="container p-4  mx-auto">
//           <Appbar />
//           <div className='flex flex-col mt-8'>
//             <div className=" m-1  flex justify-center">
//               <img className='w-48' src={PallikoodamLogo} alt="காணி நிலம்" />
//             </div>
//             <div className=" m-3 ">
//               <h1 className='font-extrabold text-center text-3xl sub-1'>பள்ளிக்கூடம்</h1>
//             </div>
//             <div className=" m-0.5 ">
//               <h5 className='text-center font-bold text-sm'>அனுபவ கல்வி மற்றும் கலை மையம்</h5>
//             </div>
//             <div className=" mt-7  flex justify-center">
//               <button onClick={handleLearnMore} className='text-lg md:text-sm hover:bg-[#9a57b3] bg-[#432F4A] text-white px-3 py-1 rounded-xl font-semibold'>
//                 மேலும் அறிய
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SECTION-2 */}
//       <section className='bg-[#E1B996] p-5'>
//         <div className="container p-1  mx-auto">
//           <div>
//             <h3 className='flex flex-col text-center text-[15px] font-bold'>
//               <span> உலகெங்கும் இயற்கை விவசாயம் பரவ வேண்டும்.</span>
//               <span>ஊர் தோரும் இயற்கை  விவசாய பயிற்சி கூடம் அமைய வேண்டும்.</span>
//               <span>— கோ.நம்மாழ்வார் .</span>
//             </h3>
//           </div>
//         </div>
//       </section>

//       {/* SECTION-3 */}
//       <section className='bg-[#90A24E] p-5'>
//         <div className="container p-1  mx-auto">
//           <div>
//             <h3 className='flex flex-col text-center text-[15px] font-bold'>நம்மாழ்வார் கனவுகளை நனவாக்க லட்சக்கணக்கான இளைஞர்கள் இயற்கை விவசாய பணிகளில் ஈடுபட்டு வருகின்றனர்.</h3>
//           </div>
//         </div>
//       </section>

//       {/* SECTION-4 */}
//       <section className='bg-[#C5D3AF] p-5'>
//         <div className="container p-1  mx-auto">
//           <div>
//             <h3 className='flex flex-col text-center text-[15px] font-bold'>
//               நம்மாழ்வார் வழியில் பயணத்தை தொடங்கிய நம் பல்லுயிர் களம் - அமைப்பு பல்வேறு செயல் திட்டங்களை கொண்டிருந்தாலும் அதில் மிக முக்கியமானதாக   கருதுவது - பள்ளிகூடம் திட்டமே...</h3>
//           </div>
//         </div>
//       </section>

//       {/* SECTION-5 */}
//       <section className='bg-[#6A8275] p-5'>
//         <div className="container p-1  mx-auto">
//           <div>
//             <h3 className='flex flex-col text-center text-[15px] font-bold'>
//               <span className='my-1'>பள்ளிகூடம் - இயற்கை விவசாய பயிற்சிகள் மற்றும் பகுதி சார்ந்தமரபு கலைகளையும் செயல் வழி பயிற்றுவிக்கிறது.</span>
//               <span className='my-1'>விவசாயம் ஒரு தொழில் மட்டுமல்ல அது ஒரு வாழ்வியல் என்ற நம்மாழ்வார் அவர்களின் வார்த்தைகளையும் பள்ளிகூடம் பயிற்சிகளில் பங்கு கொள்பவர்களுக்கு உணர்த்தி வருகிறோம்.</span>
//             </h3>
//           </div>
//         </div>
//       </section>

//       {/* SECTION-6 */}
//       <section className='bg-[#E1B996] p-5'>
//         <div className="container p-1  mx-auto">
//           <h2 className='font-bold text-lg '>பயிற்சி திட்டங்கள்</h2>

//           {/* SECTION-6-i */}
//           <div className='py-5  mx-auto'>
//             <div className='bg-[#6A8275]'>
//               <div className='flex justify-between'>
//                 <h5 className=' w-1/2 px-1 border text-center font-bold border-black'>1 நாள் பயிற்சி   </h5>
//                 <h5 className=' w-1/2 px-1 border text-center font-bold border-black'>காலை 8-மாலை 5</h5>
//               </div>
//               <div className='bg-[#90A24E] flex flex-col p-5'>
//                 <div>
//                   <h1 className='font-bold text-center text-[16px]'>பாடங்கள் </h1>
//                   <div className='mt-3 flex  flex-col md:flex-row justify-between'>
//                     <ul className='font-bold list-disc text-[15px] px-5 md:px-16'>
//                       <li>வகுப்பறை  1 மணி நேரம்</li>
//                       <li>களம் சுற்ற 1 மணி நேரம்</li>
//                       <li>உணவு 1 மணி நேரம்</li>
//                       <li>கள பயிற்சி  2 மணி நேரம்</li>
//                     </ul>
//                     <ul className='font-bold list-disc text-[15px] px-5 md:px-16'>
//                       <li>நுண்கலை  2 மணி நேரம்</li>
//                       <li>கலந்துரையாடல் 1 மணி நேரம்</li>
//                       <li>சான்றிதழ்  15 நிமிடம்</li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div>
//                   <h1 className='font-bold my-4 text-[16px]'>பயிற்றுனர் :-</h1>
//                   <div>
//                     <ul className='font-bold list-disc text-[15px] px-5'>
//                       <li>முன்னோடி இயற்கை விவசாயி</li>
//                       <li>அனுபவம் மிக்க விவசாய பணியாளர்கள்</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* SECTION-6-ii */}
//           <div className='py-5  mx-auto'>
//             <div className='bg-[#6A8275]'>
//               <div className='flex justify-between'>
//                 <h5 className=' w-1/2 px-1 border text-center font-bold border-black'>7 நாள் பயிற்சி   </h5>
//                 <h5 className=' w-1/2 px-1 border text-center font-bold border-black'>7 - பகல்  , 2- இரவு</h5>
//               </div>
//               <div className='bg-[#90A24E] flex flex-col p-5'>
//                 <div>
//                   <h1 className='font-bold text-center text-[16px]'>பாடங்கள் </h1>
//                   <div className='mt-3 flex  flex-col md:flex-row justify-between'>
//                     <ul className='font-bold list-disc text-[15px] px-5 md:px-16'>
//                       <li>வகுப்பறை</li>
//                       <li>வடிவமைப்பு/</li>
//                       <li>செயல்</li>
//                       <li>தற்சார்பு</li>
//                       <li>வணங்குதல்</li>
//                       <li>பல்லுயிர்</li>
//                       <li>நுண்கலை</li>
//                       <li>வணிகம்</li>
//                       <li>மேளான்மை</li>
//                     </ul>
//                     <ul className='font-bold list-disc text-[15px] px-5 md:px-16'>
//                       <li>மூலிகை</li>
//                       <li>உடற்கட்டு</li>
//                       <li>மனகட்டு</li>
//                       <li>உணவுமுறை</li>
//                       <li>மருத்துவம்</li>
//                       <li>ஆடல்,பாடல்</li>
//                       <li> உரையாடல்</li>
//                       <li>சான்றிதழ்</li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div>
//                   <h1 className='font-bold my-4 text-[16px]'>பயிற்றுனர் :-</h1>
//                   <div>
//                     <ul className='font-bold list-disc text-[15px] px-5'>
//                       <li>முன்னோடி இயற்கை விவசாயி</li>
//                       <li>அனுபவம் மிக்க விவசாய பணியாளர்கள்</li>
//                       <li>துறை சார்ந்த விரிவுரையாளர்கள்-4.</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* SECTION-6-iii */}
//           <div className='py-5  mx-auto'>
//             <div className='bg-[#6A8275]'>
//               <div className='flex justify-between'>
//                 <h5 className=' w-1/2 px-1 border text-center font-bold border-black'>30 நாள் பயிற்சி   </h5>
//                 <h5 className=' w-1/2 px-1 border text-center font-bold border-black'>30 - பகல்  , 8 - இரவு</h5>
//               </div>
//               <div className='bg-[#90A24E] flex flex-col p-5'>
//                 <div>
//                   <h1 className='font-bold text-center text-[16px]'>பாடங்கள் </h1>
//                   <div className='mt-3 flex  flex-col md:flex-row justify-between'>
//                     <ul className='font-bold list-disc text-[15px] px-5 md:px-16'>
//                       <li>வகுப்பறை</li>
//                       <li>வடிவமைப்பு</li>
//                       <li>செயல்</li>
//                       <li>தற்சார்பு</li>
//                       <li>வணங்குதல்</li>
//                       <li>பல்லுயிர்</li>
//                       <li>நுண்கலை</li>
//                       <li>வணிகம்</li>
//                       <li>மேளான்மை</li>
//                       <li>மூலிகை</li>
//                       <li>உடற்கட்டு</li>
//                       <li>மனகட்டு</li>
//                     </ul>
//                     <ul className='font-bold list-disc text-[15px] px-5 md:px-16'>
//                       <li>உணவுமுறை</li>
//                       <li>மருத்துவம்</li>
//                       <li>ஆடல்,பாடல்</li>
//                       <li>உரையாடல்</li>
//                       <li>மதிப்பிடல்</li>
//                       <li>வேலை வாய்ப்பு</li>
//                       <li>நி்ர்வாகம்</li>
//                       <li>வணிக வாய்ப்பு</li>
//                       <li>வணிக வடிவமைப்பு</li>
//                       <li>முதலீட்டாளர் இணைப்பு</li>
//                       <li>ஓவியம் </li>
//                       <li>களி மண்  சிற்பம் </li>
//                       <li>மண்பாண்டம்</li>
//                       <li>சான்றிதழ்</li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div>
//                   <h1 className='font-bold my-4 text-[16px]'>பயிற்றுனர் :-</h1>
//                   <div>
//                     <ul className='font-bold list-disc text-[15px] px-5'>
//                       <li>முன்னோடி இயற்கை விவசாயி</li>
//                       <li>அனுபவம் மிக்க விவசாய பணியாளர்கள்</li>
//                       <li>துறை சார்ந்த விரிவுரையாளர்கள் -  6</li>
//                       <li>முன்னோடி செயல்பாட்டாளர்களை அவர்கள்  களங்களில் சந்திப்பது - 3</li>
//                       <li>ஓவியம் , களி மண் சிற்பம் , மண்பாண்டம் தயாரிப்பு வல்லுனர்கள்  சந்திப்பு</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FORM */}
//       <section className='bg-[#C5D3AF] p-3' ref={ref}>
//         <div className=''>
//           <h1 className='font-bold text-lg md:text-xl'>பயிற்சிகளில் பங்குகொள்ள :-</h1>
//         </div>
//         <div className='flex flex-col bg-[#C5D3AF]  mt-5 p-2 md:p-5 rounded-md'>
//           <div className='flex '>
//             <div className='flex flex-col w-1/2 md:w-1/4'>
//               <label className='my-3 text-gray-800 font-semibold' htmlFor="name">பெயர் </label>
//               <label className='my-3 text-gray-800 font-semibold' htmlFor="address">முகவரி </label>
//               <label className='my-3 text-gray-800 font-semibold' htmlFor="phoneno">அலைபேசி எண்</label>
//               <label className='my-3 text-gray-800 font-semibold' htmlFor="email">மின்னஞ்சல்</label>
//               <label className='my-3 text-gray-800 font-semibold' htmlFor="days">பங்கேற்க விரும்பும் பயிற்சி</label>
//               <label className='my-3 text-gray-800 font-semibold' htmlFor="members">பங்குகொள்ளும் நபர்கள் எண்ணிக்கை</label>
//             </div>
//             <div className='flex flex-col w-1/2 md:w-3/4 px-5'>
//               <input id='name' name='name' onChange={handleChange} value={input.name} className='my-2 bg-[#6A8275]   focus:outline-none rounded-lg px-2 py-1' type="text" />
//               <input id='address' name='address' onChange={handleChange} value={input.address} className='my-2 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="text" />
//               <input id='phoneno' name='phoneno' onChange={handleChange} value={input.phoneno} className='my-2 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="number" />
//               <input id='email' name='email' onChange={handleChange} value={input.email} className='my-2 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="mail" />
//               <div className='flex items-center my-2   rounded-lg px-2 py-1'>
//                 <select className='bg-[#6A8275] p-1 rounded  focus:outline-none' onChange={handleChange} name="days" id="days">
//                   <option className='bg-[#6A8275]' value="null">Choose Practise </option>
//                   <option className='bg-[#6A8275]' value="1">1 நாள் பயிற்சி</option>
//                   <option className='bg-[#6A8275]' value="7">7 நாள் பயிற்சி</option>
//                   <option className='bg-[#6A8275]' value="30">30 நாள் பயிற்சி</option>
//                 </select>
//               </div>
//               <input id='members' name='members' onChange={handleChange} value={input.members} className='my-9 lg:my-4 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="number" />
//             </div>

//           </div>
//           <div className=''>
//             <label className='my-3 text-gray-800 font-semibold' htmlFor="feedback">பள்ளிகூடம் மேலும் சீர்பட உங்கள் கருத்துகள் :- </label>
//             <div className='flex justify-center mt-3'>
//               <textarea onChange={handleChange} value={input.feedback} className="p-2 bg-[#6A8275] rounded-md focus:outline-none md:w-full" name="feedback" id="feedback" cols="35" rows="8"></textarea>
//             </div>
//           </div>
//           <div className='flex justify-center mt-5 flex-col '>
//             <button onClick={handleSubmit} className='bg-[#714E7E] mx-auto w-1/3 hover:bg-[#9a57b3] text-white px-2 py-1 font-semibold rounded-lg'>
//               அனுப்புக
//             </button>
//             {error && <p className='text-red-600 text-center font-bold'>{error}</p>}
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }

// export default PalliKoodam

import React, { useContext, useEffect } from 'react'
import PalliKoodamTamil from './tamil/PalliKoodamTamil'
import PalliKoodamEnglish from './english/PallikoodamEnglish'
import { Language } from '../hooks/Language'
const PalliKoodam = () => {
  const { language } = useContext(Language);
  useEffect(()=>{window.scrollTo(0,0)},[])
  return (
    <>
    {language?<PalliKoodamTamil/>:<PalliKoodamEnglish/>}
    </>
  )
}

export default PalliKoodam