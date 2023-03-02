'use client'
import {  Button, Grid, Link, Toolbar } from "@mui/material"
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import HomeIcon from '@mui/icons-material/Home';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";
import Menu from '@mui/material/Menu';
import {CategoryMenu} from '../../lib/menu/CategoryMenu'
import MenuItem from "../(Component)/(nestedMenu)/MenuItems";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Catalogs = [
    {
        name: 'Catalogue',
        url: '/intropage/catalogue'
    },
    {
        name: 'HD sử dụng',
        url: '/intropage/hdsd'
    },
    {
        name: 'Hệ thống showroom',
        url: '/'
    }
]

const ToolBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // console.log('CategoryMenu',CategoryMenu)

    return (
        <Toolbar sx={{ backgroundColor: "red" }}>
            <Grid container spacing={2} justifyContent="space-between" alignItems="center" >
                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        onClick={handleClick}
                        aria-expanded={open ? 'true' : undefined}
                        startIcon={<HomeIcon />}
                        endIcon={<ArrowDropDownIcon />}
                    >
                        Danh mục
                    </Button>
                </Grid>
                <Grid item xs={3}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search></Grid>
                <Grid item container spacing={2} xs={6}>
                    {Catalogs.map((e, i) =>
                        <Grid key={i} item>
                            <Link  href={e.url} underline="none">
                                <Button variant="contained">
                                    {e.name}
                                </Button>
                            </Link>
                        </Grid>
                    )}
                </Grid>
                <Grid item xs={1}>Vietnamese</Grid>
            </Grid>
            {/* <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    MUI
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    Core
                </Link>
                <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs> */}

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {
                    CategoryMenu.map((e,i) =>  <MenuItem key={i} item={e}/>)
                }
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Menu>
        </Toolbar>


    )
}

export default ToolBar