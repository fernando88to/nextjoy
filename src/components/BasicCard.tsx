import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';

export const BasicCard: React.FC<{
    title: string, subtitle?: string,
    children: React.ReactNode
}> = ({title, subtitle, children}) => {
    return (
        <Card variant="outlined" sx={{width: '100%'}}>
            <Typography level="h2" fontSize="md" sx={{mb: 0.5}}>
                {title}
            </Typography>
            {subtitle && <Typography level="body2">{subtitle}</Typography>}
            <Box sx={{display: 'flex', marginTop:'8px'}}>
                {children}
                {/*<div>
                    <Typography level="body3">Total price:</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                        $2,900
                    </Typography>
                </div>
                <Button
                    variant="solid"
                    size="sm"
                    color="primary"
                    aria-label="Explore Bahamas Islands"
                    sx={{ml: 'auto', fontWeight: 600}}
                >
                    Explore
                </Button>*/}
            </Box>
        </Card>
    );
}