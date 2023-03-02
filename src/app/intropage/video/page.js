'use client'
import CardMui from '../../../components/(Component)/Card'
import Videos from '../../../lib/Video'
import { Grid } from '@mui/material'

const Page = () => {
    return (
        // <h1>this is video page</h1>
            <Grid container spacing={2} padding={2}>
                {Videos.map(e =>
                    <Grid key={e.id} item md={6} xs={12}>
                        <CardMui title={e.group} video imageUrl={e.imageUrl} />
                    </Grid>
                )}
            </Grid>
    )
}

export default Page