import { Paper, Typography } from "@mui/material"
import { Children, Fragment } from "react"

const BoxContent = ({ tittle = "", Children }) => {
    return (
        <Fragment>
            <Typography>
                {tittle}
            </Typography>
            <Paper>
                {Children}
            </Paper>
        </Fragment>
    )
}