// Importing necessary dependencies
import Appbar from '../../components/Appbar';
import { useNavigate } from 'react-router-dom';
import { isAuthenicated } from '../../utils/authenicate';
import { getAuth } from 'firebase/auth';
import { getToken } from '../../utils/storage';
import { useContext, useEffect, useState } from 'react';
import { getActivity } from '../../api/firebase';
import { Language } from '../../hooks/Language';

// React functional component for the AdminPanel
const AdminPanel = () => {
  // Hook from react-router-dom for navigation
  const navigate = useNavigate();

  const [activity, setActivity] = useState([]);
  const [link, setLink] = useState('');

  useEffect(() => {
    if (!isAuthenicated()) {
      return navigate('/admin')
    }
    getAuth().onAuthStateChanged((user) => {
      console.log(user);
      if (!user) {
        return navigate('/admin');
      }
      if (!(user.uid === getToken())) {
        return navigate('/admin');
      }
    })
  }, [navigate])
  // Render the component
  useEffect(() => {
    async function api() {
      const activityData = await getActivity();
      setActivity(activityData);

      if (activityData.activityVideo) {
        const videolink = activityData.activityVideo;
        const embedlink = videolink.split('https://youtu.be/');
        setLink(embedlink[1]);
        console.log(embedlink)
        console.log(link)
      }
    }

    api();
  });
  const {language}=useContext(Language);

  return (
    <>
      {/* Background and styling */}
      <div className='bg-[#8ea851ff] py-5 px-5 h-screen'>
        {/* Main container */}
        <div className='container text-black mx-auto h-3/4 flex flex-col'>
          {/* Appbar component */}
          <Appbar />

          <p className='text-3xl 2xl:text-5xl text-black font-semibold text-center py-5 xl:pt-16'>{language?"செயல்பாடுகள்":"Activities"}</p>
          {/* <!-- ===========ACTIVITY START========= --> */}
          <div className="rounded-xl w-full lg:w-3/4 h-auto lg:h-auto mx-auto flex align-middle">
            <div className='mx-5 md:mx-auto mt-5 md:flex md:w-3/4 p-3 rounded-xl bg-[#819683]'>
              {activity.activityImage ? <img
                src={activity.activityImage}
                alt="images 3"
                className="md:w-1/2 xl:w-1/3 mx-auto object-cover"
              /> :
              <div className='md:w-1/2 xl:w-1/3 mx-auto'><iframe className='w-full' src={`https://www.youtube.com/embed/${link}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>}
              <p className='md:border-l-4 border-[#c6d3af] text-bold text-lg lg:text-xl xl:text-2xl md:ml-10 text-white text-center px-5 py-5 my-auto'>{activity.activityName}</p>
            </div>

          </div>
          {/* <!-- ===========ACTIVITY END========= --> */}

          {/* Content section */}
          <div className='text-white text-xl mt-20'>
            <div className='flex justify-center lg:mt-2 mx-auto bg-[#432d4aff] hover:bg-[#71487dff]  w-3/4 md:w-1/3 xl:w-1/4 rounded-full'>
              <button onClick={() => navigate('/admin/panel/update')} className='text-sm my-auto text-white'>{language?"செயல்பாட்டை மாற்றவும்":"Change Activity"}</button>
            </div>
            {/* Button for navigating to '/admin/panel/update' */}
          </div>
        </div>
      </div>
    </>
  );
};

// Exporting the AdminPanel component
export default AdminPanel;
