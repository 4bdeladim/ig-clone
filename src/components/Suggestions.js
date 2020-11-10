import React from 'react'
import { AccountField, AccountInfo, FixedContainer, Name, NameAndUserName, ProfileImg, SeeAll, SuggestionsContainer, SuggestionsForYou, Switch, Title, UserName } from './SuggestionsStyle'


function Suggestions() {

    return (
        <SuggestionsContainer>
                <AccountField>
                <AccountInfo>
                    <ProfileImg src='https://avatars0.githubusercontent.com/u/69595575?s=460&u=403f962074204181c4323b4e42a6d88bb0eaf33b&v=4' />
                    <NameAndUserName>
                        <UserName>4bdeladim</UserName>
                        <Name>ABDELADIM</Name>
                    </NameAndUserName>
                    <Switch>
                        Switch
                    </Switch>
                </AccountInfo>
                </AccountField>
                <Title>
                    <SuggestionsForYou> SuggestionsForYou </SuggestionsForYou>
                    <SeeAll> See All </SeeAll>
                </Title>
            

        </SuggestionsContainer>
    )
}

export default Suggestions