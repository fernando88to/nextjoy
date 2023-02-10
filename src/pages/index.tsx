import Head from 'next/head'
import {Inter} from '@next/font/google'
import Box from '@mui/joy/Box';
import {Button} from '@mui/joy'
import useScript from '../useScript';
import React from "react";
import Header from "@/components/Header";

export default function Home() {

    const useEnhancedEffect =
        typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

    const status = useScript(`https://unpkg.com/feather-icons`);

    useEnhancedEffect(() => {
        // Feather icon setup: https://github.com/feathericons/feather#4-replace
        // @ts-ignore
        if (typeof feather !== 'undefined') {
            // @ts-ignore
            feather.replace();
        }
    }, [status]);
    return (
        <>
            <Head>
                <title>Create Next App</title>

            </Head>
            <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
                <Header />


            </Box>

        </>
    )
}
