'use client'
import React from 'react'
import { Input,Textarea } from "@nextui-org/react";
import { Grid } from '@mui/material';

const ModalContent = () => {
    const description : string = "This admin panel is private.Please don't access the admin panel.Admin panel allow to customize my application dynamically.";
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Input labelPlacement='outside' size={`sm`} type="text" label="Password" />
                </Grid>
                <Grid item xs={12}>
                    <Textarea disabled size={`sm`} type="text" label="Note" value={description} />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default ModalContent
