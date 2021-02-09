import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const styles = {
        header: {
            padding: '10px 0px',
            backgroundColor: 'rgb(67, 115, 160)'
        },
        h1: {
            backgroundColor: 'rgb(67, 115, 160)',
            color: 'white',
            textAlign: 'center'
        },
        nav: {
            textDecoration: 'none',
            color: 'rgb(0, 0, 0)',
            fontSize: '20px',
            backgroundColor: 'rgb(67, 115, 160)',
            padding: '3px 3px 3px 3px'
        },
        div: {
            paddingTop: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            width: '300px',
            margin: 'auto',
            backgroundColor: 'rgb(67, 115, 160)',
            fontWeight: 'bold'
        },
        active: {
            backgroundColor: 'white',
            borderRadius: '5px'
        }
    }
    return (
        <header style={styles.header}>
           <h1 style={styles.h1}>Navigation</h1>
           <div style={styles.div}>
                <NavLink style={styles.nav} to='/'>Home</NavLink>
                <NavLink activeStyle={styles.active} style={styles.nav} to='/users'>Users</NavLink>
                <NavLink activeStyle={styles.active} style={styles.nav} to='/posts'>Posts</NavLink>
           </div>
        </header>
    )
}

export default Header