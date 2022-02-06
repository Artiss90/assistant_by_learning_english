import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import style from './StackBtn.module.css';
;


const StackBtn = function({array = [], onClick}) {
    return ( <div className={style.container}>
      <Stack direction="row" justifyContent="center" alignItems="center" flexWrap="wrap" spacing={2}>
        {(array.length > 0) && array.map( item => <Button variant="outlined" onClick={onClick} key={item}>{item}</Button>)}
      </Stack>
    </div>)
}

export default StackBtn