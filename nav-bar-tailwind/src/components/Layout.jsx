import React from 'react'

function Layout() {
  return (
    <>

    {/* <div className="m-3 grid gap-4 sm:grid-cols-2">
      <div className="min-h-[100px] rounded-lg bg-orange-500 shadow"></div>
      <div className="min-h-[100px] rounded-lg bg-teal-500 shadow"></div>

    </div> */}
    {/* <div className="m-3 grid gap-4 sm:grid-cols-4">
      <div className="min-h-[100px] rounded-lg bg-orange-500 shadow"></div>
      <div className="min-h-[100px] rounded-lg bg-teal-500 shadow"></div>
      <div className="min-h-[100px] rounded-lg bg-yellow-500 shadow"></div>
      <div className="min-h-[100px] rounded-lg bg-red-500 shadow"></div>

    </div> */}

    {/* <div className="m-3 grid gap-4 sm:grid-cols-12 grid-cols-1">
      <div className="min-h-[100px] rounded-lg bg-orange-500 shadow sm:col-span-2"></div>
      <div className="min-h-[100px] rounded-lg bg-teal-500 shadow sm:col-span-10"></div>
   

    </div> */}

    <div className="m-3 grid gap-4 sm:grid-cols-12">
      <div className="sm:block hidden sm:col-span-2 min-h-[100px] rounded-lg bg-orange-500 shadow"></div>
      <div className="sm:col-span-8  min-h-[100px] rounded-lg bg-teal-500 shadow "></div>
      <div className="sm:block hidden sm:col-span-2 min-h-[100px] rounded-lg bg-yellow-500 shadow"></div>
      

    </div>

    {/* 
    Tailwind
    <div className="m-3 grid gap-4 sm:grid-cols-12">
      <div className="lg:block xl:block hidden sm:col-span-2 min-h-[100px] rounded-lg bg-orange-500 shadow"></div>
      <div className="md:col-span-12 lg:col-span-10 xl:col-span-8  sm:col-span-12  min-h-[100px] rounded-lg bg-teal-500 shadow "></div>
      <div className="xl:block hidden sm:col-span-2 min-h-[100px] rounded-lg bg-yellow-500 shadow"></div>
      

    </div> */}


  </>
  )
}

export default Layout
