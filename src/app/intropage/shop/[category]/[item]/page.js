'use client'
import { CategoryMenu } from "../../../../../lib/menu/CategoryMenu"
import { Grid, Stack, Typography } from "@mui/material"
import Image from "next/image"
import VerticalTabs from '../../../../../components/(Component)/VerticalTabs'
import CardMui from '../../../../../components/(Component)/Card'
const Page = ({ params }) => {
    console.log('params product', params)
    const { category, item } = params
    // {CategoryMenu.map((e) => console.log('e',e))}
    const filter = CategoryMenu.find(e => e.category == category)
    console.log('filter', filter)
    const Product = filter.items.find(e => e.id == item)
    console.log('Product', Product)
    const SameProduct = CategoryMenu.filter(e => e.category == category)
    return (
        <Stack spacing={2} padding={2}>
            <Image src="/static/product/1.jpg" alt="11" width={500} height={
                200} />
            <VerticalTabs product={Product} />
            {
                Product.specInfo.map((e) =>
                    <Typography key={e} > {e.k} : {e.v}</Typography>
                )
            }
            <Typography border={1} padding={1} sx={{ backgroundColor: "goldenrod" }}>
                {Product.note}
            </Typography>
            <Typography variant="h6">Thông số máy cưa</Typography>
            {
                Product.spec.map(e => <Typography>{e.k} : {e.v}</Typography>)
            }
            <Typography variant="h6">Video vận hành</Typography>
            <Typography variant="h6">Sản phẩm liên quan</Typography>
            <Grid container spacing={2}  >
                {SameProduct.map(e => e.items.map(el =>
                    <Grid item>
                        <CardMui title={el.title} imageUrl={el.imageUrl} />
                    </Grid>
                ))}
            </Grid>
        </Stack>
    )
}

export default Page