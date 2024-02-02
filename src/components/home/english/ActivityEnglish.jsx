import React, { useEffect, useState } from 'react';

import collage from '../../../assets/Palluyirkalam/3rd_section/Collage.png';
import { getActivity } from '../../../api/firebase';

const ActivityEnglish = () => {
  const [activity, setActivity] = useState([]);
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function api() {
      setLoading(true)
      const activityData = await getActivity();
      setActivity(activityData);
      setLoading(false)
      if (activityData.activityVideo) {
        const videolink = activityData.activityVideo;
        const embedlink = videolink.split('https://youtu.be/');
        setLink(embedlink[1]);
      }
    }
    api();
  }, []);

  return (
    <div className='bg-[#c6d3af] pb-10'>
      <p className='text-3xl 2xl:text-5xl text-black font-semibold text-center py-5 xl:pt-16'>Activities</p>

      {/* <!-- ===========ACTIVITY START========= --> */}
      <div className="rounded-xl w-full lg:w-3/4 h-auto justify-center lg:h-auto mx-auto flex align-middle bg-[#c6d3af]">
        <div className='mx-5 md:mx-auto mt-5 md:flex justify-center md:w-3/4 p-3 rounded-xl bg-[#819683]'>
          
          {!loading && <div className='flex flex-col md:flex-row '>
            {activity.activityImage ? <img
              src={activity.activityImage}
              alt="images 3"
              className="md:w-1/2 xl:w-1/3 mx-auto object-cover"
            /> :
              <iframe className='w-full md:w-1/2 xl:w-1/3 mx-auto' src={`https://www.youtube.com/embed/${link}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>}
            <p className='md:border-l-4 border-[#c6d3af] text-bold text-lg lg:text-xl xl:text-2xl lg:ml-10 text-white text-center px-5 py-5 my-auto'>{activity.activityName}</p>
          </div>}

          {loading && <div className='flex  justify-center'>
            <div role="status">
              <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>}

        </div>

      </div>
      {/* <!-- ===========ACTIVITY END========= --> */}

      <p id='about' className='text-3xl 2xl:text-5xl text-black font-semibold text-center mt-16 pt-2'>PalluyirKalam</p>
      <div className='mt-10  grid grid-cols-1 2xl:grid-cols-2 gap-3  w-full xl;w-3/4 mx-auto'>
        {/* Collage Image and About PalluyirKalam */}
        <div className='flex'>
          <img src={collage} alt="collage" className='2xl:mx-auto w-full  my-auto p-2' />
        </div>
        <div className='flex mx-auto w-3/4 2xl:w-full'>
          {/*PalluyirKalam Brief Explanation*/}
          <div className='text-center  2xl:border-l-4 2xl:text-start  border-black text-[18x] 2xl:text-lg font-extrabold 2xl:pl-10 2xl:p-5 my-auto px-2'><p>The scheme designed for agriculture also generates commercial income from various agriculture related activities.</p>
            <p className='mt-5'>At the same time our members are not only focused on their profits through this land.</p>
            <p className='mt-5'>They share their efforts to millions and millions of beings in this world.</p>
            <p className='mt-5'>Graced Creatures repays our members in the trillions.</p>
            <p className='mt-5'>This project is designed and established by Mr. Rajkumar Murugesan since 2020.</p>
            <p className='mt-5'>Mr.Rajkumar Murugesan owns event management company since 1992 for corporate, wedding and other related services.</p>
            <p className='mt-5'>He also works as a production designer / art director in the Indian film industry.</p>
            <p className='mt-5'>He has done art direction for more than 35 films in Tamil, Hindi and Telugu along with films by leading stars.</p>
            <p className='mt-5'>He designed this program with the aim of serving the living beings of the world.</p> </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityEnglish