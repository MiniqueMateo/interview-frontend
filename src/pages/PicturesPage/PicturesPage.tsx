import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import usePicturesPageStyle from './PicturesPage.style';
import SideBar from '../HomePage/SideBar/SideBar';
import TopBar from '../HomePage/TopBar/TopBar';
import { Fab } from '@mui/material';

function PicturesPage() {
    const [sideBarOpen, setSidebarOpen] = useState(true);
    const { classes } = usePicturesPageStyle({ sideBarOpen });

    const toggleSideBar = () => {
        setSidebarOpen((sideBarOpen) => !sideBarOpen);
    };

    return (
        <div className={classes.container}>
            <TopBar className={classes.topbar} />
            <div className={classes.section}>
                <div className={classes.sidebar}>
                    <SideBar />
                    <div className={`hoverableCollapseBtn ${classes.hoverableCollapseBtn}`} />
                    <Fab
                        aria-label="collapse"
                        className={`${classes.sideBarCollapseBtn} sideBarCollapseBtn`}
                        size="small"
                        onClick={toggleSideBar}
                    ></Fab>
                </div>
                <div className={classes.content}>
                    {/* This outlet is a new way to handle sub routers within main router. 
                    Check router to see what components are user here */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default PicturesPage;
