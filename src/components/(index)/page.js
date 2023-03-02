'use client'
import Carosel from "../../lib/carousel"
import { Grid, Stack } from "@mui/material"
import WrapperProduct from "../(Component)/WrapperProduct"
import { listProduct } from "../../lib/ListProduct/listProduct"
import { CategoryMenu } from "../../lib/menu/CategoryMenu"


const HomePage = () => {
    return (
        // <Grid container spacing={3} direction="column" justifyContent="center" alignItems="center"  >
        //     <Grid item xs={12} >
        //         <h1>this carosel</h1>
        //         {/* <Carosel/> */}
        //     </Grid>
        //     <Grid item  xs>
        //         {
        //             CategoryMenu.map((e,i) => <WrapperProduct key={i} items={e}/>
        //             // console.log('element',e.items)
        //             )
        //         }
        //     </Grid>
        //     {/* <Grid item >
        //     {
        //             listProduct.map((e) => <WrapperProduct items={e.items}/>
        //             // console.log('element',e.items)
        //             )
        //         }
        //     </Grid> */}

        // </Grid>
        <Stack spacing={1}>
            {/* <Carosel/> */}
            <Carosel/>
            {CategoryMenu.map((e, i) => <WrapperProduct key={i} items={e} />)}
        </Stack>
    )
}

export default HomePage