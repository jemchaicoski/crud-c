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
        <div className="app">
            <header className="app-header"></header>
            <body className="app-body">
                <Box>
                    <Grid className="main-grid" container>
                        <Grid className="column-grid">
                            <Item className="post-it">Teste A1</Item>
                            <Item className="post-it">Teste A2</Item>
                            <Item className="post-it">Teste A3</Item>
                            <Item className="post-it">Teste A4</Item>
                        </Grid>
                        <Grid className="column-grid">
                            <Item className="post-it">Teste B1</Item>
                            <Item className="post-it">Teste B2</Item>
                            <Item className="post-it">Teste B3</Item>
                            <Item className="post-it">Teste B4</Item>
                        </Grid>
                        <Grid className="column-grid">
                            <Item className="post-it">Teste C1</Item>
                            <Item className="post-it">Teste C2</Item>
                            <Item className="post-it">Teste C3</Item>
                            <Item className="post-it">Teste C4</Item>
                        </Grid>
                        <Grid className="column-grid">
                            <Item className="post-it">Teste D1</Item>
                            <Item className="post-it">Teste D2</Item>
                            <Item className="post-it">Teste D3</Item>
                            <Item className="post-it">Teste D4</Item>
                        </Grid>
                    </Grid>
                </Box>
            </body>
        </div>
    );
}

export default App;
