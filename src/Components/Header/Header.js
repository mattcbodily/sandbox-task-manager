import React from 'react'
import profilePicture from './../../assets/placeholder_logo.png'
import './Header.css'
import {HeaderContainer, Img, Span} from './HeaderStyles'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell, faComment, faEnvelope, faChevronDown} from '@fortawesome/free-solid-svg-icons'
library.add(faBell, faComment, faEnvelope, faChevronDown)

const Header = () => {
    return(
        <HeaderContainer>
            <FontAwesomeIcon icon='bell' className='bell-icon'/>
            <FontAwesomeIcon icon='comment' className='comment-icon'/>
            <FontAwesomeIcon icon='envelope'className='envelope-icon'/>
            <Img src={profilePicture} alt='Profile'/>
            <Span>My account</Span>
            <FontAwesomeIcon icon='chevron-down' className='chevron-icon'/>
        </HeaderContainer>
    )
}

export default Header;