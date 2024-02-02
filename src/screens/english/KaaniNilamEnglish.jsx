import React, { useRef, useState } from 'react'
import Appbar from '../../components/Appbar';

//ASSETS
import KaaniNilamLogo from './../../assets/logo/eng_logo/KaaniNilam.png';
import SecondSectionImage from './../../assets/images/KaaniNilam/SecondSectionImage.png';
import ThirdSectionImage from './../../assets/images/KaaniNilam/ThirdSectionImage.png';
import { validateFields } from '../../utils/validate';
import { navigateWhatsapp } from '../../utils/whatsapp';

const KaaniNilamEnglish = () => {
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
            return setError("All Fields Are Required...!")
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
                            <h1 className='font-extrabold text-center text-3xl sub-1'>KAANI NILAM</h1>
                        </div>
                        <div className=" m-0.5 ">
                            <h5 className='text-center font-bold text-sm capitalize'>Integrated gated comminity farm lands</h5>
                        </div>
                        <div className=" mt-7  flex justify-center">
                            <button onClick={handleLearnMore} className='text-lg md:text-sm hover:bg-[#9a57b3] bg-[#432F4A] text-white px-3 py-1 rounded-xl font-semibold'>
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#EACAAD] p-5 pb-5'>
                <div className="container p-1  mx-auto">
                    {/* About integrated community farming */}
                    <div className='my-16'>
                        <div>
                            <h1 className='font-bold text-lg md:text-xl capitalize'>About integrated community farming :-</h1>
                        </div>
                        <div className='flex flex-wrap-reverse items-center mt-5'>
                            <div className=" w-full md:w-1/2  ">
                                <div className='text-gray-800'>
                                    <p className='font-semibold  mt-5 capitalize '>By the cultivation of crops, there is food for livestock through crop byproduct and utilizing agricultural residues for fuel, composting organic matter, and preparing fertilizers that contribute to sustainable agriculture. This integrated approach results in a diversified farming system.</p>
                                    <p className='font-semibold  mt-5 capitalize '>In the establishment of integrated farming plots, we divide agricultural lands (farm plots) into sections. You can transform one of them into your own, cultivating from seed planting to harvest. Until then, practicing natural farming with organic practices is possible in conjunction with general facilities.</p>
                                    <p className='font-semibold  mt-5 capitalize '>Even if you are in out of town, agricultural activities will continue on your land.</p>
                                    <p className='font-semibold  mt-5 capitalize '>In times when it is convenient for you, you can engage in agricultural activities directly.                                      </p>
                                </div>
                            </div>
                            <div className=" w-full md:w-1/2  ">
                                <div className='flex justify-center p-5'>
                                    <img src={SecondSectionImage} alt="காணி நிலம்" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  What are the facilities available on your cultivable land ? */}
                    <div className='mt-28'>
                        <div>
                            <h1 className='font-bold text-lg md:text-xl capitalize'> What are the facilities available on your cultivable land ? :-</h1>
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
                                        <li className='m-3 capitalize'>live fence</li>
                                        <li className='m-3 capitalize'>Water trench (அகழி)</li>
                                        <li className='m-3 capitalize'>Raised bed agricultural setup</li>
                                        <li className='m-3 capitalize'>Teak, fruit, and genetic wood trees in an organized setting</li>
                                        <li className='m-3 capitalize'>Opportunity to engage in cash crop and vegetable farming for sustenance</li>
                                        <li className='m-3 capitalize'>Space to construct farm house</li>
                                        <li className='m-3 capitalize'>continuous irrigation facility</li>
                                        <li className='m-3 capitalize'>General farm security </li>
                                        <li className='m-3 capitalize'>(guards, CCTV, entrance monitoring, guard dogs) facilities</li>
                                        <li className='m-3 capitalize'>maintenance equipments</li>
                                        <li className='m-3 capitalize'>stay for workers</li>
                                        <li className='m-3 capitalize'>Agricultural laborers with expertise</li>
                                        <li className='m-3 capitalize'>Toilet facilities</li>
                                        <li className='m-3 capitalize'>incorporates the necessary arrangements for conducting organic farming</li>
                                        <li className='m-3 capitalize'>A unified farm with facilities from seed cultivation to sales</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Those who desire to know more about this initiative – About you :- */}
                    {/* FORM */}
                    <div className='mt-28' ref={ref}>
                        <div>
                            <h1 className='font-bold text-lg md:text-xl capitalize'>Those who desire to know more about this initiative – About you :-</h1>
                        </div>
                        <div className='flex flex-col bg-[#6A8275]  mt-5 p-2 md:p-5 rounded-md'>
                            <div className='flex '>
                                <div className='flex flex-col w-1/2 md:w-1/4'>
                                    <label className='my-3 text-gray-800 font-semibold' htmlFor="name">Name </label>
                                    <label className='my-3 text-gray-800 font-semibold' htmlFor="phoneno">Mobile Number</label>
                                    <label className='my-3 text-gray-800 font-semibold' htmlFor="email">Email</label>
                                    <label className='my-3 text-gray-800 font-semibold capitalize' htmlFor="size">Level of desired land for agricultural activities</label>
                                </div>
                                <div className='flex flex-col w-1/2 md:w-3/4 px-5'>
                                    <input id='name' name='name' onChange={handleChange} value={input.name} placeholder='Enter Name' className='my-2 bg-[#C5D3AF] focus:outline-none rounded-lg px-2 py-1' type="text" />
                                    <input id='phoneno' name='phoneno' onChange={handleChange} value={input.phoneno} placeholder='Enter Phone Number ' className='my-2 bg-[#C5D3AF] focus:outline-none rounded-lg px-2 py-1' type="number" />
                                    <input id='email' name='email' onChange={handleChange} value={input.email} placeholder='Enter E-Mail ' className='my-2 bg-[#C5D3AF] focus:outline-none rounded-lg px-2 py-1' type="mail" />
                                    <select id='size' name='size' onChange={handleChange} value={input.size} className='my-2 bg-[#C5D3AF] focus:outline-none rounded-lg px-2 py-1' >
                                        <option value="null">----</option>
                                        <option value="33">Scheme -  1 -  33 Cent</option>
                                        <option value="50">Scheme -  2 -  50 Cent</option>
                                        <option value="1">Scheme  -  3 -  1  Acre</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex justify-center mt-5 flex-col '>
                                <button onClick={handleSubmit} className='bg-[#714E7E] mx-auto w-1/3 hover:bg-[#9a57b3] text-white px-2 py-1 font-semibold rounded-lg'>
                                    SEND
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

export default KaaniNilamEnglish