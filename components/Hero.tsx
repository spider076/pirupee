import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'

const Hero = () => {
  return (
    <MaxWidthWrapper className='max-w-[1200px]'>
      <div>
        <h1 className='pt-20 text-3xl max-md:text-[1.1rem] font-bold text-center'>A perfect place to sell your pi and get inr instantly !
        </h1>
        <p className='text-xl mt-0 max-md:text-[0.9rem] text-center'>we provide pi value according to the market standards</p>
      </div>
    </MaxWidthWrapper>
  )
}

export default Hero