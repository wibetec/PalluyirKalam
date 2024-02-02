import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Bgservice from '../../assets/Palluyirkalam/4th_section/background_service.jpg'
import Logo from '../../assets/Palluyirkalam/4th_section/Logo2.png'
import Logo1 from '../../assets/Palluyirkalam/4th_section/Logo1.png'
import Pallikodam from '../../assets/logo/Pallikodam.png'
import Ulaa from '../../assets/logo/Ulaa.png'
import Kulu from '../../assets/logo/Kulu.png'
import Kaninilam from '../../assets/logo/Kaaninilam.png'
import Meichalkaadu from '../../assets/logo/Meichalkaadu.png'
import Uyir from '../../assets/logo/Uyir.png'
import Thottam from '../../assets/logo/Thottam.png'
import Kadai from '../../assets/logo/kadai.png'

const Services = () => {
    const navigate = useNavigate();
    return (

        <div id='services' className="relative bg-local" >

            <div className="absolute top-0 left-0 w-full h-full bg-cover" style={{ backgroundImage: `url(${Bgservice})` }}></div>

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

            <p className='absolute text-3xl lg:text-5xl text-white font-semibold text-center mx-auto w-full pt-10 [text-shadow:_7px_10px_4px_rgb(0_0_0_/_25%)]'>சேவைகள்</p>

            <div className="relative z-10 grid grid-cols-1 gap-5 md:gap-2 md:grid-cols-3 pt-32 pb-20 p-5">
                {/* PalluyirKalam Logo */}
                <div className='block md:hidden'>
                    <div className='md:h-[250px] lg:h-[300px] 2xl:h-[400px] flex '>
                        <img src={Logo1} alt="" className=' mx-auto my-auto' />
                    </div>
                </div>

                {/* PalluyirKalam Services */}
                {/* Kaani Nilam */}
                <div className='md:h-[250px] lg:h-[300px] 2xl:h-[400px] flex xl:pr-10  xl:pb-10'>
                    <div className='w-full py-2 sm:w-3/4 md:w-[250px] xl:w-[300px] bg-[#E1B996] 2xl:w-3/4 md:h-[150px] lg:h-[200px] 2xl:h-[250px]  mx-auto md:mx-0 md:mt-auto md:ml-auto  rounded-lg'>
                        <div className='block md:flex md:h-3/4'>
                            {/* Kaaninilam Logo */}
                            <div className='flex w-5/6 mx-auto md:mx-0 md:border-r-2 border-black my-auto'>
                                <img src={Kaninilam} alt="School" className='rounded-full w-1/2 md:w-3/4 my-auto mx-auto ' />
                            </div>

                            {/* Kaaninilam Description */}
                            <div className='my-auto flex h-3/4 '>
                                <p className='my-auto text-center py-2 md:py-0 text-sm md:text-[7px] xl:text-[10px] font-bold  px-3'>(மகாகவி பாரதியார் எழுதிய தன் வாழ்கை கனவு வரி சிறு அளவு இயற்கை வழி விவசாய நிலங்கள் விற்பனைக்கு

                                    (உழவு முதல் சந்தைபடுத்தல் வரை மற்றும் இதர வருமான வாய்ப்பு திட்டம் அடங்கிய சேவைகளுடன்)</p>
                            </div>
                        </div>

                        <button onClick={() => navigate('/kaaninilam')}  className='flex justify-center mx-auto bg-[#432d4aff] hover:bg-[#71487dff]  w-1/2 md:w-3/4 xl:w-1/2 rounded-full'>
                            <p className='text-sm my-auto text-white'>மேலும் அறிய</p>
                            <IoIosArrowRoundForward size={30} className='text-white font-bold my-auto' />
                        </button>
                    </div>
                </div>

                {/* Ulaa */}
                <div className='md:h-[250px] lg:h-[300px] 2xl:h-[400px] flex 2xl:pt-10'>
                    <div className='w-full py-2 sm:w-3/4 md:w-[250px] xl:w-[300px] bg-[#6a8275] 2xl:w-3/4 md:h-[150px] lg:h-[200px] 2xl:h-[250px]  mx-auto  rounded-lg'>
                        <div className='block md:flex h-auto md:h-3/4'>
                            {/* Ulaa Logo */}
                            <div className='flex mx-auto md:mx-0 w-5/6 md:border-r-2 border-black my-auto'>
                                <img src={Ulaa} alt="School" className='rounded-full w-1/2 mx-auto  md:w-3/4 my-auto' />
                            </div>

                            {/* Ulaa Description */}
                            <div className='my-auto flex h-3/4 '>
                                <p className='my-auto text-center py-2 md:py-0 text-sm md:text-[7px] xl:text-[10px] font-bold  px-3'>கல்வி முறை விவசாய சுற்றுலா வட்டார வரலாற்று சிறப்பு இடங்கள் பார்வையிடல் & தகவலகள் கற்பிக்கும் தளம்.</p>
                            </div>
                        </div>
                        <button onClick={() => navigate('/ulaa')} className='flex justify-center lg:mt-2 mx-auto bg-[#432d4aff] hover:bg-[#71487dff]  w-1/2 md:w-3/4 xl:w-1/2 rounded-full'>
                            <p className='text-sm my-auto text-white'>மேலும் அறிய</p>
                            <IoIosArrowRoundForward size={30} className='text-white font-bold my-auto' />
                        </button>
                    </div>
                </div>

                {/* Pallikoodam */}
                <div className='md:h-[250px] lg:h-[300px] 2xl:h-[400px] flex  xl:pl-10  xl:pb-10'>
                    <div className='w-full py-2 sm:w-3/4 md:w-[250px] xl:w-[300px] bg-[#8fa54f] 2xl:w-3/4 h-auto md:h-[150px] lg:h-[200px] 2xl:h-[250px]  mx-auto md:mx-0 md:mt-auto md:mr-auto  rounded-lg'>
                        <div className='block md:flex h-auto md:h-3/4'>
                            {/* Pallikoodam Logo */}
                            <div className='flex mx-auto md:mx-0 w-5/6 md:border-r-2 border-black my-auto'>
                                <img src={Pallikodam} alt="School" className='rounded-full w-1/2 md:w-3/4 my-auto mx-auto ' />
                            </div>

                            {/* Pallikoodam Description */}
                            <div className='my-auto flex h-3/4 '>
                                <p className='my-auto text-center py-2 md:py-0 text-sm md:text-[7px] xl:text-[10px] font-bold  px-3'>ஒரு நாள் முதல் 90 நாட்கள் வரை விவசாயம் மற்றும் தற்சார்பு வாழ்வியல் - பாடத்திட்டம் மற்றும் நடைமுறை பயிற்சிகள்</p>
                            </div>
                        </div>

                        <button onClick={() => navigate('/pallikoodam')} className='flex justify-center mx-auto bg-[#432d4aff] hover:bg-[#71487dff]  w-1/2 md:w-3/4 xl:w-1/2 rounded-full'>
                            <p className='text-sm my-auto text-white'>மேலும் அறிய</p>
                            <IoIosArrowRoundForward size={30} className='text-white font-bold my-auto' />
                        </button>
                    </div>
                </div>

                {/* Kulu */}
                <div className='md:h-[250px] lg:h-[300px] 2xl:h-[400px] flex xl:pl-10'>
                    <div className='w-full py-2 sm:w-3/4 md:w-[250px] xl:w-[300px] bg-[#c6d4af] 2xl:w-3/4 h-auto md:h-[150px] lg:h-[200px] 2xl:h-[250px]  mx-auto md:mx-0 my-auto rounded-lg'>
                        <div className='block md:flex h-auto md:h-3/4'>
                            {/* Kulu Logo */}
                            <div className='flex mx-auto w-5/6 md:border-r-2 border-black my-auto'>
                                <img src={Kulu} alt="School" className='rounded-xl w-1/2 md:w-3/4 my-auto mx-auto ' />
                            </div>

                            {/* Kulu Description */}
                            <div className='my-auto flex h-3/4 '>
                                <p className='my-auto mx-auto text-center py-2 md:py-0 text-sm md:text-[7px] xl:text-[10px] font-bold  px-3'>விவசாய விளை பொருட்களை மதிப்பு கூட்ட கிராம்புற பெண்களுக்கு வாய்ப்பளிக்கும் தளம்.</p>
                            </div>
                        </div>

                        <button onClick={() => navigate('/kulu')} className='flex justify-center mt-2 mx-auto bg-[#432d4aff] hover:bg-[#71487dff]  w-1/2 md:w-3/4 xl:w-1/2 rounded-full'>
                            <p className='text-sm my-auto text-white'>மேலும் அறிய</p>
                            <IoIosArrowRoundForward size={30} className='text-white font-bold my-auto' />
                        </button>
                    </div>
                </div>

                {/* PalluyirKalam Center Logo and PalluyirKalam Font */}
                <div className='hidden md:block'>
                    <div className='md:h-[250px] lg:h-[300px] 2xl:h-[400px] flex         '>
                        <img src={Logo} alt="" className=' mx-auto my-auto' />
                    </div>
                </div>

                {/* Kadai */}
                <div className='md:h-[250px] lg:h-[300px] 2xl:h-[400px] flex xl:pr-10'>
                    <div className='w-full py-2 sm:w-3/4 md:w-[250px] xl:w-[300px] bg-[#6a8275] 2xl:w-3/4 h-auto md:h-[150px] lg:h-[200px] 2xl:h-[250px]  my-auto mx-auto md:mx-0 md:ml-auto  rounded-lg'>
                        <div className='block md:flex h-auto md:h-3/4'>
                            {/* Kadai Logo */}
                            <div className='flex w-5/6 mx-auto md:border-r-2 border-black my-auto'>
                                <img src={Kadai} alt="School" className='rounded-full w-1/2 md:w-3/4 my-auto mx-auto ' />
                            </div>

                            {/* Kadai Description */}
                            <div className='my-auto flex h-3/4 '>
                                <p className='my-auto mx-auto text-center py-2 md:py-0 text-sm md:text-[7px] xl:text-[10px] font-bold px-3'>இயற்கை சார்ந்த விளை. பொருள்களை சந்தைபடுத்தும் தளம்.இணையம் நேரடி வணிக வாய்ப்புகள்</p>
                            </div>
                        </div>

                        <button onClick={() => navigate('/kadai')} className='flex justify-center mx-auto bg-[#432d4aff] hover:bg-[#71487dff]  w-1/2 md:w-3/4 xl:w-1/2 rounded-full'>
                            <p className='text-sm my-auto text-white'>மேலும் அறிய</p>
                            <IoIosArrowRoundForward size={30} className='text-white font-bold my-auto' />
                        </button>
                    </div>
                </div>

                {/* Meichalkaadu */}
                <div className='md:h-[250px] lg:h-[300px] 2xl:h-[400px] flex md:pr-5 xl:pr-10 md:pt-5 xl:pt-10'>
                    <div className='w-full py-2 sm:w-3/4 md:w-[250px] xl:w-[300px] bg-[#e0bb97] 2xl:w-3/4 h-auto md:h-[150px] lg:h-[200px] 2xl:h-[250px]  mx-auto md:mx-0 md:ml-auto  rounded-lg'>
                        <div className='block md:flex h-auto md:h-3/4'>
                            {/* Meichalkaadu  Logo*/}
                            <div className='flex w-5/6 mx-auto md:border-r-2 border-black my-auto'>
                                <img src={Meichalkaadu} alt="School" className='rounded-full w-1/2 md:w-3/4 my-auto mx-auto ' />
                            </div>

                            {/* Meichalkaadu Description */}
                            <div className='my-auto flex h-3/4 '>
                                <p className='my-auto mx-auto text-center py-2 md:py-0 text-sm md:text-[7px] xl:text-[10px] font-bold  px-3'>கால்நடைகள் வளர்ப்பு-பங்கீடு அடிப்படையில்.ஒருங்கிணைப்பட்ட கால்நடை வளர்ப்பு தொழில் அனுபவமிக்க பராமரிப்பு சேவைகள்</p>
                            </div>
                        </div>

                        <button  onClick={() => navigate('/meichalkaadu')} className='flex justify-center mx-auto bg-[#432d4aff] hover:bg-[#71487dff]  w-1/2 md:w-3/4 xl:w-1/2 rounded-full'>
                            <p className='text-sm my-auto text-white'>மேலும் அறிய</p>
                            <IoIosArrowRoundForward size={30} className='text-white font-bold my-auto' />
                        </button>
                    </div>
                </div>

                {/* Uyir */}
                <div className='md:h-[250px] lg:h-[300px] 2xl:h-[400px] flex 2xl:pt-10'>
                    <div className='w-full py-2 sm:w-3/4 md:w-[250px] xl:w-[300px] bg-[#698275] 2xl:w-3/4 h-auto md:h-[150px] lg:h-[200px] 2xl:h-[250px]  mx-auto mt-auto  rounded-lg'>
                        <div className='block md:flex h-auto md:h-3/4'>
                            {/* Uyir Logo */}
                            <div className='flex  mx-auto w-5/6 md:border-r-2 border-black my-auto'>
                                <img src={Uyir} alt="School" className='rounded-xl w-1/2 md:w-3/4 my-auto mx-auto ' />
                            </div>

                            {/* Uyir Description */}
                            <div className='my-auto flex h-3/4 '>
                                <p className='my-auto text-center py-2 md:py-0 text-sm md:text-[7px] xl:text-[10px] font-bold  px-3'>கிராம, நகர சாலை மற்றும் நீர் நிலைகள் சுற்றி மரம் நடவு செய்தல்.மரம் நடவு. பராமரிப்பு சேவைகள்.பறவை. பிற உயிரினங்களுக்கு தொடர்ந்து உணவு வழங்கும் சேவை</p>
                            </div>
                        </div>

                        <button onClick={() => navigate('/uyir')} className='flex justify-center mx-auto bg-[#432d4aff] hover:bg-[#71487dff]  w-1/2 md:w-3/4 xl:w-1/2 rounded-full'>
                            <p className='text-sm my-auto text-white'>மேலும் அறிய</p>
                            <IoIosArrowRoundForward size={30} className='text-white font-bold my-auto' />
                        </button>
                    </div>
                </div>

                {/* Thottam */}
                <div className='md:h-[250px] lg:h-[300px] 2xl:h-[400px] flex md:pl-5 xl:pl-10 md:pt-5 xl:pt-10'>
                    <div className='w-full py-2 sm:w-3/4 md:w-[250px] xl:w-[300px] bg-[#8fa54f] 2xl:w-3/4 h-auto md:h-[150px] lg:h-[200px] 2xl:h-[250px]  mx-auto md:mx-0 md:mr-auto  rounded-lg'>
                        <div className='block md:flex h-auto md:h-3/4'>
                            {/* Thottam Logo */}
                            <div className='flex mx-auto w-5/6 md:border-r-2 border-black my-auto'>
                                <img src={Thottam} alt="School" className='rounded-xl w-1/2 md:w-3/4 my-auto mx-auto ' />
                            </div>

                            {/* Thottam Description*/}
                            <div className='my-auto flex h-3/4 '>
                                <p className='my-auto text-center py-2 md:py-0 text-sm md:text-[7px] xl:text-[10px] font-bold px-3'>மாடி தோட்டம் அமைத்தல், உரிய இடு பொருள் வழங்குதல். நகர்ப்புற சமையலறை தோட்ட ச மூலப்பொருள் பகிர்தல் பராமரித்தல்</p>
                            </div>
                        </div>

                        <button onClick={() => navigate('/thottam')} className='flex justify-center mx-auto bg-[#432d4aff] hover:bg-[#71487dff]  w-1/2 md:w-3/4 xl:w-1/2 rounded-full'>
                            <p className='text-sm my-auto text-white'>மேலும் அறிய</p>
                            <IoIosArrowRoundForward size={30} className='text-white font-bold my-auto' />
                        </button>
                    </div>
                </div>


            </div>
        </div>

    )
}

export default Services