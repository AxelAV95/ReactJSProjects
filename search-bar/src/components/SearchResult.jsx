import React from 'react'

function SearchResult({results,  setOption, setShowResults}) {

    const handleClick = (name) => {
        setOption(name)
        setShowResults(false)
      }
  return (
    <div className='w-full bg-[#2f3134] flex flex-col shadow-lg rounded-lg mt-4 max-h[300px] overflow-y-scroll px-3 scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-600'>
        {
            results.map((result,idx) =>{
                return (
                    <div key={idx} onClick={() => handleClick(result.name)}>
                        <p className='text-white text-lg mt-1 cursor-pointer hover:bg-gray-700 py-2'>
                                {result.name}
                        </p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default SearchResult
