'use client'
// import { AppBarMui } from './Deskktop';
// import { Grid } from '@mui/material';
import AppBar from './Appbar';
// import Banner from './Banner';
// import BannerHeader from './BannerHeader';
import Content  from './Content';
import Drawer from './Drawer';
import Carousel from '../../lib/carousel';

import {
    Grid,
    useMediaQuery,
    useTheme,
    Box,
    Divider
  } from "@mui/material";
import ToolBar from './ToolBar';
import Breadcrumb from './(CategoryBox)/Breadcrumb';
import Category from './(CategoryBox)/Category';
import News from './News';
import Showroom from './Showroom';
import Footer  from './Footer';


export const  Layout = ({children}) =>{
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    return(
        <Box>
            <AppBar/>
            <ToolBar/>
            <Drawer/>
             {children}
            <Footer/>
        </Box>
    )
}