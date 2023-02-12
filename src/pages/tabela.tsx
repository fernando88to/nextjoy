import {DashBoardLayout} from "@/components/Layout";
import {BasicCard} from "@/components/BasicCard";
import {DataGrid, GridColDef, GridRowsProp} from "@mui/x-data-grid";
import {deepmerge} from '@mui/utils';
import {
    Experimental_CssVarsProvider as CssVarsProvider,
    experimental_extendTheme as extendMuiTheme,
    shouldSkipGeneratingVar as muiShouldSkipGeneratingVar,
} from '@mui/material/styles';
import {extendTheme, shouldSkipGeneratingVar as joyShouldSkipGeneratingVar,} from '@mui/joy/styles';
import {blue, grey} from "@mui/material/colors";

const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
];


export default function TabelaPage() {

    const { unstable_sxConfig: joySxConfig, ...joyTheme } = extendTheme({
        // This is required to point to `var(--mui-*)` because we are using
        // `CssVarsProvider` from Material UI.
        cssVarPrefix: 'mui',
        colorSchemes: {
            light: {
                palette: {
                    primary: {
                        ...blue,
                        solidColor: 'var(--mui-palette-primary-contrastText)',
                        solidBg: 'var(--mui-palette-primary-main)',
                        solidHoverBg: 'var(--mui-palette-primary-dark)',
                        plainColor: 'var(--mui-palette-primary-main)',
                        plainHoverBg:
                            'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
                        plainActiveBg: 'rgba(var(--mui-palette-primary-mainChannel) / 0.3)',
                        outlinedBorder: 'rgba(var(--mui-palette-primary-mainChannel) / 0.5)',
                        outlinedColor: 'var(--mui-palette-primary-main)',
                        outlinedHoverBg:
                            'rgba(var(--mui-palette-primary-mainChannel) / var(--mui-palette-action-hoverOpacity))',
                        outlinedHoverBorder: 'var(--mui-palette-primary-main)',
                        outlinedActiveBg: 'rgba(var(--mui-palette-primary-mainChannel) / 0.3)',
                    },
                    neutral: {
                        ...grey,
                    },
                    // Do the same for the `danger`, `info`, `success`, and `warning` palettes,
                    divider: 'var(--mui-palette-divider)',
                    text: {
                        tertiary: 'rgba(0 0 0 / 0.56)',
                    },
                },
            },
            // Do the same for dark mode
            // dark: { ... }
        },
        fontFamily: {
            display: '"Roboto","Helvetica","Arial",sans-serif',
            body: '"Roboto","Helvetica","Arial",sans-serif',
        },

    });

// Note: you can't put `joyTheme` inside Material UI's `extendMuiTheme(joyTheme)`
// because some of the values in the Joy UI theme refers to CSS variables and
// not raw colors.
    const { unstable_sxConfig: muiSxConfig, ...muiTheme } = extendMuiTheme();

// You can use your own `deepmerge` function.
// muiTheme will deeply merge to joyTheme.
    const mergedTheme = (deepmerge(joyTheme, muiTheme) as unknown) as ReturnType<
        typeof extendMuiTheme
    >;

    mergedTheme.unstable_sxConfig = {
        ...joySxConfig,
        ...muiSxConfig
    };




    return (


    <DashBoardLayout title='Tabela'>

        <BasicCard title='Título' subtitle="April 24 to May 02, 2021">

            <CssVarsProvider
                theme={mergedTheme}
                shouldSkipGeneratingVar={(keys) =>
                    muiShouldSkipGeneratingVar(keys) || joyShouldSkipGeneratingVar(keys)
                }
            >
                <div style={{ height: 300, width: '100%' }}>
                    <DataGrid rows={rows} columns={columns} />
                </div>

            </CssVarsProvider>




        </BasicCard>

    </DashBoardLayout>

    );
}

interface People {
    nome:string
    email:string
    idade:number
}

const dados:People[] =[
    {
        "nome": "João Silva",
        "email": "joao.silva@email.com",
        "idade": 25
    },
    {
        "nome": "Maria Oliveira",
        "email": "maria.oliveira@email.com",
        "idade": 30
    },
    {
        "nome": "Pedro Souza",
        "email": "pedro.souza@email.com",
        "idade": 35
    },


    ]
