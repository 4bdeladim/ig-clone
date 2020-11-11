import React, { useState } from 'react'
import { AccountField, AccountInfo, Name, NameAndUserName, ProfileImg, ProfileImgSuggestion, SeeAll, SuggestionsContainer, SuggestionsForYou, Switch, Title, UserName } from './SuggestionsStyle'


function Suggestions() {





    const mystyle = {
        marginTop: '1rem' 
    }

    return (
        <SuggestionsContainer>
                <AccountField>
                <AccountInfo>
                    <ProfileImg src='https://avatars0.githubusercontent.com/u/69595575?s=460&u=403f962074204181c4323b4e42a6d88bb0eaf33b&v=4' />
                    <NameAndUserName>
                        <UserName to='/profile'>4bdeladim</UserName>
                        <Name>ABDELADIM</Name>
                    </NameAndUserName>
                    <Switch>
                        Switch
                    </Switch>
                </AccountInfo>
                </AccountField>
                <Title>
                    <SuggestionsForYou> SuggestionsForYou </SuggestionsForYou>
                    <SeeAll to='/suggestions'> See All </SeeAll>
                </Title>
                <AccountInfo style={mystyle} >
                    <ProfileImgSuggestion src='https://i.pinimg.com/564x/03/8c/36/038c3621e764a461937d43267322bfd1.jpg' />
                    <NameAndUserName >
                        <UserName to='/profile'>wywywwy</UserName>
                    </NameAndUserName>
                    <Switch>
                        Follow
                    </Switch>
                </AccountInfo>
                <AccountInfo style={mystyle} >
                    <ProfileImgSuggestion src='https://i.pinimg.com/236x/6b/13/1d/6b131d709b723808776bab4a3a429ac4.jpg' />
                    <NameAndUserName >
                        <UserName to='/profile'>ksi</UserName>
                    </NameAndUserName>
                    <Switch>
                        Follow
                    </Switch>
                </AccountInfo>
                <AccountInfo style={mystyle} >
                    <ProfileImgSuggestion src='https://i.pinimg.com/236x/86/c2/74/86c2743fb946a0d59d992037bd32e15e.jpg' />
                    <NameAndUserName >
                        <UserName to='/profile'>mohammed</UserName>
                    </NameAndUserName>
                    <Switch>
                        Follow
                    </Switch>
                </AccountInfo>
                <AccountInfo style={mystyle} >
                    <ProfileImgSuggestion src='https://i.pinimg.com/originals/e3/4f/74/e34f746a72f2909d16fa0933a916adaf.jpg' />
                    <NameAndUserName >
                        <UserName to='/profile'>rosee</UserName>
                    </NameAndUserName>
                    <Switch>
                        Follow
                    </Switch>
                </AccountInfo>
                <AccountInfo style={mystyle} >
                    <ProfileImgSuggestion src='https://i.pinimg.com/236x/ef/66/f4/ef66f43093c962d1c47beeb6f09faa9f.jpg' />
                    <NameAndUserName >
                        <UserName to='/profile'>whywhy</UserName>
                    </NameAndUserName>
                    <Switch>
                        Follow
                    </Switch>
                </AccountInfo>

                
            

        </SuggestionsContainer>
    )
}

export default Suggestions