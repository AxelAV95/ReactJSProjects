import React, { useRef } from 'react';

function ScrollToSection2() {

    const data = [
        {
            label: "First Card",
            style: {
                width: "100%",
                height: "600px",
                background: "red",
            },
        },
        {
            label: "Second Card",
            style: {
                width: "100%",
                height: "600px",
                background: "grey",
            },
        },
        {
            label: "Third Card",
            style: {
                width: "100%",
                height: "600px",
                background: "blue",
            },
        },
        {
            label: "Fourth Card",
            style: {
                width: "100%",
                height: "600px",
                background: "green",
            },
        },
        {
            label: "Fifth Card",
            style: {
                width: "100%",
                height: "600px",
                background: "orange",
            },
        },
    ];
    const refs = useRef(data.map(() => React.createRef()));

  

    const handleScrollToSection = (index) => {
        let pos = refs.current[index].current.getBoundingClientRect().top;

        window.scrollTo({
            top: pos,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <h1>Scroll to a particular section</h1>
            {data.map((dataItem, index) => (
                <div key={index} ref={refs.current[index]} style={dataItem.style}>
                    <h3>{dataItem.label}</h3>
                    <button onClick={() => handleScrollToSection(index)}>Scroll to Section</button>
                </div>
            ))}
        </div>
    );
}

export default ScrollToSection2;
