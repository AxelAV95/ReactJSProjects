import React from 'react'
import Tabs from './tabs'
import './tabs.css'

function TabTest() {

    const tabs = [
        {
            label: 'Tab 1',
            content: <div>Content tab1</div>
        },
        {
            label: 'Tab 2',
            content: <div>Content tab2</div>

        },
        {
            label: 'Tab 3',
            content: <div>Content tab3</div>
        }
    ]

   const handleChange = (currentTabIndex)  =>{
     console.log(currentTabIndex)
   }
  return (
    <Tabs tabsContent={tabs} onChange={handleChange}/>
  )
}

export default TabTest
