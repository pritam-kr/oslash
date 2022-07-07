import React from 'react'

const Nav = () => {
  return (
   <nav className='flex justify-center items-center border-b-[2px] p-4 bg-[#fff]'>
        <h3 className='text-2xl'>oSlash Movies</h3>
   </nav>
  )
}

export default React.memo(Nav)