import React, { useState } from 'react'
import Status from './Status'
import { posts } from './data'
import { SendPostIcon, CommentIcon, HeartIcon, HomeContainer, Icon, LeftIcons, MiddleSection, NameAndPlace, PostContainer, PostImg, PostOwnerName, PostOwnerPlace, PostOwnerProfileImg, PostsContainer, ReactIconsContainer, RightIcons, SaveIcon, SeeMore, SeeMorePoints, TopPostSection, Descreption, Likes, Desc, PostOwner, Tags, Comments, Comment, FriendComment, CommentOne, CommentField, InputField, PostBtn, Date } from './HomeStyle'
import Suggestions from './Suggestions'




const Home = () => {

    const [click, setClick ] = useState(true) ;



    const comment = (e) => {
        var comment = e.taget.value 
        var matches = comment.match(/\b[^\d\s]+\b/g);
        if (matches && matches.length >= 2) {
            //two or more words
            return true;
        } else {
            //not enough words
            return false;
        }
    }

    const clickHandler = () => {
        setClick(!click)
    }
    return (
        <>
        <Status />
        <HomeContainer >
                <PostsContainer >
                             {posts.map((user ) => (
                                <PostContainer>
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
                                            <HeartIcon onClick={clickHandler} />  
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
                                        <InputField onChange={comment} placeholder='Add a comment..' />
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
