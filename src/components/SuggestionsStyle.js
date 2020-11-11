import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const SuggestionsContainer = styled.div `
    display: flex;
    flex-direction: column ;
    width: 340px ;
    justify-content: flex-start ;
    align-self: flex-start ;
    position: sticky ;
    top: 8rem ;
    margin-left: 2rem ;

    @media screen and (max-width: 1021px ) {
        display: none ;
    }
    
`
export const  AccountField = styled.div `
    display: flex ; 
    flex-direction: row ;
    justify-content: flex-start ;
    
` 

export const ProfileImg = styled.img `
    width: 66px ;
    height: 66px ;
    border-radius: 50% ;
`

export const AccountInfo = styled.div `
    display: flex ;
    flex-direction: row  ;
    justify-content: flex-start ;
    align-items: center ;


`

export const NameAndUserName = styled.div `
    display: flex ;
    flex-direction: column ;
    margin-left: .5rem ;
    margin-top: .2rem ;
    width: 90% ;
    margin-right: 7rem ;
`

export const Title = styled.div `
    display: flex ;
    flex-direction: row ;


`

export const SuggestionsForYou = styled.a `
    justify-self: flex-start ;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
    margin-top: 2rem ;
    margin-left: .1rem ;
    font-size: 14px ;
    font-weight: 600 ;
    color: #8e8e8e ;
`

export const SeeAll = styled(Link) `
    justify-self: flex-end ;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
    margin-top: 2rem ;
    margin-left: 10rem ;
    font-size: 14px ;
    font-weight: 400 ; 
    text-decoration: none ;

    &:hover {
        text-decoration: underline ;
    }
`

export const UserName = styled(Link) `
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
    justify-self: start ;
    align-self: center ;
    font-weight: 600 ;
    text-decoration: none ;
`

export const Name = styled.a `
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
    justify-self: flex-start ;
    align-self: center ;
    font-weight: 400 ;
    color: #8e8e8e ;
    
`

export const Switch = styled.a `
    justify-self: flex-end ;
    text-align: right ;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
    color: #0195f6 ;
    cursor: pointer ; 
`

export const ProfileImgSuggestion  = styled.img `
    width: 44px ;
    height: 44px ;
    border-radius: 50% ;
    margin-top: .3rem ;
`