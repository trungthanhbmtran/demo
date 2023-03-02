'use client'
import ProjectImage from '../../../lib/ProjectImage'
import { Container, Grid, Typography } from '@mui/material'
import StandardImageList from './imagelist'
import ImageList from '@mui/material/ImageList';

const Page = () => {
    return (
        <Grid container spacing={2} padding={2}>
            {ProjectImage.map(e =>
                    <ImageList key={e.id} sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                        {/* <Typography>{e.group}</Typography> */}
                        {e.items.map((el,i) =>
                            <StandardImageList key={i} data={el} />
                        )}
                    </ImageList>
            )}
        </Grid>
        // ProjectImage.map(e =>
        //     <Container item key={e.group} >
        //         <Typography>{e.group}</Typography>

        //     </Container>
        // )
        // <StandardImageList/>
    )
}

export default Page