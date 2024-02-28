'use client'
import React from 'react'
import { Input,Textarea } from "@nextui-org/react";
import { Grid } from '@mui/material';

const ModalContent = () => {
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Input labelPlacement='outside' size={`sm`} type="text" label="Project Tile" />
                </Grid>
                <Grid item xs={12}>
                    <Textarea size={`sm`} type="text" label="Description" />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default ModalContent
