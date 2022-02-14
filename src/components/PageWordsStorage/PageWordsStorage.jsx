import {Button, Box, TextField} from '@mui/material';
import { useState } from 'react';
import style from './PageWordsStorage.module.css';

const PageWordsStorage = function ({ setWords, words, children }) {
    const [value, setValue] = useState('');

    function handleChange(e) {
        e.preventDefault()
        setValue(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault()
        if ((words.includes(value.toLowerCase())) && (value.trim() !== '')) {
            return
        }
        setWords([...words, value])
        setValue('') // обнуляем
    }
    return <div className={style.container}>
        {children}
        <Box
            component="form"
            sx={{
                display: 'flex',
                alignItems: 'center',
                '& > :not(style)': { width: '25ch'},
                '& > :not(style) + :not(style)': { ml: 1},
            }}
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
        >
            <TextField id="outlined-basic" label="Введите новое слово" variant="outlined" value={value}
  onChange={handleChange}/>
            <Button variant="contained" color="success" type="submit" >Добавить</Button>
        </Box>
    </div>;
}

export default PageWordsStorage;
