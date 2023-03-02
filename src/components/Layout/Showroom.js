import { Box, Divider, Grid, Toolbar, Typography } from "@mui/material"
import CardMui from "../(Component)/Card"


const Render = [
    { location: "Tp HCM", description: "số 200 Hà Huy Tập", imageUrl: "static/Banner/z3577644714253_b82792627ed7486be0fde8ba6a324001.jpg" },
    { location: "Tp Hà Nội", description: "số 200 Hà Huy Tập", imageUrl: "static/Banner/z3577644714253_b82792627ed7486be0fde8ba6a324001.jpg" },
    { location: "Tỉnh Đồng Nai", description: "số 200 Hà Huy Tập", imageUrl: "static/Banner/z3577644714253_b82792627ed7486be0fde8ba6a324001.jpg" }
]

const Showroom = () => {
    return (
        <Box padding={2}>
            <Divider variant="fullWidth" />
            <Typography align="center" variant="h4">Hệ thống showroom  toàn quốc</Typography>
            <Divider variant="middle" />
            <Grid container spacing={2} padding={3}>
                {
                    Render.map((e, i) =>
                        <Grid item>
                            <CardMui key={i} title={e.location} description={e.description} imageUrl={e.imageUrl} />
                        </Grid>
                    )
                }
            </Grid>
        </Box>

    )
}

export default Showroom