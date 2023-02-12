import React from "react";
import Box from "@mui/joy/Box";
import Header from "@/components/Header";
import FirstSidebar from "@/components/FirstSidebar";
import SecondSidebar from "@/components/SecondSidebar";
import {Button, Typography} from "@mui/joy";
import useScript from "@/useScript";
import Grid2 from "@mui/material/Unstable_Grid2";
import Head from "next/head";

export const DashBoardLayout: React.FC<{ children: React.ReactNode, title:string }> = ({children, title}) => {
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
                <title>{title}</title>
            </Head>
            <Box sx={{display: 'flex', minHeight: '100dvh'}}>
            <Header/>
            <FirstSidebar/>
            <SecondSidebar/>
            <Box
                component="main"
                className="MainContent"
                sx={(theme) => ({
                    p: {
                        xs: 2,
                        sm: 3,
                    },
                    pt: {
                        xs: `calc(${theme.spacing(2)} + var(--Header-height))`,
                        sm: `calc(${theme.spacing(2)} + var(--Header-height))`,
                        md: `calc(${theme.spacing(2)} + var(--Header-height))`,
                    },
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: 0,
                    height: '100dvh',
                    backgroundColor: 'background.body',

                })}
            >
                {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Breadcrumbs
                        size="sm"
                        aria-label="breadcrumbs"
                        separator={<i data-feather="chevron-right" />}
                        sx={{
                            '--Breadcrumbs-gap': '1rem',
                            '--Icon-fontSize': '16px',
                            fontWeight: 'lg',
                            color: 'neutral.400',
                        }}
                    >
                        <Link
                            underline="none"
                            color="neutral"
                            fontSize="inherit"
                            href="#some-link"
                            aria-label="Home"
                        >
                            <i data-feather="home" />
                        </Link>
                        <Link
                            underline="hover"
                            color="neutral"
                            fontSize="inherit"
                            href="#some-link"
                        >
                            Dashboard
                        </Link>
                        <Typography fontSize="inherit" variant="soft" color="success">
                            Orders
                        </Typography>
                    </Breadcrumbs>

                </Box>*/}

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        my: 1,
                        gap: 1,
                        flexWrap: 'wrap',
                        '& > *': {
                            minWidth: 'clamp(0px, (500px - 100%) * 999, 100%)',
                            flexGrow: 1,
                        },
                    }}
                >
                    <Typography level="h1" fontSize="xl4">
                        Orders
                    </Typography>
                    <Box sx={{flex: 999}}/>
                    <Box sx={{display: 'flex', gap: 1, '& > *': {flexGrow: 1}}}>
                        <Button
                            variant="outlined"
                            color="neutral"
                            startDecorator={<i data-feather="download-cloud"/>}
                        >
                            Download PDF
                        </Button>
                        <Button
                            variant="outlined"
                            color="neutral"
                            startDecorator={<i data-feather="table"/>}
                        >
                            Download CSV
                        </Button>
                    </Box>
                </Box>


                {children}

            </Box>
        </Box></>

    );
}