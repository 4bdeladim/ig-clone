import { BsArrowDown } from 'react-icons/bs'
import styled from 'styled-components'
import { BiMessageSquareEdit } from 'react-icons/bi'
import { FaTelegramPlane } from 'react-icons/fa'

export const PageContainer = styled.div `
    display: flex ;
    width: 100vw ;
    height: 100vh ;
    flex-direction: row ;
    align-items: center ;
    justify-content: center ;
    background: #fafafa ;
`

export const MessagesContaienr = styled.div `
    display: flex ;
    flex-direction: row ;
    justify-self: center ;
    background: #ffffff ;
    border: 1px solid #dbdbdb ;
    border-radius: 5px ;
    height: 675px ;
    width: 935px ;
`

export const MessagesField = styled.div `
    display:flex ; 
    flex-direction: column ;
    align-items: center ;
    width: 350px ;
    border-right: 1px solid #dbdbdb ;

    @media screen and (max-width: 315px ) {
        width: 100vw ;
    }
`

export const OwnerField = styled.div `
    display: flex ;
    flex-direction: row;
    justify-content: center ;
    align-items: center ;
    width: 350px ;
    border-bottom: 1px solid #dbdbdb ;
    padding: 1rem 0 ;

    @media screen and (max-width: 315px ) {
        width: 100vw ;
    }

`

export const FixedField = styled.div `
    display: flex ;
    flex-direction: column ;
`

export const UserName = styled.a `
    font-weight: 600 ;
    font-size: 16px ;
    justify-self: center ;

`

export const Arrow = styled(BsArrowDown) `
    width: 22px ;
    height: 22px ;
    
`

export const Icon = styled(BiMessageSquareEdit) `
    width: 22px ;
    height: 22px ;
    
`

export const TitlesField = styled.div `
    display: flex ;
    flex-direction: row ;
    justify-content: flex-start ;
    align-items: center ;
    width: 350px ;
    border-bottom: 1px solid #dbdbdb ;
    padding: .8rem ;

    @media screen and (max-width: 350px ) {
        width: 100vw ;
    }
`

export const Primary = styled.a `
    font-weight: 600 ;
    font-size: 16px ;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
    margin-left: 2rem ;
    cursor: pointer ;
    color: #bdbdbd ;
`
export const General = styled.a `
    font-weight: 600 ;
    font-size: 16px ;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
    margin-left: 2rem ;
    cursor: pointer ;
    color: #bdbdbd ;
`
export const ChatField = styled.div `
    display: flex ;
    flex-direction: row ;
    align-items: center ;
    justify-content: flex-start ;
    width: 350px ;
    margin-top: 1rem ;
    margin-left: 2rem ;

    @media screen and (max-width: 350px ) {
        width: 100vw ;
    }
` 

export const Img = styled.img `
    width: 50px ;
    height: 50px ;
    border-radius: 50% ;

`

export const PersonInfo = styled.div `
    display: flex ;
    flex-direction: column ;
    justify-content: flex-start ;
    align-items: center ;
    margin: .5rem 0 0 1rem ;
`

export const Username = styled.a `
    font-weight: 600 ;
    font-size: 14px ;
    margin-right: 5rem ;
`

export const Message = styled.p `
    font-weight: 400 ;
    color: #8e8e8e ;
`

export const RightField = styled.div `
    display: flex ;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;
    width: calc(100% - 350px) ;

    @media screen and (max-width: 380px ) {
        display: none ;
    }

`

export const CenterIcon = styled(FaTelegramPlane)`
    font-size: 10rem ;
    padding: 1rem ;
    
`