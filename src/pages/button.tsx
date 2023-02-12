import Head from 'next/head'
import Box from '@mui/joy/Box';
import {Button} from '@mui/joy'
import React from "react";
import {DashBoardLayout} from "@/components/Layout";
import Grid from '@mui/joy/Grid';

export default function Home() {
    return (
        <DashBoardLayout title='Button'>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2}>
                    <Grid xs={12} md={2}>
                        <Button variant="solid" fullWidth>Botão</Button>
                    </Grid>
                    <Grid xs={12} md={2} mdOffset={8}>
                        <Button variant="solid" fullWidth>Botão</Button>
                    </Grid>
                </Grid>
            </Box>


        </DashBoardLayout>
    )
}
