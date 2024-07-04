'use client';
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
// import MoreVertIcon from '@mui/material/MoreVert';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Box, Drawer, ListItem, } from '@mui/material';


export default function Navbar() {
    const [open, setOpen] = useState(false);

    const handlerDrawerToggle = () => {
        setOpen(!open);
    };
    const drawer = (
        <Box onClick={handlerDrawerToggle}>
            <List>
                <Link href='/'>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary='Home'/>
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
            <List>
                <Link href='/pages/about'>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary='About'/>
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
            <List>
                <Link href='/pages/contact'>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary='Contact'/>
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
            <List>
                <Link href='/pages/project'>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary='Project'/>
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
        </Box>
    )



    return (
        <main>                    
                <nav className='flex w-full bg-gray-800 text-white md:text-3xl md:p-4 justify-end shadow-custom-bottom'>   
                  
                        <ul className='flex items-center truncate w-full pl-4'>
                        {/* <Box sx={{display:{xs:'none', xl:'flex'}}}>                     */}
                            <li title='Main Page' className='truncate xl:text-3xl text-xl'><a href='/'>Batsuren Damdinsuren</a></li>
                        {/* </Box>       */}
                        </ul>

                        {/* <ul className='flex items-center truncate w-full pl-4'>
                        <Box sx={{display:{xl:'none', md:'flex'}}}>                    
                            <li title='Main Page' className='text-3xl'><a href='/'>Basu</a></li>
                        </Box>      
                        </ul> */}
                     
                    <Box sx={{display:{xs:'none', md:'flex'}, alignItems:'center'}}>              
                        <ul className='md:flex'>
                            <li className='pr-4 hover:text-blue-300 hover:scale-105 transform transition-all duration-150 ease-in-out'>
                                <Link href='/'>Home</Link></li>
                            <li className='pr-4 hover:text-blue-300 hover:scale-105 transform transition-all duration-150 ease-in-out'>
                                <Link href='/pages/about'>About</Link></li>
                            <li className='pr-4 hover:text-blue-300 hover:scale-105 transform transition-all duration-150 ease-in-out'>
                                <Link href='/pages/contact'>Contact</Link></li> 
                            <li className='pr-4 hover:text-blue-300 hover:scale-105 transform transition-all duration-150 ease-in-out'>
                                <Link href='/pages/project'>Projects</Link></li> 
                            {/* <li className='pr-4 hover:text-blue-300 hover:scale-105 transform transition-all duration-150 ease-in-out'>
                                <Link href='#'>Portfolio</Link></li>               */}
                        </ul>
                    </Box>
                   
            
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handlerDrawerToggle}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer 
                    variant='temporary'
                    open={open}
                    onClose={handlerDrawerToggle}
                    ModelProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 100,  }
                    }}>
                    {drawer}                      
                </Drawer>
            </Box>
            </nav> 
        </main>
    );
}
