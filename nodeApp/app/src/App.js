import './App.css';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function App({fetch, add, del, peoples}) {

const [nome, setNome] = useState('')
const [pessoasBD, setPessoasBd] = useState([])

useEffect(() => {
  fetch();
},[])

const setPessoa = () => {
  add(nome)
  setNome('')
}


  return (
    <div className="App">
      <header className="App-header">
        <Paper className="Paper">
          <div>
            <p> Adicione uma pessoa !</p>
          </div>
          <Grid container alignItems="center">
            <Grid item md={8} lg={8} xl={8} xs={8}>
               <TextField
                id="q"
                label="Nome" 
                variant="standard" 
                value={nome} 
                onChange={(e) => setNome(e.target.value) } 
                />
            </Grid>
            <Grid item md={2} lg={2} xl={2} xs={2}>
              <Button id="qw" variant="contained" color="primary" onClick={ setPessoa }>
               Adicionar
              </Button>
            </Grid>
          </Grid>
        <hr style={{ marginTop : '10%' }}/>
        <Grid container>
          <Grid item md={12}>
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
    > 
        <li>
          <ul>
            {peoples.map((item) => (
              <ListItem key={item.id} >
                <ListItemText  primary={item.nome} />
                <Button color="error" onClick={() => del(item.id)}>
                  Remover
                </Button>
              </ListItem>
            ))}
          </ul>
        </li>
    </List>
          </Grid>
        </Grid>
        </Paper>
      </header>
    </div>
  );
}

export default App;
