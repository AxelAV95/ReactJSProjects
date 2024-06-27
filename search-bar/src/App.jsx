import { useState } from 'react'
import SearchBar from './components/SearchBar'
import SearchResult from './components/SearchResult'

function App() {

  const [result, setResult] = useState([]) //establece los resultados de busqueda
  const [option, setOption] = useState("") //Establece la opcion elegida
  const [showResults, setShowResults] = useState(false) //Desactiva los resultados de busquedas
  return (
    <div className='flex justify-center items-center flex-col pt-28 min-w-[400px] w-full'>
      <div className='w-[450px]'>
      <SearchBar setResult = {setResult} option={option} setOption={setOption} setShowResults={setShowResults}/>
      {showResults && <SearchResult results={result} setOption={setOption} setShowResults={setShowResults} />}
      </div>
    </div>
  )
}

export default App
