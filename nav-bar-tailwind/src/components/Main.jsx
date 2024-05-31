import React from 'react'

function Main() {
  return (
    <div className="m-3 grid gap-4 sm:grid-cols-12">
      <div className="lg:block xl:block hidden sm:col-span-2 h-screen rounded-lg bg-orange-500 shadow"></div>
      <div className="md:col-span-12 lg:col-span-10 xl:col-span-8  sm:col-span-12  h-screen rounded-lg bg-teal-500 shadow "></div>
      <div className="xl:block hidden sm:col-span-2 h-screen rounded-lg bg-yellow-500 shadow"></div>
      

    </div>
  )
}

export default Main
