import * as React from 'react';
import Head from 'next/head';
import {AppProps} from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider, EmotionCache} from '@emotion/react';
import {themCustomizado} from '../theme';
import createEmotionCache from '../createEmotionCache';
import {CssVarsProvider, GlobalStyles, ThemeProvider} from "@mui/joy";
import Header from "@/components/Header";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
    return (


        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <ThemeProvider theme={themCustomizado}>
                <CssVarsProvider disableTransitionOnChange theme={themCustomizado}>
                    <GlobalStyles
                        styles={{
                            '[data-feather], .feather': {
                                color: 'var(--Icon-color)',
                                margin: 'var(--Icon-margin)',
                                fontSize: 'var(--Icon-fontSize, 20px)',
                                width: '1em',
                                height: '1em',

                            }
                        }}
                    />
                    <CssBaseline/>
                    <Component {...pageProps} />
                </CssVarsProvider>
            </ThemeProvider>

        </CacheProvider>
    );
}