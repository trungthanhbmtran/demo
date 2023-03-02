import { Divider, Typography } from "@mui/material"
import { Fragment } from "react"
import CardMui from '../(Component)/Card'

const News = () =>{
    return(
        <Fragment>
            <Typography sx={{backgroundColor : "Green"}}>Tin tức</Typography>
            <CardMui description="Máy CNC nesting gia công kết hợp " imageUrl="/static/Product/1.JPG"  />
            <CardMui description="Ứng dụng máy ghép cao tần trong chế biến gỗ" imageUrl="/static/Product/2.JPG" />
            <CardMui description="3 Dòng máy cắt ván công nghiệp xu hướng 2021 " imageUrl="/static/Product/1.JPG" />
        </Fragment>
    )
}

export default News 