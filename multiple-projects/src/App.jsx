import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/accordion'
import RandomColor from './components/random-color'
import StarRating from './components/start-rating'
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/load-more-button'
import TreeView from './components/tree-view'
import menus from './components/tree-view/data'
import QRCodeGenerator from './components/qr-code'
import LightDarkMode from './components/light-dark-mode'
import ScrollIndicator from './components/scroll-indicator'

function App() {
  

  return (
    <>
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating nStars={5}/> */}
      {/* <ImageSlider   url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}/> */}
      {/* <LoadMoreData/> */}
      {/* <TreeView menus={menus}/> */}
      {/* <QRCodeGenerator/> */}
      {/* <LightDarkMode/> */}
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>
    </>
  )
}

export default App
