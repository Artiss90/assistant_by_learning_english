import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
;


const StackBtn = function({array, onClick}) {
    return ( <div>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
        {array.map( item => <Button variant="outlined" onClick={onClick} key={item}>{item}</Button>)}
      </Stack>
    </div>)
}

export default StackBtn