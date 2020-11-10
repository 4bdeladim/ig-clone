import React from 'react'
import './Header.css'
import { HeaderContainer, HomeIcon, LinksContainer, SearchInput, Title } from './HeaderStyle'
import { Link } from 'react-router-dom'
import GlobalStyle from '../GlobalStyle'
function Header() {
    return (
        <HeaderContainer >
            <Link to='/' style={{ textDecoration: 'none' }}> <Title > Instagram </Title> </Link>
            <SearchInput className='search-input' placeholder='Search' />
            <LinksContainer >
            <Link to='/'>
            <HomeIcon src="https://img.icons8.com/fluent-systems-regular/22/000000/home.png"/>
            </Link>
            <Link to='/'>
            <HomeIcon src="https://img.icons8.com/ios/22/000000/like.png"/>
            </Link>
            <Link to='/'>
            <HomeIcon src="https://img.icons8.com/fluent-systems-regular/22/000000/home.png"/>
            </Link>
            <Link to='/'>
            <HomeIcon src="https://img.icons8.com/fluent-systems-regular/22/000000/home.png"/>
            </Link>

            </LinksContainer>
        </HeaderContainer>

    )
}

export default Header
