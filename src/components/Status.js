import React, { useState } from 'react'
import { StatusData } from './StatusData'
import { BackArrow, NextArrow, Name, StatusContainer, StatusImg, StoryContainer } from './StatusStyle'



const Status = () => {
    const [next, setNext] = useState(true);
    const [num, setNum] = useState(0)

    let style ;
    let display ;
    let display2 ;
    
    if(next === true ) {
        style = `translateX(-${num}%)`
        if(num === 0) {
            display = 'none'
        }
        if(num >= 800 ) {
            display2= 'none';
        }
    } 
    
    const nextHandler = () => {
        setNext(true);
        if(num < 800) {
            setNum(num + 300)
        }
        
    }
    const backHandler = () => {
        if(num >= 300) {
            setNum(num - 300)
        }
    }

    const TransformStyle = {
        transform: style
    }
    const Stylesheet = {
        display: display 
    }
    const Stylesheet2 = {
        display: display2 
    }

    
    return (
        <>
        
        <StatusContainer>
            <NextArrow style={Stylesheet2} onClick={nextHandler}  />
            <BackArrow style={Stylesheet}  onClick={backHandler} />
                {StatusData.map((user, index) => (
            <StoryContainer style={TransformStyle} key={index}>
                <StatusImg src={user.img} />
                <Name >{user.name}</Name>
            </StoryContainer>
                ))}
                
        </StatusContainer>
        </>
    )
}

export default Status
