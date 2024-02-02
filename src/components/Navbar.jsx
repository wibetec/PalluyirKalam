import { useState ,useContext} from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Palluyirkalam/Logo.png';
import { IoClose, IoMenu } from 'react-icons/io5';
import { Language } from '../hooks/Language';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage } = useContext(Language)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className='h-10'></div>
      <div className={`max-w-[1440px] mx-auto ${!menuOpen ? "rounded-xl" : "rounded-t-xl border-b"} bg-[#666578ff] flex justify-between px-5 lg:px-10 h-14`}>
        <div className='flex my-auto'>
          <img src={Logo} className='rounded-full w-10' alt='Logo' />
          <p className='text-white font-bold text-lg lg:text-2xl my-auto px-2'>{language ? "பல்லுயிர்களம்" : "PalluyirKalam"}</p>
        </div>

        {/* Hamburger menu icon for small devices */}
        <div className='lg:hidden flex'>
          {language ? <button onClick={() => setLanguage(false)} className='text-lg px-3 mx-5 h-8 my-auto rounded-xl bg-[#debd97ff] text-center text-black font-semibold'>Eng</button> : <button onClick={() => setLanguage(true)} className='text-lg px-3 mx-5 h-8 my-auto rounded-xl bg-[#debd97ff] text-center text-black font-semibold'>தமிழ்</button>}
          <div className='lg:hidden cursor-pointer flex' onClick={toggleMenu}>
            {menuOpen ? (
              <IoClose className='text-white text-4xl my-auto' />
            ) : (
              <IoMenu className='text-white text-4xl my-auto' />
            )}
          </div>
        </div>

        {/* Navigation links for large devices */}
        <div className='text-white font-bold text-2xl my-auto hidden lg:flex'>
          <ul className='flex'>
            <li className='px-3'>
              {language ? <button onClick={() => setLanguage(false)} className='text-lg px-3 rounded-xl bg-[#debd97ff] text-center text-black font-semibold'>Eng</button> : <button onClick={() => setLanguage(true)} className='text-lg px-3 rounded-xl bg-[#debd97ff] text-center text-black font-semibold'>தமிழ்</button>}
            </li>
            <li className='px-3'>
              <NavLink to='/'>{!language ? "Home" : "முகப்பு"}</NavLink>
            </li>
            <li className='px-3'>
              <Link
                className='cursor-pointer'
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >{!language ? "About Us" : "எங்களை பற்றி"}</Link>
            </li>
            <li className='px-3'>
              <Link
                activeClass="active"
                className='cursor-pointer'
                to="services"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >{!language ? "Services" : "சேவைகள்"}</Link>
            </li>
          </ul>
        </div>

        {/* Responsive menu for small devices */}
        {menuOpen && (
          <div className='lg:hidden absolute top-24 right-0 left-0 bg-[#666578ff] z-50 rounded-b-xl text-white font-bold text-2xl my-auto'>
            <ul className='flex flex-col items-center'>
              <li className='py-2'>
                <Link to='/' onClick={toggleMenu}>
                  {!language ? "Home" : "முகப்பு"}
                </Link>
              </li>
              <li className='py-2'>
                <Link
                  activeClass="active"
                  className='cursor-pointer'
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  {!language ? "About Us" : "எங்களை பற்றி"}
                </Link>
              </li>
              <li className='py-2'>
                <Link
                  activeClass="active"
                  className='cursor-pointer'
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={toggleMenu}
                >{!language ? "Services" : "சேவைகள்"}</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
