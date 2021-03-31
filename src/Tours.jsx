import React from 'react'
import { useState } from "react";
const Tours = ({ data, ButtonHandler }) => {
    return (
        data.map((element) => {
            return (
                <Tour {...element} ButtonHandler={ButtonHandler} key={element.id} />
            )
        })
    )
}

const Tour = ({ id, image, info, name, price, ButtonHandler, }) => {
    const [readMore, setReadMore] = useState(false);

    const ToggleHandler = () => {
        setReadMore(prevState => !prevState);
    }
    let information = " ";
    if (readMore) {
        information = (
            <p className="Information">{`${info}`} <span onClick={() => ToggleHandler()}> Show More</span></p>
        )
    }
    else {
        information = (
            <p className="Information">{`${info.slice(0, 150)}`} <span onClick={() => ToggleHandler()}> Show less</span></p>
        )
    }
    return (
        <article className="Card">
            <img src={image} alt={name} title={name} width="100%"/>
            <div>
                <h2> <span>{name}</span> <span className ="Price">{`${price} $`}</span></h2>
            </div>
            {information}
            <button className="ButtonDanger" onClick={() => ButtonHandler(id)} aria-label="Not Intersted"> Not Intersted ! </button>
        </article>
    )
}


export default Tours;