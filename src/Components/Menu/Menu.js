import React from 'react'
import {Link} from 'react-router-dom'
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
            <Link to='/projects' className='icon-links'><Img src={logo} alt='logo'/>
            <FontAwesomeIcon icon='tasks' className='tasks-icon'/>
            <P>Projects</P></Link>
            <Link to='/candidates' className='icon-links'><FontAwesomeIcon icon='user-tie' className='tie-icon'/>
            <P>Candidates</P></Link>
            <Link to='/clients' className='icon-links'><FontAwesomeIcon icon='handshake' className='handshake-icon'/>
            <P>Clients</P></Link>
            <Link to='/contacts' className='icon-links'><FontAwesomeIcon icon='address-book' className='address-icon'/>
            <P>Contacts</P></Link>
            <Link to='/schedule' className='icon-links'><FontAwesomeIcon icon='calendar-alt' className='calendar-icon'/>
            <P>Schedule</P></Link>
            <Link to='/reports' className='icon-links'><FontAwesomeIcon icon='file-contract' className='contract-icon'/>
            <P>Reports</P></Link>
            <Link to='/files' className='icon-links'><FontAwesomeIcon icon='folder' className='folder-icon'/>
            <P>Files</P></Link>
            <Link to='/search' className='icon-links'><FontAwesomeIcon icon='search' className='search-icon'/>
            <P>Search</P></Link>
        </MenuContainer>
    )
}

export default Menu;