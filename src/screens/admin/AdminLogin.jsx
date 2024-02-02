import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Appbar from '../../components/Appbar';
import { auth } from '../../components/config/config';
import { validateUsername, validateAccesskey, validatePassword } from '../../utils/validate';
import { getToken, setToken } from '../../utils/storage';
import { getAuth } from 'firebase/auth';

const AdminLogin = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [usernameerr, setUsernameerr] = useState('');
  const [password, setPassword] = useState('');
  const [passworderr, setPassworderr] = useState('');
  const [accesskey, setAccesskey] = useState('');
  const [accesskeyerr, setAccesskeyerr] = useState('');
  const [error, setError] = useState('');

  const handlePaste = (e) => {
    e.preventDefault(); // Prevent pasting
  };


  const login = (e) => {
    e.preventDefault();
    if (!validateUsername(username)) {
      setUsernameerr('Username Feild is Empty Or Invalid Username');

    } else if (!validatePassword(password)) {
      setPassworderr('Password Feild is Empty Or Invalid Password');

      setUsernameerr('')
    } else if (!validateAccesskey(accesskey)) {
      setAccesskeyerr('Empty Feild or Invalid Access Key ..!');

      setUsernameerr('')
    } else {
      auth.signInWithEmailAndPassword(username, password)
        .then((res) => {
          console.log(res.user.uid);
          setUsername('');
          setPassword('');
          setAccesskey('');
          setError('');
          setToken(res.user.uid);
          navigate('/admin/panel');
        })
        .catch(() => setError('Invalid Credentials ! Please Check All The Feilds...!'));
    }
  };
  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        if ((user.uid === getToken())) {
          navigate('/admin/panel');
        }
      }
    })
  }, [navigate]);
  return (
    <main>
      <section className=' bg-[#8ea851ff] py-5 px-5 h-screen'>
        <div className='container text-black mx-auto  h-3/4 flex flex-col'>
          <Appbar />
          <div className='flex flex-col justify-center my-auto mx-auto w-3/4 lg:w-1/2'>
            <form className=' bg-[#c6d3af] flex flex-col p-5 rounded-lg my-auto  w-full' onSubmit={login} autoComplete='off'>
              <div>
                <h1 className='text-center text-black border-b-2 border-black border-opacity-10 pb-2 font-Poppins font-bold text-2xl'>Login</h1>
              </div>
              <div className='w-full mt-7 flex flex-col '>
                <div className='my-4 px-3  flex flex-col justify-center'>
                  <div className='flex justify-center'>
                    <input name="username" value={username} onChange={(e) => {
                      setUsernameerr('')
                      setUsername(e.target.value)
                    }} className='group focus:outline-none px-1 font-bold font-mono bg-[#939e82ff] rounded-lg text-white placeholder:text-gray-200' type="text" placeholder='Username' />
                    <button onClick={() => setUsername('')}>
                      <AiOutlineClose size={18} className='opacity-50' />
                    </button>
                  </div>
                  {usernameerr && <div className="my-1  text-sm mx-2 text-red-500 text-center">{usernameerr}</div>}

                </div>

                <div className='my-4 px-3  flex flex-col justify-center'>
                  <div className="flex justify-center">
                    <input name="password" value={password} onChange={(e) => {
                      setPassworderr('')
                      setPassword(e.target.value)
                    }} className=' focus:outline-none px-1 font-bold font-mono bg-[#939e82ff] rounded-lg text-white placeholder:text-gray-200' type="Password" placeholder='Password' />
                    <button onClick={() => setPassword('')}>
                      <AiOutlineClose size={18} className='opacity-50' />
                    </button>
                  </div>
                  {passworderr && <div className="my-1  text-sm mx-2 text-center text-red-500">{passworderr}</div>}
                </div>


                <div className='my-4 px-3  flex flex-col  justify-center'>
                  <div className="flex justify-center">
                    <input name="accesskey" value={accesskey} onPaste={handlePaste} onChange={(e) => {
                      setAccesskeyerr('')
                      setAccesskey(e.target.value)
                    }} className='group focus:outline-none px-1 font-bold font-mono bg-[#939e82ff] rounded-lg text-white placeholder:text-gray-200' type="text" placeholder='AccessKey' />
                    <button onClick={() => setAccesskey('')}>
                      <AiOutlineClose size={18} className='opacity-50' />
                    </button>
                  </div>
                  {accesskeyerr && <div className="my-1  text-sm mx-2 text-center text-red-500">{accesskeyerr}</div>}
                </div>


              </div>


              <div className='flex justify-center m-3'>
                <button type='submit' className='hover:bg-[#9a57b3] bg-[#432F4A] text-white font-Poppins px-3 py-1 rounded-lg font-bold shadow-lg mr-5'>
                  Enter
                </button>
              </div>
              {error && <div className="my-2 mx-auto text-red-500">{error}</div>}

            </form>

          </div>
        </div>
      </section>
    </main >
  );
};

export default AdminLogin;
