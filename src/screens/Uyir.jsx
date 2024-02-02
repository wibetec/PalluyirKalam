// //ASSETS
// import UyirLogo from '../assets/images/Uyir/uyirlogo.png';
// import Image1 from '../assets/images/Uyir/image1.png';
// import Image2 from '../assets/images/Uyir/image2.png';
// import Image3 from '../assets/images/Uyir/image3.png';
// import { getTrees } from '../assets/text/uyirText';

// import Appbar from '../components/Appbar';
// import { useEffect, useRef, useState } from 'react';
// import { validateFields } from '../utils/validate';
// import { navigateWhatsapp } from '../utils/whatsapp';



// const Uyir = () => {
//   const [phase1, setPhase1] = useState([])
//   const [phase2, setPhase2] = useState([])
//   const [phase3, setPhase3] = useState([])
//   useEffect(() => {
//     const { phase1, phase2, phase3 } = getTrees();
//     setPhase1(phase1);
//     setPhase2(phase2);
//     setPhase3(phase3);
//   }, [])
//   const initialInput = {
//     name: '',
//     address: '',
//     phoneno: '',
//     email: '',
//     businessName: '',
//     yours: '',
//     feedback: '',
//     service: ''
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
//       input.businessName,
//       input.yours,
//       input.feedback,
//       input.service
//     ])
//     if (isInvalid) {
//       return setError("All Fields Are Required...!")
//     }
//     setError(null)

//     navigateWhatsapp({
//       fields: input,
//       from: "Uyir"
//     });
//   }
//   const ref = useRef(null)
//   const handleLearnMore = () => {
//     ref.current?.scrollIntoView({ behavior: 'smooth' })
//   }
//   return (
//     <main className='h-full'>

//       {/* SECTION-1 */}
//       <section className='bg-[#E1B996] pb-5'>
//         <div className="container p-4  mx-auto">
//           <Appbar />
//           <div className='flex flex-col mt-8'>
//             <div className=" m-1  flex justify-center">
//               <img className='w-48' src={UyirLogo} alt="உயிர்" />
//             </div>
//             <div className=" m-0.5 ">
//               <h5 className='text-center font-bold text-sm'>மரம் நடவு மையம்</h5>
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
//       <section className='bg-[#6A8275] p-5'>
//         <div className="container p-4  mx-auto">
//           <h1 className='font-bold text-lg'>பயிற்சி திட்டங்கள் :-</h1>
//           <ul className='list-disc w-3/4 ml-auto mt-2 font-bold text-[15px]'>
//             <li>மர கன்றுகள்</li>
//             <li>மர  போத்து வளர்ப்பு</li>
//             <li>விதை பந்து முறை</li>
//           </ul>
//           <p className='mt-3 ml-5 font-bold text-[14px]'>போன்றபல வழி முறைகள் பின்பற்றப்படுகிறது.</p>
//         </div>
//       </section>

//       {/* SECTION-3 */}
//       <section className='bg-[#90A24E] p-5'>
//         <div className="container p-4  mx-auto text-center text-[15px] font-bold">
//           <h5 className='my-1'>இந்த முறைகளில் சில சேவை அமைப்புகளும் , தனியார் நிறுவனங்களும் சாலைகள் , நீர் நிலைகள் , பொது இடங்கள் , மரம் வளர்க்கும் ஆர்வமுள்ள தனி நபர் இடங்களிலும் மர கன்றுகளை நடவு செய்ய தயாராக உள்ளன.</h5>
//         </div>
//       </section>

//       {/* SECTION-3.5 */}
//       <section className='bg-[#E1B996]  p-5'>
//         <div className="container p-4  mx-auto text-center text-[13px] font-bold">
//           <h5 className='my-1 text-[15px]'>அவ்வாறு தயாராக உள்ள உங்கள் நிறுவனத்துடன் இணைந்து பயணிக்க - எங்கள் உயிர் அமைப்பு தயாராக உள்ளது.</h5>
//         </div>
//       </section>

//       {/* SECTION-4 */}
//       <section className='bg-[#6A8275] p-5'>
//         <div className="container p-4  mx-auto">
//           <h1 className='text-lg font-bold  '>மற்ற மரம் நடவு நிகழ்வுகளில் இருந்து உயிர் - மரம் நடவு மையம் எவ்வாறு வேறுபடுகிறது :-</h1>

//           {/* SECTION-4-i */}
//           <div className='my-5'>
//             <h1 className='font-bold text-lg'>போத்து நடவு :</h1>
//             <div className="flex flex-wrap-reverse mt-3 w-[85%] ml-auto items-center">
//               <div className="  w-full md:w-1/2 ">
//                 <ul className='list-disc font-bold text-[15px] my-2'>
//                   <li>10 அடி உயரம்</li>
//                   <li>கால்நடைகளால் பாதிப்பு இல்லை </li>
//                   <li>விரைவான வளர்ச்சி</li>
//                 </ul>
//               </div>
//               <div className="  w-full md:w-1/2 p-1 ">
//                 <img src={Image1} alt="உயிர்" className='w-56' />
//               </div>
//             </div>
//           </div>

//           {/* SECTION-4-ii */}
//           <div className='my-5'>
//             <h1 className='font-bold text-lg'>பாதுகாப்பு & விளம்பரம் :-</h1>
//             <div className="flex flex-wrap-reverse mt-3 w-[85%] ml-auto items-center">
//               <div className="  w-full md:w-1/2 ">
//                 <ul className='list-disc font-bold text-[15px] my-2'>
//                   <li>மர பாதுகாப்பு வலை</li>
//                   <li>உங்கள் நிறுவத்தின் விளம்பரம் </li>
//                   <li>தெளிவான மரங்களின் எண்ணிக்கை</li>
//                 </ul>
//               </div>
//               <div className="  w-full md:w-1/2 p-1 ">
//                 <img src={Image2} alt="உயிர்" className='w-48' />
//               </div>
//             </div>
//           </div>

//           {/* SECTION-4-iii*/}
//           <div className='my-5'>
//             <h1 className='font-bold text-lg'>சேவை முறை :-</h1>
//             <div className="flex flex-wrap-reverse mt-3 w-[85%] ml-auto items-center">
//               <div className="  w-full md:w-1/2 ">
//                 <ul className='list-disc font-bold text-[15px] md:my-2'>
//                   <li>வளர்ப்பு</li>
//                   <li>நிலம் தொடர்பு உடைவர்களிடம் முறையான அனுமதி கடிதம் பெறுதல் .( தனி நபர் நிலம் , பொது பணி துறை , வனம் , ஊராட்சி , கிராம நிர்வாகி போன்றவை ).</li>
//                   <li>நடவு</li>
//                   <li>அரசு துறைகளில் பதிவு ( வனம் ,ஊராட்சி , கிராம நிர்வாகி ).</li>
//                 </ul>
//               </div>
//               <div className="  w-full md:w-1/2 p-1 ">
//                 <ul className='list-disc font-bold text-[15px] md:m-2'>
//                   <li>நீர் பாய்ச்சுதல்.</li>
//                   <li>உரமிடல்</li>
//                   <li>வளர்ச்சி ஊக்கி இடுதல்.</li>
//                   <li>பூச்சி கட்டுப்பாடு.</li>
//                   <li>வளர்ச்சி காலத்திற்க்கு பின் நிறுனத்திடம் ஒப்படைத்தல்.</li>
//                   <li>உங்கள் நிறுவனம் தொடர் பராமரிப்பு விரும்பும் பட்சத்தில் தொடர் ஒப்பந்தம்  இடுதல்.</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* SECTION-4-iv */}
//           <div className='my-5'>
//             <h1 className='font-bold text-lg'>பகுக்கப்பட்ட சேவை கட்டண முறை( ஒப்பந்த அடிப்படையில்) :-</h1>
//             <div className="flex flex-wrap-reverse mt-3 w-[85%] ml-auto items-center">
//               <div className="  w-full md:w-1/2 ">
//                 <ul className='list-disc font-bold text-[15px] my-2'>
//                   <li>சேவைகளின் ஒவ்வொரு நிலைகளை கடக்கும் சமயத்தில் மட்டும் பண  பறிமாற்றம்.</li>
//                   <li>நடப்பு கணக்கு பரிவர்த்தனை வசதி.</li>
//                   <li> GST உள்ளடக்கிய  முறையான ரசீது வசதி.</li>
//                   <li>உங்கள் நிறுவனம் பொது சேவைகளை வழங்குவது தொடர்பான ஆவணங்களை பெற்றுதருவது</li>
//                 </ul>
//               </div>
//               <div className="  w-full md:w-1/2 p-1 ">
//                 <img src={Image3} alt="உயிர்" className='w-48' />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>


//       {/* SECTION-5 */}
//       <section className='bg-[#E1B996] p-5 '>
//         <div className="container p-4  mx-auto">
//           <h1 className='font-bold text-lg'>நமது பகுதிக்கு ஏற்ற மரபு மர வகைகள்  பறவை மற்றும் பிற உயிரினங்களுக்கு வாழ்விடம் , உணவு தரக்கூடிய மர வகைகளை நாங்கள் முதன்மை படுத்துகிறோம் அவை :-</h1>
//           <div className='my-5 font-bold text-[15px] flex flex-wrap'>
//             <div className="w-full my-0 md:w-1/3">
//               <ul className='text-[15px]'>
//                 {
//                   phase1.map((phase, index) => <li key={`${index}/${phase}`} className='my-1'>{phase}</li>)
//                 }
//               </ul>
//             </div>
//             <div className="w-full my-0 md:w-1/3">
//               <ul className='text-[15px]'>
//                 {
//                   phase2.map((phase, index) => <li key={`${index}/${phase}`} className='my-1'>{phase}</li>)
//                 }
//               </ul>
//             </div>
//             <div className="w-full my-0 md:w-1/3">
//               <ul className='text-[15px]'>
//                 {
//                   phase3.map((phase, index) => <li key={`${index}/${phase}`} className='my-1'>{phase}</li>)
//                 }
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SECTION-6 */}
//       <section className='bg-[#90A24E] p-5'>
//         <div className="container p-4  mx-auto ">
//           <h1 className='font-bold text-lg'>பறவைகளுக்கு உணவளித்தல் சிறப்பு திட்டம்.</h1>
//           <div className='text-[15px] mt-5 text-center'>
//             <h5 className='my-3 font-bold'>உலகம் மனிதர்களின் ஆக்கிரமிப்பு பிடியில் உள்ளது. இயற்கை தனது சீற்றங்களால் மனிதர்கள் பிடியில் இருந்து தனக்கான மாற்றங்களை பல ஆயிரக்கணக்கான ஆண்டுகளாக உண்டாக்கி வருகிறது.</h5>
//             <h5 className='my-3 font-bold'>இதில் பெரிதும் பாதிக்கப்படுவது மனிதர்களை விட பிற உயிரினங்களே…</h5>
//             <h5 className='my-3 font-bold'>இதை சமன் செய்யும் நோக்கத்தில் உலகெங்கிலும் சில மனிதர்கள்  செயல்பட்டு வருகின்றனர்… </h5>
//             <h5 className='my-3 font-bold'>பல்லுயிர் களம் - உயிர் திட்டத்தின் ஒரு பகுதியாக   பறவைகளுக்கு - அதன் வகைக்கு ஏற்ப  இயல்பு மாறாமல் உணவு வழங்க ஆய்வு மேற்கொள்கிறது…</h5>
//             <h5 className='my-3 font-bold'>அதன் படி அலகு நீண்ட , நடுத்தர , சிறிய , தானிய , தாவர  உண்ணிகள்  , பூச்சி உண்ணிகள் , மாமிச உண்ணிகள் என பல்வேறு பறவை இனங்கள் உண்டு என்பது நாம் அனைவரும் அறிந்ததே …</h5>
//             <h5 className='my-3 font-bold'>இவை அனைத்திற்கும் சரியான உணவு , நீர் , இருப்பிடம் உள்ளதா ?</h5>
//             <h5 className='my-3 font-bold'>மனிதர்கள் நமது சுயநல சிந்தனையில் விளைந்த ராட்சத தொழிற்சாலைகள் , கான்கிரீட் காடுகள் , மாசுபட்ட கடல் , ஆறு , நீர் நிலைகள் , தொடர்ந்து அழிக்கப்பட்டு வரும் வனங்கள் அதில் பறவைகள் தானாக உருவாக்கிய அதன் கூடுகளை மனிதர்களால் திருப்பி தர இயலுமா ?</h5>
//             <h5 className='my-3 font-bold'>பறவைகள் தனது உணவு தேடலுக்கு கிடைக்கும் ஒரே பதில் விவசாய நிலங்களே…</h5>
//             <h5 className='my-3 font-bold'>இந்த சூழ்நிலையில் உயிரினங்களுக்கான உணவை தரும் கடமை விவசாயிகளுக்கு மட்டுமா ? தொழில் வளர்ச்சி வெறி கொண்டவர்கள் மற்றும் கான்கிரீட் காதலர்கள் நாம் என்ன செய்ய போகிறோம் ?</h5>
//             <h5 className='my-3 font-bold'>இந்த சிந்தனயை பிறர்க்கு விதைப்பதும் , பல்லுயிர் கள - பகுதியில செயல்படுத்துவதும் ,  பல்வேறு பகுதிகளில் இயற்கை தன்மை மாறாமல் உணவளிக்கும் வாய்ப்புகள் குறித்த ஆய்வினையும் செயல்படுத்துகிறது நமது உயிர் திட்டம் .</h5>
//             <h5 className='my-3 font-bold'>இதில் நீங்களும் பங்கேற்கலாம்.</h5>
//           </div>
//         </div>

//       </section>

//       {/* FORM */}
//       <section ref={ref} className='bg-[#C5D3AF] p-3'>
//         <div className=''>
//           <h1 className='font-bold text-lg md:text-xl'>மர நடவு தொடர்பான எங்கள் சேவையை பெற :-:-</h1>
//         </div>
//         <div className='flex flex-col bg-[#C5D3AF]  mt-5 p-2 md:p-5 rounded-md'>
//           <div className='flex '>
//             <div className='flex flex-col w-1/2 md:w-1/4'>
//               <label className='my-3 text-gray-800 font-semibold' htmlFor="name">பெயர் </label>
//               <label className='my-3 text-gray-800 font-semibold' htmlFor="address">முகவரி </label>
//               <label className='my-3 text-gray-800 font-semibold' htmlFor="phoneno">அலைபேசி எண்</label>
//               <label className='my-3 text-gray-800 font-semibold' htmlFor="email">மின்னஞ்சல்</label>
//               <label className='my-3 text-gray-800 font-semibold' htmlFor="service">நீங்கள் பெற விரும்பும் சேவை </label>
//               <label className='my-3 text-gray-800 font-semibold' htmlFor="yours">உங்கள் அமைப்பை பற்றி  </label>
//               <label className='my-3 text-gray-800 font-semibold' htmlFor="businessName">தனியார் நிறுவனம் எனில்உங்கள் நிறுவனத்தின் பெயர்</label>
//             </div>
//             <div className='flex flex-col w-1/2 md:w-3/4 px-5'>
//               <input id='name' name='name' onChange={handleChange} value={input.name} className='my-2 bg-[#6A8275]   focus:outline-none rounded-lg px-2 py-1' type="text" />
//               <input id='address' name='address' onChange={handleChange} value={input.address} className='my-2 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="text" />
//               <input id='phoneno' name='phoneno' onChange={handleChange} value={input.phoneno} className='my-2 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="number" />
//               <input id='email' name='email' onChange={handleChange} value={input.email} className='my-2 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="mail" />
//               <div className='flex items-center my-2 p-1'>
//                 <select className='bg-[#6A8275]  rounded-lg   focus:outline-none h-8 w-32' onChange={handleChange} name="service" id="service">
//                   <option className='bg-[#6A8275]' value="null">---</option>
//                   <option className='bg-[#6A8275]' value="Tree Plating">மரம் நடவு</option>
//                   <option className='bg-[#6A8275]' value="Birds Feeding">பறவைகள் உணவு</option>
//                 </select>
//               </div>
//               <div className='flex items-center my-2 p-1 mt-5 md:mt-0'>
//                 <select className='bg-[#6A8275]  rounded-lg   focus:outline-none h-8 w-32' onChange={handleChange} name="yours" id="yours">
//                   <option className='bg-[#6A8275]' value="null">Choose Practise </option>
//                   <option className='bg-[#6A8275]' value="Individual">தனி நபர்</option>
//                   <option className='bg-[#6A8275]' value="Charity Company">தொண்டு நிறுவனம்</option>
//                   <option className='bg-[#6A8275]' value="Private Company">தனியார் நிறுவனம்</option>
//                 </select>
//               </div>
//               <input id='businessName' name='businessName' onChange={handleChange} value={input.businessName} className='my-9 lg:my-4 bg-[#6A8275]  focus:outline-none rounded-lg px-2 py-1' type="text" />
//             </div>

//           </div>
//           <div className=''>
//             <label className='my-3 text-gray-800 font-semibold' htmlFor="feedback">எங்களை மேம்படுத்த உங்கள் கருத்துகள் :- </label>
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

// export default Uyir

import React, { useContext, useEffect } from 'react'
import UyirTamil from './tamil/UyirTamil'
import UyirEnglish from './english/UyirEnglish'
import { Language } from '../hooks/Language'

const Uyir = () => {
  const { language } = useContext(Language)
  useEffect(()=>{window.scrollTo(0,0)},[])
  return (
    <>
    {language?<UyirTamil/>:<UyirEnglish/>}
    </>
  )
}

export default Uyir