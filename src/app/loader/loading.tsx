import React from 'react'
import Loader from '../../components/ui/loader'

const page = () => {
  return (
    <div className="w-full h-full">
      <Loader
        className="w-12 h-12 sm:w-22 sm:h-22 md:w-32 md:h-32"
        progressBarClassName="w-24 sm:w-40 md:w-56"
      />
    </div>
  )
}

export default page