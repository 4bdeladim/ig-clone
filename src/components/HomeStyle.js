import styled from 'styled-components' 
import { Link } from 'react-router-dom'
import { FiHeart } from 'react-icons/fi'
import {  FaRegBookmark, FaRegComment, FaRegPaperPlane, FaStaylinked } from 'react-icons/fa'
export const HomeContainer = styled.div `
    display: flex;
    flex-direction: row  ;
    text-align: center;
    justify-content: center;
    align-items: center;

`

export const PostsContainer = styled.div `
    width: 615px ;
    @media screen and (max-width: 615px ) {
        width: 97vw ;
        margin: 0 auto ;
    }
`

export const PostContainer = styled.div `
    width: 100% ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 0 auto ;
    border: solid 0.01rem #9a9a9a65 ;
    margin: 2rem 0;
    border-radius: 3px ;
    padding-bottom: .1rem ;

    @media screen and (max-width: 615px ) {
        border-right: none ;
        border-left: none ;
        border-radius: 0 ;
    }
    

`

export const TopPostSection = styled.div `
    display: flex ;
    flex-direction: row ;
    align-items: center;
    text-align: center;
    padding: .5rem 1rem ;
`

export const PostOwnerProfileImg = styled.img `
    width: 2rem ;
    height: 2rem ;
    border-radius: 50% ;
    margin-right: .3rem ;
    cursor: pointer ;
`

export const NameAndPlace = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center ;
    margin: .2rem  0 0 .5rem ;
    margin-bottom: .1rem ;
    width: 90% ;
`

export const PostOwnerName = styled(Link) `
    font-size: 14px  ;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-decoration: none;
    justify-self: start;
    text-align: start;
    align-self: flex-start;


    &:hover {
        text-decoration: underline ;
    }
`

export const PostOwnerPlace = styled(Link) `
    justify-self: start;
    text-align: start;
    align-self: flex-start;
    font-size: 12px ;
    line-height: 15px;
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-decoration: none ;
`

export const SeeMore = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    text-align: right ; 
    width: 1% ;
    font-size: 16px ;
    margin-bottom: .4rem ;
    font-weight: bolder;
`

export const SeeMorePoints = styled.h1 `
    text-align: right ;
    font-size: 20px ;
    cursor: pointer ; 

`

export const MiddleSection = styled.div `
    display: flex;
    flex-direction: row;
    
`

export const PostImg = styled.img `
    width: 100% ;
    margin: .2rem auto ;
`

export const ReactIconsContainer = styled.div `
    display: flex ;
    flex-direction: row ;
    padding: .3rem 0 .3rem  1rem ;
    
`
export const RightIcons = styled.div `
    display: flex ;
    align-items: center ;
    justify-content: start;
    width: 50% ;

`
export const LeftIcons = styled.div `
    display: flex ;
    align-items: center ;
    width: 50% ; 
    justify-content: flex-end ;
    margin-right: .4rem ;
    margin-bottom: .1rem ;

`

export const HeartIcon = styled(FiHeart)`
    font-size: 1.6rem ;
    font-weight: 400 ; 
    cursor: pointer ;
    padding: 0 ;

`
export const CommentIcon = styled(FaRegComment) `
    font-size: 1.6rem ;
    font-weight: 400 ; 
    cursor: pointer ;
    padding: 0 ;
    transform: scaleX(-1) ;
    margin: 0 .5rem ;
`

export const SendPostIcon = styled(FaRegPaperPlane) `
    font-size: 1.5rem ;
    font-weight: 400 ; 
    cursor: pointer ;
    padding: 0 ;
    margin-top: .1rem ;
    
`

export const SaveIcon = styled(FaRegBookmark) `
    font-size: 1.4rem ;
    font-weight: 400 ; 
    cursor: pointer ;
    padding: 0 ;
    margin-top: .1rem ;
    

`

export const Descreption = styled.div `
    display: flex ;
    flex-direction: column;
    text-align: start;
    align-items: center;
    justify-content: start;
    padding-left: 1rem ;
`

export const Likes = styled.h1 `
    width: 100% ;
    align-items: flex-start;
    font-size: 14px ;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: .5rem 0;
`

export const Desc = styled.p `
    align-self: flex-start;
    font-size: 14px ;
    font-weight: 14px ;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 70% ;
    
`

export const PostOwner = styled.a `
    font-weight: 600;
    margin-right: 5px ;
    text-decoration: none ;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px ;

    &:hover {
        text-decoration: underline ;
    }

`

export const Tags = styled.div `
    color: #2d5a85;
    width: 90% ;
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    text-align: start;
    padding-left: 1rem ;
    padding-top: .5rem ;
`

export const Comments = styled.div `
    display: flex;
    flex-direction: column;
`

export const Comment = styled.div `
    display: flex;
    flex-direction: row;
    text-align: start;
    justify-content: start;
    align-content: flex-start;
    align-items: center;
    padding-left: 1rem ;
    padding-top: .3rem ;

`

export const FriendComment = styled.h3 `
    font-size: 14px ;
    font-weight: 600;
    margin-right: .2rem ;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    cursor: pointer;

    &:hover {
        text-decoration: underline ;
    }
`

export const CommentOne = styled.p `
    font-size: 14px ;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400 ;
`

export const Date = styled.div `
    display: flex;
    justify-self: flex-start;
    font-weight: 400 ;
    font-size: 14px ;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: .5rem 0 .5rem  1rem ;
    color: #9a9a9a;
    cursor: pointer;
`

export const CommentField = styled.div  `
    width: 100% ;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-top: solid 0.01rem #9a9a9a65 ;
`

export const InputField = styled.input `
    width: 100% ;
    border: none;
    padding: 1rem 0 1rem 1rem ;
    outline: none;

    &::placeholder {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`

export const PostBtn = styled.a `
    color: #0095f6;
    border: none;
    font-weight: bolder;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-decoration: none ;
    padding-right: 1rem ;
`

export const StorysContainer = styled.div  `
    position: relative ;
    display: flex ;
    flex-direction: row ;
    align-items: center ;
    
`