import React from 'react'

const Product = ({ img, name }) => {
  return (
    <div className='flex flex-col justify-between border rounded-lg shadow-lg p-3 w-[35%] h-[220px] md:w-full md:h-full'>
        <img src={img} alt="" className="h-[150px] md:h-full" />
        <p className='text-center'>{name}</p>
    </div>
  )
}

export default Product