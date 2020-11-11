import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const HeaderContainer = styled.header `
    position: fixed ;
    display: flex ;
    align-items: center;
    text-align: center;
    justify-content: center;
    border-bottom: solid 0.01rem #9a9a9a65 ;
    width: 100vw ;
    background: #fff; 
    z-index: 3 ;
    padding: .4rem ;

    
`

export const Title = styled.h1 `
    width: 33.33333333333vw ;
    font-family: 'Billabong', sans-serif;
    font-size: 2rem ;
    font-weight: 400 ;
    text-align: center ;
    text-decoration: none ;
`

export const SearchInput = styled.input `
    width: 200px ;
    margin: 0 2rem ;
    padding: .4rem 0 ;
    border-radius: 5px ;
    border: solid 1px  #dbdbdb ; 
    outline: none;
    background: #fafafa ;
   

    &::placeholder {
        text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    @media screen and (max-width: 615px ) {
        display:none ;
    }
` 

export const LinksContainer = styled.div `
    display: flex ;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 33.3333333333vw ;
`

export const HomeIcon = styled.img `
    width: 22px ;
    margin: 0 .8rem ;

    
`

export const ProfileImg = styled.img `
    margin: 0 .8rem ;
    width: 22px ;
    border-radius: 50% ;
`