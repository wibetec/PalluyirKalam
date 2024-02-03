import React, { useRef, useState } from 'react'
import Appbar from '../../components/Appbar'
import { validateFields } from '../../utils/validate';
//ASSESTS
import UlaaLogo from '../../assets/images/Ulaa/ulaalogo.png';
import Image1 from '../../assets/images/Ulaa/image1.png';
import Image2 from '../../assets/images/Ulaa/image2.png';
import Image3 from '../../assets/images/Ulaa/image3.png';
import Image4 from '../../assets/images/Ulaa/image4.png';
import Image5 from '../../assets/images/Ulaa/Image5.png';
import Image6 from '../../assets/images/Ulaa/image6.png';
import Image7 from '../../assets/images/Ulaa/image7.png';
import { navigateWhatsapp } from '../../utils/whatsapp';


const UlaaTamil = () => {
  const initialInput = {
    name: '',
    address: '',
    phoneno: '',
    email: '',
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
      input.days,
      input.feedback
    ])
    if (isInvalid) {
      return setError("அனைத்து தகவல்களையும் உள்ளிடவும்...!")
    }
    setError(null)
    navigateWhatsapp({
      fields: input,
      from: "Ulaa"
    });

  }

  const ref = useRef(null)
  const handleLearnMore = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className='h-full '>
      {/* HERO */}
      <section className='bg-[#EACAAD] pb-5'>
        <div className="container p-4  mx-auto">
          <Appbar />
          <div className='flex flex-col mt-8'>
            <div className=" m-1  flex justify-center">
              <img src={UlaaLogo} alt="உலா" className='w-40' />
            </div>
            <div className=" m-3 ">
              <h1 className='font-extrabold text-center text-3xl sub-1'>உலா</h1>
            </div>
            <div className=" m-0.5 ">
              <h5 className='text-center font-bold text-sm'>ஒருங்கிணைந்த கூட்டு பண்ணை நிலங்கள்</h5>
            </div>
            <div className=" mt-7  flex justify-center">
              <button onClick={handleLearnMore} className='text-lg md:text-sm hover:bg-[#9a57b3] bg-[#432F4A] text-white px-3 py-1 rounded-xl font-semibold'>
                மேலும் அறிய
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#C5D3AF] '>
        <div className="container p-4 text-gray-800  mx-auto">

          {/* FIRST */}
          <div className='my-10'>
            <div className="flex flex-wrap items-center">
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <img src={Image1} alt="உலா" />
                </div>
              </div>
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <p className='my-8 font-semibold '>நிச்சயமாக உங்களுக்கு எங்கள் உலா - விவசாய சுற்றுலா ஓர் மாறுபட்ட அனுபவத்தை ஏற்படுத்தும் .</p>
                  <p className='my-8 font-semibold '>உலக அளவில் இந்த துறை மிக வேகமாக வளர்ந்து வருகிறது.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SECOND */}
          <div className='my-10'>
            <div className="flex flex-wrap-reverse items-center">
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <p className='my-8 font-semibold '>வணிகரீதியாகவும் , கற்றல் , தொழில் பயிற்சி , கேளிக்கை , பாரம்பரிய மூலக்கூறுகளை உணர்த்தல் என பல வகைகளில் வெற்றி கண்டுள்ளது இந்த துறை.</p>
                </div>
              </div>
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <img src={Image2} alt="உலா" />
                </div>
              </div>
            </div>
          </div>

          {/* THIRD */}
          <div className='my-10'>
            <div className="flex flex-wrap items-center">
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <img src={Image3} alt="உலா" />
                </div>
              </div>
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <p className='my-8 font-semibold '>இந்திய நாட்டில் தென் தமிழகத்தில் கிராம வாழ்வியலின் முன்னோடியான மதுரைக்கு அருகில் இடைக்காட்டூர் எனும் சிறிய கிராமத்தில் அமைந்துள்ளது உலா விவசாய சுற்றுலா மையம்.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FOURTH */}
          <div className='my-10'>
            <div className="flex flex-wrap-reverse items-center">
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <p className='my-8 font-semibold '>முற்றங்களும் , திண்ணைகளும் அமைக்கப்பட்டு ,நாட்டு மாட்டு சாண  மொழுகல் , எளிய கிராமிய வீட்டு வாழ்க்கை  அனுபவத்தை மாறாமல் தருகிறது எமது — உலா - விவசாய சுற்றுலா மையம்.</p>
                </div>
              </div>
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <img src={Image4} alt="உலா" />
                </div>
              </div>
            </div>
          </div>

          {/* FIFTH */}
          <div className='mt-10 mb-5'>
            <div className="flex flex-wrap items-center">
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <img src={Image5} alt="உலா" />
                </div>
              </div>
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <p className='my-8 font-semibold '>இயற்கை விவசாயத்தின் நுட்பங்களை அதன் தொன்மை மாறாமல் சிறிய மாற்றங்களுடன் நீங்கள் இங்கு காணலாம்.</p>
                  <p className='my-8 font-semibold '>நீங்கள் தனி நபராகவோ , குழுவாகவோ விவசாய சுற்றுலாவில் கலந்து கொள்ளலாம்.</p>
                  <p className='my-8 font-semibold '>மேலும் எங்களின் இயற்கை விவசாய பயிற்சியாளரின் வழிகாட்டுதலுடன் நீங்களும் ஒரு நாள் விவசாயியாக பங்கேற்கலாம்.</p>
                </div>
              </div>
            </div>
          </div>

          {/* SIXTH */}
          <div className='my-10'>
            <div className="flex flex-wrap-reverse items-center">
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <p className='my-8 font-semibold '>இங்கு  உணவு வகைகளும் இயற்கை விவசாய பொருட்களான சிறுதானியம் , பாரம்பரிய அரிசி வகைகள் , நஞ்சில்லா காய்கறிகள்  போன்றவை மூலம் தயாரித்து பரிமாற அனுபவம்மிக்க எங்கள் கிராமிய சமையல் கலைஞர்கள் தயாராக உள்ளனர் .</p>
                </div>
              </div>
              <div className=" w-full md:w-1/2">
                <div className='p-5'>
                  <img src={Image6} alt="உலா" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEVENTH */}
      <div className=''>
        <div style={{ backgroundImage: `url(${Image7})` }} className='bg-cover h-full w-full p-5'>
          <div className='bg-[#432F4A] bg-opacity-70 text-white p-3 '>
            <div>
              <p className='font-bold text-center my-2 text-[8px] md:text-sm'>வரலாற்று சிறப்பு மிக்க , அரிய தகவல்கள் பொதிந்துள்ள இடங்களை நீங்கள் பார்வையிட  புதுமையான பயண திட்டமும் எங்களிடம் உள்ளது. </p>
              <p className='font-bold text-center my-2 text-[8px] md:text-sm'>இவ்விடங்களின் வரலாறு மற்றும் சிறப்புகளை விளக்க எங்கள் பயண வழிகாட்டியும் வாகனமும் தயாராக உள்ளனர்.</p>
              <div className='my-5'>
                <h1 className='text-[8px] md:text-sm p-1 my-2  font-bold bg-white text-black'>1. "இடைக்காடார்" சித்தர் கோவில் :-</h1>
                <p className='font-bold indent-24 my-1 text-gray-300 text-[8px] md:text-sm'>இவ்வூரில் வாழ்ந்தவரும் , கிரக நிலை மாற்றியமைத்தவரும்
                  , 18 சித்தர்களில் ஒருவருமாவார்.</p>
              </div>
              <div className='my-5'>
                <h1 className='text-[8px] md:text-sm p-1 my-2  font-bold bg-white text-black'>2. திரு இருதய ஆண்டவர் தேவாலயம :-</h1>
                <p className='font-bold indent-24 my-1 text-gray-300 text-[8px] md:text-sm'>சுமார் 130 ஆண்டுகளுக்கு முன் பிரஞ்சு - கோத்திக் கட்டிட கலையில் கட்டப்பட்டது..</p>
              </div  >
              <div className='my-5'>
                <h1 className='text-[8px] md:text-sm p-1 my-2  font-bold bg-white text-black'>3. கீழடி அகழய்வு அருங்காட்சியகம்:-</h1>
                <p className='font-bold indent-24 my-1 text-gray-300 text-[8px] md:text-sm'> பண்டைய தமிழர் நாகரீகத்தின் சாட்சியங்கள் பொதிந்துள்ள இடம்.</p>
              </div>
              <h1 className='text-[8px] md:text-sm p-1 my-2 md:my-10  font-bold bg-white text-black'>4. 5 ஏக்கர் பரப்பளவுள்ள பிரமாண்ட ஆலமரம்</h1>
              <h1 className='text-[8px] md:text-sm p-1 my-2 md:my-10  font-bold bg-white text-black'>5.  சமணர் படுகைகள் - குன்றத்தூர்</h1>
              <h1 className='text-[8px] md:text-sm p-1 my-2 md:my-10  font-bold bg-white text-black'>6. பரம்பு மலை - வள்ளல் பாரி ஆட்சியின் சாட்சியங்கள்</h1>
              <h1 className='text-[8px] md:text-sm p-1 my-2 md:my-10  font-bold bg-white text-black'>7. திருமயம் கோட்டை</h1>
              <p className='font-bold text-center my-2 md:mb-10 text-[8px] md:text-sm'> மேலும் பல அரிய இடங்கள் மற்றும்  தகவல்களை எங்கள் சுற்றுலா நடத்துனர்கள் உங்களுக்கு வழங்குவர்.</p>
            </div>
          </div>
        </div>
      </div>

      {/* EIGHTH */}
      <section className='bg-[#C5D3AF] '>
        <div className="container p-4 text-gray-800  mx-auto">
          <h1 className='font-extrabold text-xl text-center'>(பண்ணை ~ வீட்டில்) இருந்து வேலை</h1>
          <div className="my-5">
            <div>
              <h1 className='font-extrabold text-xl text-center'> 7 நாட்கள் தொகுப்பு</h1>
            </div>
            <div className='mt-7 px-5 md:px-0'>
              <ul className='list-disc text-[15px]'>
                <li className='font-bold text-gray-800 my-3'>மென்பொருள் ஊழியர்கள் தங்களின் மன அழுத்தங்களை தீர்க்கவும் அதே நேரம் தங்கள் பணி தடையில்லாமல் நடக்க ஏற்படுத்தப்பட்டதே இந்த திட்டம்.</li>
                <li className='font-bold text-gray-800 my-3'>6  பகல் - 6 இரவு - தங்குமிடம் - கிராமிய குடில்</li>
                <li className='font-bold text-gray-800 my-3'>தினமும் 3 வேளை உணவு , இடையே பாணங்கள் மற்றும் தின் பண்டங்கள் </li>
                <li className='font-bold text-gray-800 my-3'>அதி வேக இணைய இணைப்பு</li>
                <li className='font-bold text-gray-800 my-3'>விவசாய பணிகளில் ஈடுபட வாய்ப்பு</li>
                <li className='font-bold text-gray-800 my-3'>கால்நடை பராமரிப்பு பணிகளில் ஈடுபட வாய்ப்பு</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NINETH */}
      <section className='bg-[#EACAAD] p-5'>
        <div className="container p-4  mx-auto">
          <h5 className='text-[15px] font-bold text-center'>உலாவில் செயல்பாடுகள் அனைத்தும் அகர வரிசையில் அமைக்கப்பட்டிருக்கும்</h5>
        </div>
      </section>

      {/* FORM */}
      <section className='bg-[#6A8275] ' ref={ref}>
        <div className=" p-4 text-gray-800  mx-auto">
          <div>
            <h1 className='font-bold text-lg md:text-xl'>இத்திட்டத்தை பற்றி மேலும் அரிய விரும்புவோர்  :-</h1>
          </div>
          <div className='flex flex-col  mt-5 p-2 md:p-5 rounded-md'>
            <div className='flex '>
              <div className='flex flex-col w-1/2 md:w-1/4'>
                <label className='my-3 text-gray-800 font-semibold' htmlFor="name">பெயர் </label>
                <label className='my-3 text-gray-800 font-semibold' htmlFor="address">முகவரி </label>
                <label className='my-3 text-gray-800 font-semibold' htmlFor="phoneno">அலைபேசி எண்</label>
                <label className='my-3 text-gray-800 font-semibold' htmlFor="email">மின்னஞ்சல்</label>
                <label className='my-3 text-gray-800 font-semibold' htmlFor="days">உங்கள் பயண  நாட்கள்</label>
              </div>
              <div className='flex flex-col w-1/2 md:w-3/4 px-5'>
                <input id='name' name='name' onChange={handleChange} value={input.name} className='my-2 bg-[#C5D3AF] focus:outline-none rounded-lg px-2 py-1' type="text" />
                <input id='address' name='address' onChange={handleChange} value={input.address} className='my-2 bg-[#C5D3AF] focus:outline-none rounded-lg px-2 py-1' type="text" />
                <input id='phoneno' name='phoneno' onChange={handleChange} value={input.phoneno} className='my-2 bg-[#C5D3AF] focus:outline-none rounded-lg px-2 py-1' type="number" />
                <input id='email' name='email' onChange={handleChange} value={input.email} className='my-2 bg-[#C5D3AF] focus:outline-none rounded-lg px-2 py-1' type="mail" />
                <input id='days' name='days' onChange={handleChange} value={input.days} className='my-2 bg-[#C5D3AF] lg:my-4 focus:outline-none rounded-lg px-2 py-1' type="number" />
              </div>

            </div>
            <div className='flex justify-center'>
              <textarea onChange={handleChange} value={input.feedback} className="p-2 bg-[#C5D3AF]  rounded-md focus:outline-none md:w-full" name="feedback" id="feedback" cols="33" rows="8"></textarea>
            </div>
            <div className='flex justify-center mt-5 flex-col '>
              <button onClick={handleSubmit} className='bg-[#714E7E] mx-auto w-1/3 hover:bg-[#9a57b3] text-white px-2 py-1 font-semibold rounded-lg'>
                அனுப்புக
              </button>
              {error && <p className='text-red-600 text-center font-bold'>{error}</p>}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default UlaaTamil