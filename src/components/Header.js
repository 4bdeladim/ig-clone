import React from 'react'
import { HeaderContainer, HomeIcon, LinksContainer, SearchInput, Title } from './HeaderStyle'
import { Link } from 'react-router-dom'
import { ProfileImg } from './HeaderStyle'
function Header() {
    return (
        <HeaderContainer >
            <Link to='/' style={{ textDecoration: 'none' }}> <Title > Instagram </Title> </Link>
            <SearchInput className='search-input' placeholder='Search' />
            <LinksContainer >
            <Link to='/'>
            <HomeIcon src="https://img.icons8.com/ios/22/000000/home.png"/>
            </Link>
            <Link to='/messages'>
            <HomeIcon src="https://img.icons8.com/ios/22/000000/paper-plane.png"/>
            </Link>
            <Link to='/explore'>
            <HomeIcon src="https://img.icons8.com/ios/50/000000/compass.png" />
            </Link>
            <Link to='/notifications'>
            <HomeIcon src="https://img.icons8.com/ios/50/000000/like.png"/>
            </Link>
            <ProfileImg src='https://avatars0.githubusercontent.com/u/69595575?s=460&u=403f962074204181c4323b4e42a6d88bb0eaf33b&v=4' />

            </LinksContainer>
        </HeaderContainer>

    )
}

export default Header
