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
        console.log("🚀 ~ file: PageWordsStorage.jsx ~ line 21 ~ onSubmit ~ words", words)
        // words.push(value.toLowerCase())
        console.log("🚀 ~ file: PageWordsStorage.jsx ~ line 21 ~ onSubmit ~ words", words)
        console.log("🚀 ~ file: PageWordsStorage.jsx ~ line 21 ~ onSubmit ~ value", value)
        setWords([...words, value])
    }
    return <div className={style.container}>
        {children}
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
        >
            <TextField id="outlined-basic" label="Введите новое слово" variant="outlined" value={value}
  onChange={handleChange}/>
            <Button variant="contained" color="success" type="submit">Добавить</Button>
        </Box>
    </div>;
}

export default PageWordsStorage;
