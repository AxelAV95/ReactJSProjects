import React, { useState } from 'react'
import data from './data'
import './styles.css'

function Accordian() {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([])
    function handleSingleSelection(id) {
        setSelected(id === selected ? null : id)
    }

    function handleMultSelection(id) {
        let cpyMultiple = [...multiple]
        const findIndexCurrentId = cpyMultiple.indexOf(id)

        if (findIndexCurrentId === -1) {
            cpyMultiple.push(id)
        } else {
            cpyMultiple.splice(findIndexCurrentId, 1)
        }

        setMultiple(cpyMultiple)
    }
    return (
        <div className='wrapper'>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable multi-selection</button>
            <div className='accordian'>
                {
                    data && data.length > 0 ?
                        data.map(dataItem => <div key={dataItem.id} className='item'>
                            <div onClick={enableMultiSelection
                    ? () => handleMultSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)} className='title'>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {enableMultiSelection
                                ? multiple.indexOf(dataItem.id) !== -1 && (
                                    <div className="content ">{dataItem.answer}</div>
                                )
                                : selected === dataItem.id && (
                                    <div className="content ">{dataItem.answer}</div>
                                )}
                            {/* {
                    selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? <div className='content'>{dataItem.answer}</div> : null
                } */}
                        </div>)
                        : <div>No data found</div>
                }
            </div>
        </div>
    )
}

export default Accordian
