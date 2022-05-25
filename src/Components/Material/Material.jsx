import React, {useState} from 'react';
import {Typography, Button, ButtonGroup, Container, TextField, Radio, RadioGroup} from '@material-ui/core';
import styles from './styles';
// import {AccountBoxRoundedIcon} from '@material-ui/icons';
import AccountBoxRoundedIcon from '@material-ui/icons/AccountBoxRounded';
import {FormControlLabel, FormControl, FormLabel} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
// import {AnchorOutlinedIcon} from '@mui/icons-material';

 
export const Material = () => {

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [nameError, setNameError] = useState(false);
    const [category, setCategory] = useState('name');
    const navigate = useNavigate();
    console.log(category);
    
    const handleMe = (e) => {
        e.preventDefault();
        if (title == ''){
            setNameError(true);
        }
        if (title && details){
            fetch('http://localhost:8080/notes', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({title, details})
            }).then(() => {navigate('/note')})
                
        }
    }


    const classes = styles();
  return (
    <Container>
        <Typography gutterBottom className={classes.root} mt={2} variant='subtitle1'>
            Man of Valour
        </Typography>
        <form noValidate autoComplete='off' onSubmit={handleMe}>
            <TextField error={nameError} onChange={(e) => setTitle(e.target.value)} label='Title' variant='outlined' required fullWidth className={classes.width}></TextField>
            <TextField error={nameError} onChange={(e) => setDetails(e.target.value)} multiline rows={4} label='Details' variant='outlined' required fullWidth className={classes.width}></TextField>
            <Button type='submit' color='textSecondary' variant='contained'>click</Button>

            <FormControl className={classes.label}>
                <FormLabel>Check Field</FormLabel>
                <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                    <FormControlLabel value='name' control={<Radio />} label='Name'/>
                    <FormControlLabel value='username' control={<Radio />} label='Username' />
                </RadioGroup>
            </FormControl>
        </form>
        
        <Button startIcon={<AccountBoxRoundedIcon />}  color='secondary' type='submit' variant='outlined'>Click Me</Button>
        {/* <AccountBoxRoundedIcon /> */}
        {/* <AnchorOutlinedIcon /> */}
        <ButtonGroup>
            <Button color='primary' variant='contained'>click</Button>
            <Button color='primary' variant='contained'>click</Button>
            <Button color='primary' variant='contained'>click</Button>
        </ButtonGroup>
        
    </Container>
  )
}
