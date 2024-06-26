// import { Drawer, IconButton, List, ListItemButton, ListItemIcon } from '@mui/material';
// import React, { useState } from 'react';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from 'react-router-dom';

// function DrawerComp() {
//     const [open, setOpen] = useState(false);

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const handleOpen = () => {
//         setOpen(!open);
//     };

//     return (
//         <>
//             <Drawer PaperProps={{ sx: { backgroundColor: "#FFFFFF" } }} open={open} onClose={handleClose}>
//                 <List>
//                     <ListItemButton onClick={handleClose}>
//                         <ListItemIcon>
//                             <ul className='mobile-navigation'>
//                                 <li>
//                                     <Link to={"/"} onClick={handleClose}>Home</Link>
//                                 </li>
//                                 <li>
//                                     <Link to={"/about"} onClick={handleClose}>About</Link>
//                                 </li>
//                                 <li>
//                                     <Link to={"/department"} onClick={handleClose}>Department</Link>
//                                 </li>
//                                 <li>
//                                     <Link to={"/doctor"} onClick={handleClose}>Doctors</Link>
//                                 </li>
//                                 <li>
//                                     <Link to={"/blog"} onClick={handleClose}>Blog</Link>
//                                 </li>
//                                 <li>
//                                     <Link to={"/contact"} onClick={handleClose}>Contact</Link>
//                                 </li>
//                                 <li>
//                                     <Link to={"/login"} onClick={handleClose}>Login</Link>
//                                 </li>
//                             </ul>
//                         </ListItemIcon>
//                     </ListItemButton>
//                 </List>
//             </Drawer>
//             <IconButton sx={{ marginLeft: "auto" }} onClick={handleOpen}>
//                 <MenuIcon />
//             </IconButton>
//         </>
//     );
// }

// export default DrawerComp;

import React, { useState, useEffect } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

function DrawerComp() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const handleToggle = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        handleClose();
    }, [location.pathname]); // Close drawer on route change

    return (
        <>
            <Drawer 
                PaperProps={{ sx: { backgroundColor: "#FFFFFF" } }} 
                open={open} 
                onClose={handleClose}
            >
                <List>
                    <ListItem onClick={handleClose}>
                        <ListItemText>
                            <Link to="/">Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={handleClose}>
                        <ListItemText>
                            <Link to="/about">About</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={handleClose}>
                        <ListItemText>
                            <Link to="/department">Department</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={handleClose}>
                        <ListItemText>
                            <Link to="/doctor">Doctors</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={handleClose}>
                        <ListItemText>
                            <Link to="/blog">Blog</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={handleClose}>
                        <ListItemText>
                            <Link to="/contact">Contact</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={handleClose}>
                        <ListItemText>
                            <Link to="/login">Login</Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton 
                sx={{ marginLeft: "auto" }} 
                onClick={handleToggle}
            >
                <MenuIcon />
            </IconButton>
        </>
    );
}

export default DrawerComp;


