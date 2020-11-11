import React, { useState } from 'react'
import Status from './Status'
import { posts } from './data'
import { SendPostIcon, CommentIcon, HeartIcon, HomeContainer, Icon, LeftIcons, MiddleSection, NameAndPlace, PostContainer, PostImg, PostOwnerName, PostOwnerPlace, PostOwnerProfileImg, PostsContainer, ReactIconsContainer, RightIcons, SaveIcon, SeeMore, SeeMorePoints, TopPostSection, Descreption, Likes, Desc, PostOwner, Tags, Comments, Comment, FriendComment, CommentOne, CommentField, InputField, PostBtn, Date, StorysContainer } from './HomeStyle'
import Suggestions from './Suggestions'
import { BackArrow, NextArrow } from './StatusStyle'
export const TransformStyle = true ;


const Home = () => {

    //Status,
    

    //
    



    return (
        <>
        
        <HomeContainer >
                <PostsContainer >
                    <StorysContainer>
                        
                        <Status  />
                        
                    </StorysContainer>
                             {posts.map((user, index ) => (
                                <PostContainer key={index} >
                                    <TopPostSection>
                                        <PostOwnerProfileImg src={user.avatar} />
                                        <NameAndPlace >
                                            <PostOwnerName to='/' > {user.name} </PostOwnerName>
                                            <PostOwnerPlace to='/' > {user.place} </PostOwnerPlace>
                                        </NameAndPlace>
                                        <SeeMore >
                                           <SeeMorePoints>...</SeeMorePoints> 
                                        </SeeMore >
                                    </TopPostSection>
                                    <MiddleSection >
                                        <PostImg src={user.postimg} />
                                    </MiddleSection>
                                    <ReactIconsContainer>
                                        <RightIcons>
                                            <HeartIcon  />  
                                            <CommentIcon />
                                            <SendPostIcon />
                                        </RightIcons>
                                        <LeftIcons>
                                            <SaveIcon />
                                        </LeftIcons>
                                    
                                    </ReactIconsContainer>
                                    <Descreption>
                                        <Likes> {user.likes} likes </Likes>
                                        <Desc> <span> <PostOwner href='#'> {user.name}</PostOwner></span>{user.desc} </Desc>
                                    </Descreption>
                                    <Tags>
                                        { user.tags }
                                    </Tags>
                                    <Comments>
                                        <Comment>
                                            <FriendComment> {user.name1} </FriendComment>
                                            <CommentOne> {user.comment1} </CommentOne>
                                        </Comment>
                                        <Comment >
                                            <FriendComment> {user.name2} </FriendComment>
                                            <CommentOne> {user.comment2} </CommentOne>
                                        </Comment>
                                    </Comments>
                                    <Date>
                                        { user.date }
                                    </Date>
                                    <CommentField>
                                        <InputField placeholder='Add a comment..' />
                                        <PostBtn href='#' > Post </PostBtn>
                                    </CommentField>
                                </PostContainer>

                                 
                                 
                             ))}
                     
                </PostsContainer>
                <Suggestions />
        </HomeContainer>
        </>
    )
}

export default Home
