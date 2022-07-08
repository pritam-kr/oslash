import React from 'react'

const Poster = ({selectedMovie}) => {
    return (
        <div className='movies-poster h-96 border-3 w-full flex justify-center'>
            <img src={selectedMovie.image} alt={selectedMovie.title} className="w-[1600px]  mr-auto ml-auto border-3 object-contain" />
        </div>
    )
}

export default React.memo(Poster)