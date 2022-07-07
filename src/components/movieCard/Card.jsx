import React from 'react'

const Card = ({eachMovies}) => {
  return (
    <div className='movie-card relative w-128 cursor-pointer'>
        <img src={eachMovies.image} alt="poster" className='object-contain w-full' />
        <p className='movie-title absolute bottom-0 bg-[#fff] p-3 w-full'>{eachMovies.title}</p>
    </div>
  )
}

 
export default React.memo(Card)