import { AppBar, Box, Grid, Tab, Tabs, Typography, useTheme } from "@mui/material"
import CardMui from "./Card";
import * as React from 'react'
import { listProduct } from "../../lib/ListProduct/listProduct";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
      <div
          role="tabpanel"
          hidden={value !== index}
          id={`full-width-tabpanel-${index}`}
          aria-labelledby={`full-width-tab-${index}`}
          {...other}
      >
          {value === index && (
              <Box sx={{ p: 3 }}>
                  {children}
              </Box>
          )}
      </div>
  );
}

function a11yProps(index) {
  return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const WrapperProduct = ({ items }) => {
    // console.log('items WrapperProduct',items)
    const [value, setValue] = React.useState(0);
    const theme = useTheme()
    const [data, setData] = React.useState([])

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    // const handleChangeIndex = (index) => {
    //     setValue(index);
    // };



    React.useEffect(() => {
        items ? setData(items) : setData([])
    }, [])

  

    // React.useEffect (()=>{
    //     console.log("re render")
    // })


    // const Filter = items?.filter(e => e.id == value)

    // console.log('Filter',value,Filter)

    // console.log('data',data)
    return (
      <Box sx={{ width: "100vw" }}>
            <AppBar position="sticky" >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    {/* {
                        data.map((e,i) => <Tab label={e.title} {...a11yProps(i)} />)
                    } */}
                    <Tab label={items.title} {...a11yProps(0)} />
                    {/* <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} /> */}
                </Tabs>
            </AppBar>
            {/* {items.map(e => console.log('e',e)
                    // <CardMui description={e} imageUrl={e.imageUrl} />
                    )} */}
            <TabPanel value={value} index={0} dir={theme.direction}>
                <Grid container justifyContent="center" alignItems="center" spacing={2} >
                    {items?.items?.map((e, i) =>
                        <Grid key={i} item>
                            <CardMui description={e.title} imageUrl={e.imageUrl} url={`${e.url}`} />
                        </Grid>
                    )}
                </Grid>
            </TabPanel>
            {/* <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Item Three
                </TabPanel> */}
        </Box>
    )
}

export default WrapperProduct