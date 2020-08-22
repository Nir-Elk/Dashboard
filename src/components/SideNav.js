import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Dashboard, Notes, GitHub } from '@material-ui/icons/';
import { Link, useLocation } from "react-router-dom";
import { StyledSideNav } from "../Styled";

export default function SideNav() {

    const location = useLocation();
    const screens = [
        {
            label: 'Dashboard',
            icon: <Dashboard />,
            path: '/',
            selected: location.pathname === '/'?"selected":""

        },
        {
            label: 'Orders',
            icon: <Notes />,
            path: '/orders',
            selected: location.pathname === '/orders'?"selected":""
        }
    ];

    return (
        <StyledSideNav>
            {screens.map(({ label, icon, path,selected }) => (
                <Link key={path} to={path}>
                    <ListItem className={selected} button>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={label} />
                    </ListItem>
                </Link>
            ))}
            <a href='https://github.com/Nir-Elk' style={{ marginTop:'auto'}}>
                <ListItem button>
                    <ListItemIcon><GitHub/></ListItemIcon>
                    <ListItemText primary="GitHub" />
                </ListItem>
            </a>
        </StyledSideNav>
        
    );
}