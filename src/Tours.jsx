import React from 'react'
import {useState} from "react";
const Tours = ({data , ButtonHandler}) =>{
    return (
        data.map((element)=>{
            return (
                <Tour {... element} ButtonHandler = {ButtonHandler} key = {element.id} />
            )
        })
    )
}

const Tour = ({id , image , info , name , price , ButtonHandler , })=> {
    const [readMore , setReadMore] = useState(false);

    const ToggleHandler =()=>{
        setReadMore(prevState => !prevState);
    }
    let information = " " ;
    if (readMore){
        information = (
            <p className = "Information">{`${info}`} <span onClick = {()=>ToggleHandler()}> Show More</span></p>
        )
    }
    else{
        information = (
            <p className = "Information">{`${info.slice(0 , 150)}`} <span onClick = {()=> ToggleHandler()}> Show less</span></p>
        ) 
    }
    return(
        <article  className = "Card">
        <img src = {image} alt = {name}/>
        <div>
            <h3>{name}</h3>
            <p className = "Price"> {`${price} $`} </p>
        </div>
        {information}
        <button className = "ButtonDanger" onClick = {()=>ButtonHandler(id)}> Not Intersted ! </button>
    </article>
    )    
}


export default Tours;