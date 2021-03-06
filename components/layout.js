import Navbar from './navbar';
import { useRouter } from 'next/router'
import { Paper, BottomNavigation, BottomNavigationAction, Box } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Footer from './footer';
import styles from '../styles/Layout.module.css'

import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import ContactsIcon from '@material-ui/icons/Contacts';
import InfoIcon from '@material-ui/icons/Info';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import BookIcon from '@material-ui/icons/Book';

const Layout = (props) => {
    const router = useRouter()
    return(
    <Paper elevation={0} square style={{minHeight : '100vh'}}>
        <Navbar />
        {props.children}
        <Footer />
        <Box className={styles.bottomNav}>
            <BottomNavigation position="sticky" showLabels component="nav">
                <BottomNavigationAction component='div' label="About" icon={<InfoIcon />} onClick={() => router.push('/about')}/>
                <BottomNavigationAction component='div' label="Events" icon={<BookIcon />} onClick={() => router.push('/events')}/>
                <BottomNavigationAction component='div' label="Home" icon={<HomeIcon />} onClick={() => router.push('/')}/>
                <BottomNavigationAction component='div' label="Contact" icon={<BookIcon />} onClick={() => router.push('/blogs')}/>
                <BottomNavigationAction component='div' label="Contact" icon={<FavoriteIcon />} onClick={() => router.push('/contact')}/>
            </BottomNavigation>
        </Box>
    </Paper>)
}

export default Layout;