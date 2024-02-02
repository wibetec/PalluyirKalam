// //ASSETS
// import { useRef, useState } from 'react';
// import ThottamLogo from '../assets/images/Thottam/thottamlogo.jpg';
// import { products } from '../assets/text/thottam.js'

// import Appbar from '../components/Appbar';
// import { validateFields } from '../utils/validate.js';
// import { navigateWhatsapp } from '../utils/whatsapp.js';
// import { useNavigate } from 'react-router-dom';

// const Thottam = () => {

//   const initialInput = {
//     name: '',
//     address: '',
//     phoneno: '',
//     email: '',
//     feedback: '',
//     service: ''
//   }
//   const [input, setInput] = useState(initialInput);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

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
//       input.feedback,
//       input.service
//     ])
//     if (isInvalid) {
//       return setError("All Fields Are Required...!")
//     }
//     setError(null)
//     navigateWhatsapp({
//       fields: input,
//       from: "Thottam"
//     });

//   }
//   const ref = useRef(null);
//   const handleLearnMore = () => {
//     ref.current?.scrollIntoView({ behavior: 'smooth' })
//   }
//   return (
//     <main className='h-full'>
//       {/* SECTION-1 */}
//       <section className='bg-[#C5D3AF] pb-5'>
//         <div className="container p-4  mx-auto">
//           <Appbar />
//           <div className='flex flex-col mt-8'>
//             <div className=" m-1  flex justify-center">
//               <img className='w-40 border-2 border-[#9a57b3] rounded-xl' src={ThottamLogo} alt="தோட்டம்" />
//             </div>
//             <div className=" m-0.5 mt-3 ">
//               <h5 className='text-center font-bold text-sm'>வீட்டு தோட்ட சேவைகள் அமைப்பு</h5>
//             </div>
//             <div className=" mt-7  flex justify-center">
//               <button onClick={handleLearnMore} className='text-lg md:text-sm hover:bg-[#9a57b3] bg-[#432F4A] text-white px-3 py-1 rounded-xl font-semibold'>
//                 மேலும் அறிய
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SECTIO-2 */}
//       <section className='bg-[#6A8275] p-5'>
//         <div className="container p-1  mx-auto">
//           <div>
//             <h3 className='font-bold text-[15px] my-3 text-center'>வீடுகளில் அமைக்கப்படும் வீட்டு தோட்டம் அல்லது  மாடி தோட்டங்களே தற்சார்பு வாழ்வியலின் முதல்படி.</h3>
//             <h3 className='font-bold text-[15px] my-3 text-center'>நமது அன்றாட உணவில் அரிசி , காய்கறி , பால்  போன்ற பல விவசாயம் சார்ந்த பொருட்கள் முக்கிய இடத்தை பிடித்துள்ளது.</h3>
//             <h3 className='font-bold text-[15px] my-3 text-center'>இந்த பொருட்களில் ரசாயன உரம் , பூச்சி கொல்லி இடப்பட்ட பொருட்களே 99 சதவீதம் கிடைக்கிறது.இவைகளே  இன்று பரவிவரும் இருதய , புற்று , சர்க்கரை நோய்களின் மூல காரணம் ஆகும்.   </h3>
//             <h3 className='font-bold text-[15px] my-3 text-center'>1 சதவீதம் ஆர்கானிக் என்ற பெயரில் கடைகளில் விற்கப்படும் பொருட்களின் உண்மை தன்மை கேள்விக்குறியாகவே உள்ளது.</h3>
//             <h3 className='font-bold text-[15px] my-3 text-center'>இயற்கை வேளாண்மை - பாரம்பரிய அரிசி , பருப்பு ரகங்கள்  இன்று பரவலாக கிடைக்கிறது.</h3>
//             <h3 className='font-bold text-[15px] my-3 text-center'>ஆனால் காய்கறி போன்ற எளிதில் பாதிப்பு அடையக்கூடிய பொருட்களை கிராமங்களில் இருந்து நகரங்களுக்கு கொண்டு சேர்ப்பது எளிதாக நடப்பதில்லை.</h3>
//             <h3 className='font-bold text-[15px] my-3 text-center'>இதை சமன் செய்ய உங்கள்  வீட்டில் அமைக்கும் தோட்டத்திற்கு தேவையான பொருட்களை தரமாகவும் , நியமான விலையிலும் தருகிறது. பல்லுயிர் களத்தின்  தோட்டம் - வீட்டு தோட்ட சேவைகள் அமைப்பு.</h3>
//           </div>
//         </div>
//       </section>

//       {/* SECTION-3 */}
//       <section className='bg-[#E1B996] p-5'>
//         <div className="container p-1  mx-auto">
//           <div>
//             <h1 className='text-[20px] font-bold '>பொருள் வகைகள் :-</h1>
//             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full mx-auto mt-5'>
//               {
//                 products.map((product, index) => (
//                   <div className='flex my-2 ' key={index}>
//                     <div className="mx-1 w-[40%]">
//                       <div className='flex h-28 justify-center items-center'>
//                         {product.image && <img className='h-full w-full object-cover rounded-xl border-2 border-[#432F4A]' src={product.image} alt={product.title} />}
//                         {!product.image && <div className='rounded-xl border-2 border-[#432F4A] w-full h-full flex  justify-center items-center'>
//                           <h3 className='font-bold text-[15px] text-center '>Image Will Be Upload Soon</h3>
//                         </div>}
//                       </div>
//                     </div>
//                     <div className="border-2 h-28 mx-1 bg-[#90A24E] rounded-xl  border-[#432F4A] w-[60%]">
//                       <div className='font-bold text-[15px] h-full flex justify-center items-center text-center'>
//                         <h3 className=''>{product.title}</h3>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               }

//             </div>
//           </div>
//           <div className='flex justify-center mt-4'>
//             <button onClick={()=>navigate('/kadai?category=7')} className='bg-[#90A24E] px-2 py-2 rounded-lg border-2 font-bold border-[#432F4A]'>தோட்ட பொருள்கள் வாங்க</button>
//           </div>
//         </div>
//       </section>

//       {/* FORM */}
//       <section ref={ref} className='bg-[#C5D3AF] p-3'>
//         <div className=''>
//           <h1 className='font-bold text-lg md:text-xl'>மர நடவு தொடர்பான எங்கள் சேவையை பெற :-
//             :-</h1>
//         </div>
//         <div className='flex flex-col bg-[#C5D3AF]  mt-5 p-2 md:p-5 rounded-md'>
//           <div className='flex '>
//             <div className='flex flex-col w-1/2 md:w-1/4'>
//               <label className='my-3 text-gray-800 font-semibold' htmlFor="name">பெயர் </label>
//               <label className='my-3 text-gray-800 font-semibold' htmlFor="address">முகவரி </label>
//               <label className='my-3 text-gray-800 font-semibold' htmlFor="phoneno">அலைபேசி எண்</label>
//               <label className='my-3 text-gray-800 font-semibold' htmlFor="email">மின்னஞ்சல்</label>
//               <label className='my-3 text-gray-800 font-semibold' htmlFor="service">எதிர்பார்க்கும் சேவை </label>
//             </div>
//             <div className='flex flex-col w-1/2 md:w-3/4 px-5'>
//               <input id='name' name='name' onChange={handleChange} value={input.name} className='my-2 bg-[#6A8275]   focus:outline-none rounded-lg px-2 py-1' type="text" />
//               <input id='address' name='address' onChange={handleChange} value={input.address} className='my-2 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="text" />
//               <input id='phoneno' name='phoneno' onChange={handleChange} value={input.phoneno} className='my-2 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="number" />
//               <input id='email' name='email' onChange={handleChange} value={input.email} className='my-2 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="mail" />
//               <div className='flex items-center my-2 p-1'>
//                 <select className='bg-[#6A8275]  rounded-lg   focus:outline-none h-8 w-32' onChange={handleChange} name="service" id="service">
//                   <option className='bg-[#6A8275]' value="null">-----</option>
//                   <option className='bg-[#6A8275]' value="Home Terrace Garden">வீட்டு மாடி தோட்டம்</option>
//                   <option className='bg-[#6A8275]' value="Home Land">வீடு அருகில் தரை</option>
//                   <option className='bg-[#6A8275]' value="Garden Products Only">தோட்ட பொருள்கள் மட்டும்</option>
//                   <option className='bg-[#6A8275]' value="Garden Advice Only">தோட்ட ஆலோசனை மட்டும் </option>
//                 </select>
//               </div>
//             </div>

//           </div>
//           <div className=''>
//             <label className='my-3 text-gray-800 font-semibold' htmlFor="feedback">இத்திட்டம் மேம்பட உங்கள் கருத்துகள் :-</label>
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

// export default Thottam

import React, { useContext, useEffect } from 'react'
import ThottamTamil from './tamil/ThottamTamil'
import ThottamEnglish from './english/ThottamEnglish'
import { Language } from '../hooks/Language'

const Thottam = () => {
  const { language } = useContext(Language);
  useEffect(()=>{window.scrollTo(0,0)},[])
  return (
    <>
    {language?<ThottamTamil/>:<ThottamEnglish/>}
    </>
  )
}

export default Thottam