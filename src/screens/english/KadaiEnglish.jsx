//ASSETS
import { useEffect, useRef, useState } from 'react';
import KadaiLogo from '../../assets/logo/eng_logo/kadai.png'
import { categories, rice, millets, vegetables, spinach, valueAddedProducts, seeds, herbs, gardenProducts, gardenEquipments, repellents, treeCalves } from '../../assets/text/kadaiText.js'
import Appbar from '../../components/Appbar';
import { useSearchParams } from 'react-router-dom';
import { navigateWhatsappBuy } from '../../utils/whatsapp.js';


const KadaiEnglish = () => {
  const [tab, setTab] = useState(0);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const productRef = useRef();
  const gardenRef = useRef();


  useEffect(() => {
    setLoading(true);
    switch (tab) {
      case 0:
        setLists([...rice]);
        break;
      case 1:
        setLists([...millets])
        break;
      case 2:
        setLists([...vegetables])
        break;
      case 3:
        setLists([...spinach])
        break;
      case 4:
        setLists([...valueAddedProducts])
        break;
      case 5:
        setLists([...seeds])
        break;
      case 6:
        setLists([...herbs])
        break;
      case 7:
        setLists([...gardenProducts])
        break;
      case 8:
        setLists([...gardenEquipments])
        break;
      case 9:
        setLists([...repellents])
        break;
      case 10:
        setLists([...treeCalves])
        break;
      default:
        setLists([...rice])
        break;
    }
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [tab])
  useEffect(() => {
    const category = searchParams.get("category")
    if (parseInt(category) === 7) {
      setTab(7)
      setTimeout(() => {
        productRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 2000)
      gardenRef.current?.scrollIntoView({ behavior: 'smooth' })
    } else {
      setTab(0);
      window.scrollTo(0, 0);
    }
  }, [searchParams])
  const handleLearnMore = () => {
    productRef.current?.scrollIntoView({ behavior: 'smooth' })
  }
  const handleBuy = (list) => {
    navigateWhatsappBuy({
      fields: list,
      from: "Kadai"
    });
  }
  return (
    <main className='h-full capitalize'>
      {/* SECTION-1 */}
      <section className='bg-[#90A24E] pb-5'>
        <div className="container p-4  mx-auto">
          <Appbar />
          <div className='flex justify-center  items-center mt-8'>
            <div className=" m-1  flex justify-center">
              <img className='w-48 rounded-full' src={KadaiLogo} alt="கடை" />
            </div>
            <div className="m-3 ml-5">
              <h1 className='font-extrabold text-center text-7xl font-kadai'>KADAI</h1>
              <h5 className='text-center font-bold text-sm'>Marketing Center</h5>
            </div>
          </div>
          <div className=" mt-3  flex justify-center">
            <button onClick={handleLearnMore} className='text-lg md:text-sm hover:bg-[#9a57b3] bg-[#432F4A] text-white px-3 py-1 rounded-xl font-semibold'>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* SECTION-2 */}
      <section className='bg-[#C5D3AF] p-5'>
        <div className="container p-1  mx-auto">
          <div className='text-[15px]'>
            <h5 className='text-center my-4  font-bold'>KADAI (the Shop) - that brings together sellers of organic agricultural products, quality and value-added products, both online and in-store, catering to consumers directly.</h5>
            <h5 className='text-center my-4  font-bold'> KAANI NILAM (Integrated gated community farm lands) – Marketing products of the land owners.</h5>
            <h5 className='text-center my-4  font-bold'>Group - Marketing value-added products.</h5>
            <h5 className='text-center my-4  font-bold'> 100% organic agricultural products from various farmers (verified by store administrators) will be marketed</h5>
          </div>
        </div>
      </section>

      {/* SECTION-3 */}
      <section className='bg-[#90A24E] p-1 md:p-5'>
        <div className="container p-1 md:p-5  mx-auto">
          {/* //CATEGORIES-BAR */}
          {/* scrollbar-track-[#6A8275] scrollbar-track-rounded scrollbar-thumb-rounded scrollbar-none hover:scrollbar-thin scrollbar-thumb-[#C5D3AF] scrollbar-thin */}
          <div ref={productRef} className='flex p-1  overflow-x-auto space-x-5 no-scrollba'>
            {
              categories.map((category, index) => (
                <div key={index}>
                  <button ref={index === 7 ? gardenRef : null} onClick={() => setTab(index)} className={`text-nowrap nowrap drop-shadow-lg font-extrabold text-[13px] text-white p-2 rounded-full ${index === tab ? 'bg-[#6A8275] ' : 'bg-[#432F4A] '}`}>{category}</button>
                </div>
              ))
            }
          </div>
          <div className='my-5'>
            <div>
              {/* LISTS */}
              {!loading && lists.length > 0 && lists.map((list, index) => (
                <div className='flex w-full md:w-full mx-auto my-4 items-center' key={index}>
                  <div className="w-[40%] md:w-1/4 mr-2">
                    <div className='bg-[#E1B996] rounded-2xl h-28 md:h-40 flex items-center justify-center'>
                      {list.image && <img className='h-full w-full object-cover rounded-xl border-2 border-[#432F4A]' src={list.image} alt={list.name} />}
                      {!list.image && <h5 className='text-center font-bold '>Image Will Be Upload Soon</h5>}
                    </div>
                  </div>
                  <div className="w-[60%] md:w-3/4 ml-2">
                    <div className='bg-[#E1B996] rounded-2xl h-full md:h-40 p-1 md:p-3'>
                      <h3 className='font-extrabold ml-3  text-[16px] md:text-lg '>{list.name}</h3>
                      <div className='p-2 md:p-5 md:mt-5 md:w-full justify-between flex flex-col md:flex-row'>
                        <ul className='list-disc flex flex-col md:flex-row '>
                          {list.price1 && <li className='mx-2 flex items-center' htmlFor={`${index}#5`}>
                            <span className='font-bold text-[14px] ml-1'>5 kg - 125 ₹ / kg</span>
                          </li>}
                          {list.price2 && <li className='mx-2 flex items-center' htmlFor={`${index}#15`}>
                            <span className='font-bold text-[14px] ml-1'>15 kg - 115 ₹ / kg</span>
                          </li>}
                          {list.price3 && <li className='mx-2 flex items-center' htmlFor={`${index}#30`}>
                            <span className='font-bold text-[14px] ml-1'>30 kg - 100₹ / kg</span>
                          </li>}

                        </ul>
                        <div className="flex justify-center items-center">
                          <button onClick={() => handleBuy(list)} className='bg-[#6A8275] px-2 p-1 rounded-xl text-white font-extrabold mt-3'>BUY</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* LOADING */}
              {loading && <div className='flex justify-center py-36 '>
                <div role="status" className='my-36'>
                  <svg aria-hidden="true" className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>}

              {/* ERROR */}
              {lists.length === 0 && <div className='flex justify-center py-36 '>
                <div className='my-36 font-bold text-center'>
                  <h5 className='text-2xl uppercase'>No Products Found...!</h5>
                  <p className='text-gray-800'>Products Will Updated Soon</p>
                </div>
              </div>}
            </div>
          </div>
        </div>
      </section>

      {/* ESTIMATE
      <section className=''>
        <div className=" mx-auto">
          <div className='bg-[#E1B995] p-3 flex flex-col justify-center '>
            <div className='flex flex-col justify-center scrollbar-track-[#C5D3AF] scrollbar-track-rounded scrollbar-thumb-rounded  scrollbar-thumb-[#6A8275] scrollbar-thin overflow-x-auto space-x-5'>
              <table border={1} className='table-auto text-center   border-collapse '>
                <thead >
                  <tr>
                    <th className='px-5 text-nowrap py-3 text-white bg-[#6A8275]'>Product</th>
                    <th className='px-5 text-nowrap py-3 text-white bg-[#6A8275]'>Price / kg</th>
                    <th className='px-5 text-nowrap py-3 text-white bg-[#6A8275]'>kg</th>
                    <th className='px-5 text-nowrap py-3 text-white bg-[#6A8275]'>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='my-5 bg-[#90A24E]'>
                    <td className='p-1 text-nowrap py-3 font-bold'>மிளகி சம்பா</td>
                    <td className='p-1 text-nowrap py-3 font-bold'>185 ₹</td>
                    <td className='p-1 text-nowrap py-3 font-bold'>5</td>
                    <td className='p-1 text-nowrap py-3 font-bold'>925 ₹</td>
                  </tr>
                  <tr className='my-5 bg-[#C5D3AF]'>
                    <td className='p-1 text-nowrap py-3 font-bold'>கருப்பு. கவுனி அவல் </td>
                    <td className='p-1 text-nowrap py-3 font-bold'>{125}₹</td>
                    <td className='p-1 text-nowrap py-3 font-bold'>{5}₹</td>
                    <td className='p-1 text-nowrap py-3 font-bold'>{625}₹</td>
                  </tr>
                  <tr className='my-5 bg-[#90A24E]'>
                    <td className='p-1 text-nowrap py-3 font-bold'>மிளகி சம்பா</td>
                    <td className='p-1 text-nowrap py-3 font-bold'>185 ₹</td>
                    <td className='p-1 text-nowrap py-3 font-bold'>5</td>
                    <td className='p-1 text-nowrap py-3 font-bold'>925 ₹</td>
                  </tr>
                  <tr className='my-5 bg-[#C5D3AF]'>
                    <td className='p-1 py-3 font-bold  '></td>
                    <td className='p-1 py-3 font-bold  '></td>
                    <td className='p-1 py-3 font-extrabold col-span-3 text-lg  '>Total</td>
                    <td className='p-1 py-3 font-bold  '>{625}₹</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='flex justify-center p-5'>
              <button className='bg-[#714E7E] px-3 py-1 font-bold text-white rounded-xl'>SEND</button>
            </div>
          </div>
        </div>
      </section> */}

    </main>
  )
}

export default KadaiEnglish

// import React, { useContext } from 'react'
// import { Language } from '../hooks/Language'
// import KadaiTamil from './tamil/KadaiTamil'
// import KadaiEnglish from './english/KadaiTamil'

// const Kadai = () => {
//   const { language } = useContext(Language);
//   return (
//     <>
//     {language?<KadaiTamil/>:<KadaiEnglish/>}
//     </>
//   )
// }

// export default Kadai