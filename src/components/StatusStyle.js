import styled from 'styled-components'
import {  IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'


export const StatusContainer = styled.div `
    display: flex ;
    width: 615px ;
    margin: 0 auto ;
    margin-top: 5rem ;
    overflow: hidden ;
    border: 1px solid #9a9a9a65 ;
    border-radius: 5px ;
    padding: .4rem ;
    padding-left: .2rem ;

    @media screen and (max-width: 615px ) {
        width: 97vw ;
        margin: 0 auto ;
        margin-top: 5rem ;
        border-radius: 0 ;
        border-right: none ;
        border-left: none ;
    }
    
`

export const StoryContainer = styled.div `
    display: flex ;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;
    text-align: center ;
    margin: .3rem ;
    transition: all 0.5s ease-in ;
    
`
export const Name = styled.a `
    font-weight: 400 ;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
    font-size: 14px ;
    text-decoration: none ;
    margin-top: .4rem ;
    margin-left: .2rem ;
    cursor: pointer ; 

    &:hover {
        text-decoration: underline ;
    }
`

export const StatusImg = styled.img `
    width: 66px ;
    height: 66px ;
    padding: 2px ;
    border-radius: 50% ;
    border: 2px solid #f5783a ;
    cursor: pointer ;
`

export const BackArrow = styled(IoIosArrowDropleftCircle) `
    position: absolute ;
    top: 2.4rem ;
    cursor: pointer ;
    z-index: 4 ;
    margin-top: 5rem ;
    font-size: 2rem ;
    fill: #fff ;
`
export const NextArrow = styled(IoIosArrowDroprightCircle) `
    position: absolute ;
    top: 2.4rem ;
    cursor: pointer ;
    z-index: 4 ;
    margin-top: 5rem ;
    font-size: 2rem ;
    fill: #fff ;
    right: 5px  ;
`