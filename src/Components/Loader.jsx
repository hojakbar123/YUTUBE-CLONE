import React from 'react'

function Loader() {
  return (
    <div className="flex justify-center items-center h-full max-h-[80vh] ">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-300 border-solid border-opacity-50 "></div>
    </div>
  )
}

export default Loader