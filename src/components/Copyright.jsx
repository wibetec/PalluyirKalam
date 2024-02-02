import React from 'react'

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='bg-black text-white text-center border-t py-2 px-7'>
        <div className=''>
            <p>Copyright  &copy;<span id="currentYear"> {currentYear}</span> Designed by Wibetec. All Right Reserved</p>
        </div>
    </div>
  )
}

export default Copyright