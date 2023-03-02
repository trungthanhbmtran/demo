'use client'
import { Paper,Grid, Typography } from "@mui/material"
import { Fragment } from "react"
import MenuItem from "../../(Component)/(nestedMenu)/MenuItems"
import News from "../News"
import { usePathname,useSelectedLayoutSegment,useSelectedLayoutSegments } from 'next/navigation';
import { CategoryMenu } from "../../../lib/menu/CategoryMenu";


const Category = ({children}) =>{
    const Segnement = useSelectedLayoutSegment()
    // console.log('Segnement',Segnement)
    // console.log('useSelectedLayoutSegment',useSelectedLayoutSegment)
    return(
        <Grid container  spacing={2} paddingTop={2} paddingBottom={2} >
            <Grid item xs={4}>
             <Typography sx={{backgroundColor : " green"}}>Danh mục</Typography>
             {CategoryMenu.map((item,key) => <MenuItem key={key} item={item}/>)}
             {/* <News/> */}
            </Grid>
            <Grid item xs={8} >
                <Typography padding={1} variant="h6" sx={{backgroundColor : "orange"}}>{Segnement}</Typography>
                {children}
            </Grid>
        </Grid>
       
    )
}

export default Category