import React from 'react'
import Box from '@mui/material/Box'
import { RiEditFill } from 'react-icons/ri'
import TextField from '@mui/material/TextField'

const AdditionalRequest = () => {
    const labelEditFill = (
        <>
            <RiEditFill size={18} />
            Additional Request
        </>
    )

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            className="additional-request"
        >
            <TextField
                id="additional-request"
                label={labelEditFill}
                multiline
                fullWidth
                variant="standard"
                className="additional-request__input"
            />
        </Box>
    )
}

export default AdditionalRequest
