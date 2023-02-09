import './App.css';
import React from 'react';
import {Grid, Box} from "@mui/material";
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
}));

function App() {
    return (
        <div className="App">
            <header className="App-header"></header>
            <body className="App-body">
            <Box sx={
                    {flexGrow: 1}
                }>
                    <Grid container
                        spacing={2}>
                        <Grid>
                            <Item>Teste A</Item>
                        </Grid>
                        <Grid>
                            <Item>Teste B</Item>
                        </Grid>
                        <Grid>
                            <Item>Teste C</Item>
                        </Grid>
                        <Grid>
                            <Item>Teste D</Item>
                        </Grid>
                    </Grid>
                </Box>
            </body>
        </div>
    );
}

export default App;
