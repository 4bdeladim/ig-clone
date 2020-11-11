import React, { useState } from 'react'
import { Arrow, CenterIcon, CenterImg, ChatField, FixedField, General, Icon, Img, Message, MessagesContaienr, MessagesField, OwnerField, PageContainer, PersonInfo, Primary, RightField, TitlesField, Username, UserName } from './messagesStyle'
const Messages = () => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('')

    const chatHandler = (e) => {
        
    }
    return (
        <PageContainer>
            <MessagesContaienr>
                <MessagesField>
                    <FixedField>
                        <OwnerField>
                            <UserName>
                                4bdeladim
                            </UserName>
                            <Arrow />
                            <Icon />
                        </OwnerField>
                        <TitlesField>
                            <Primary>PRIMARY</Primary>
                            <General>GENERAL</General>
                        </TitlesField>
                    </FixedField>
                    <ChatField>
                        <Img src='https://pbs.twimg.com/profile_images/1304029376846143490/TUawF3TS_400x400.jpg' />
                        <PersonInfo>
                            <Username onClick={setName('ii9ill1')} >ii9ill1</Username>
                            <Message onClick={setMessage('Hi how are you ? ')}>Hi how are you ? </Message>
                        </PersonInfo>
                    </ChatField>
                </MessagesField>
                <RightField>
                    <CenterIcon />
                </RightField>
            </MessagesContaienr>
        </PageContainer>
        
    )
}

export default Messages
