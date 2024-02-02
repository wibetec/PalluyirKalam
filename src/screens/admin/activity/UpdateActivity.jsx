// UpdateActivity.js
import React, { useEffect, useState } from 'react';
import { updateActivity } from '../../../utils/updateActivity';
import Appbar from '../../../components/Appbar';
import { getAuth } from 'firebase/auth';
import { getToken } from '../../../utils/storage';
import { useNavigate } from 'react-router-dom';
import { isAuthenicated } from '../../../utils/authenicate';

const UpdateActivity = () => {
  // State variables to manage form data
  const [activityName, setActivityName] = useState('');
  const [format, setFormat] = useState('');
  const navigate = useNavigate()
  const [activityImage, setActivityImage] = useState(null);
  const [activityVideo, setActivityVideo] = useState('');
  const [error, setError] = useState('');
  const [load, setLoad] = useState(false);
  const [block,setBlock]=useState(false);

  // Function to handle form submission
  const addActivity = async (e) => {
    e.preventDefault();

    // Call the updateActivity function with form data
    const result = await updateActivity({
      activityName,
      format,
      activityVideo,
      activityImage,
    });

    // Check the result and update state accordingly
    if (result.success) {
      setLoad(true);      
      setTimeout(() => {
        setLoad(false);
        setActivityName('');
      setActivityVideo('');
      setActivityImage(null);
      setError('');
        navigate('/admin/panel')
      }, 3000);
    } else {
      setError(result.message);
      setBlock(false);
    }

    // Reset loading state after 5 seconds
    
  };

  // Function to handle image file selection
  const activityImageHandler = (e) => {
    let selectedFile = e.target.files[0];
    const types = ['image/png', 'image/jpeg', 'image/jpg'];

    // Check if the selected file is of a valid type
    if (selectedFile && types.includes(selectedFile.type)) {
      setActivityImage(selectedFile);
      setError('');
    } else {
      setActivityImage(null);
      setError('Invalid Image Format');
    }
  };
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
  return (
    <div className='flex flex-col py-5 bg-[#8dab52ff] h-screen'>
      <div className='container text-black mx-auto  h-3/4 flex flex-col'>
        <Appbar />
        <div className='flex flex-col justify-center my-auto mx-auto w-3/4 lg:w-1/2'>
          <form
            autoComplete='off'
            className=' bg-[#c6d3af] flex flex-col p-5 rounded-lg my-auto  w-full'
            onSubmit={addActivity}
          >
            <h1 className='text-3xl mx-auto font-bold border-b border-black'>Update Activity</h1>
            {/* Input field for Activity Name */}
            <label htmlFor='ActivityName' className='mt-10 text-xl'>
              Activity Name :
            </label>
            <div className='w-full'>
              <textarea
                className='mt-1   bg-[#929e82ff] text-white rounded mx-2 #929e82ff w-full'
                placeholder='Activity Name'
                onChange={(e) => setActivityName(e.target.value.slice(0, 50))}
                value={activityName}
                maxLength={50}
              />
              <div className={`mx-2 text-right w-full text-sm  text-${activityName.length === 50 ? 'red' : 'black'}`}>
                {activityName.length}/50 characters
              </div>
            </div>

            {/* Dropdown for Activity Format */}
            <div className='mt-4  flex '>
              <label htmlFor='ActivityFormat' className='text-xl'>
                Format:
              </label>
              <select className='mx-3  rounded w-3/4 bg-[#929e82ff] text-white ' value={format} onChange={(e) => setFormat(e.target.value)}>
                <option value="">--select format--</option>
                <option value="video">Video Link</option>
                <option value="image">Image</option>
                {/* Add more options for other formats if needed */}
              </select>
            </div>

            {/* Conditional rendering based on selected format */}
            {format === "video" ? (
              // Input field for Video Link
              <input
                type='text'
                className='my-2 bg-[#929e82ff] text-white #929e82ff   rounded mx-2'
                placeholder='Video Link'
                onChange={(e) => setActivityVideo(e.target.value)}
                value={activityVideo}
              />
            ) : format === "image" ? (
              // Input field for Image File
              <input type='file' className='my-2 bg-[#929e82ff] text-white   rounded mx-2' onChange={activityImageHandler} />
            ) : (
              // Render other fields for additional formats if needed
              <p className='text-red-500 mt-2'>* Select Format</p>
            )}

            {/* Display error message if there is any */}
            {error && <span className='mt-4 mx-2 text-red-500'>{error}</span>}

            {/* Submit button */}
            <button disabled={load} onClick={()=>setBlock(true)} className={`mt-4 mx-auto hover:bg-[#9a57b3] bg-[#432F4A] text-white font-normal rounded px-2 relative ${block ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
              {!block?"Update Activity":"Updating"}
</button>


          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateActivity;
