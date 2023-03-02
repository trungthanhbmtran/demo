'use client'
import { Grid } from "@mui/material"
import CardMui from '../../../components/(Component)/Card'
import News from "../../../lib/News"

const Page = () => {
    return (
        // <h1>this is news page</h1>
        <Grid container spacing={2} padding={2}>
            {News.map(e =>
                <Grid key={e.group} item xs={12}>
                    <CardMui title={e.group} description={e.description} imageUrl={e.imageUrl} url={e.url}  />
                </Grid >
            )}
        </Grid>
    )
}

export default Page