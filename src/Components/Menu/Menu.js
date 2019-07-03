import React from 'react'
import './Menu.css'
import {MenuContainer, Img, P} from './MenuStyles'
import logo from './../../assets/sandbox-logo.png'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTasks, faUserTie, faHandshake, faAddressBook, faCalendarAlt, faFileContract, faFolder, faSearch} from '@fortawesome/free-solid-svg-icons'
library.add(faTasks, faUserTie, faHandshake, faAddressBook, faCalendarAlt, faFileContract, faFolder, faSearch)

const Menu = () => {
    return(
        <MenuContainer>
            <Img src={logo} alt='logo'/>
            <FontAwesomeIcon icon='tasks' className='tasks-icon'/>
            <P>Projects</P>
            <FontAwesomeIcon icon='user-tie' className='tie-icon'/>
            <P>Candidates</P>
            <FontAwesomeIcon icon='handshake' className='handshake-icon'/>
            <P>Clients</P>
            <FontAwesomeIcon icon='address-book' className='address-icon'/>
            <P>Contacts</P>
            <FontAwesomeIcon icon='calendar-alt' className='calendar-icon'/>
            <P>Schedule</P>
            <FontAwesomeIcon icon='file-contract' className='contract-icon'/>
            <P>Reports</P>
            <FontAwesomeIcon icon='folder' className='folder-icon'/>
            <P>Files</P>
            <FontAwesomeIcon icon='search' className='search-icon'/>
            <P>Search</P>
        </MenuContainer>
    )
}

export default Menu;