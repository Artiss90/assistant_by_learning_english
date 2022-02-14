import React from 'react';
import {Button} from '@mui/material';
import { createPortal } from 'react-dom';
import style from './AppearMessage.module.css'

const modalRootEl = document.querySelector('#root-modal')

function AppearMessage({ text = 'Вы уверенны?', current = '' , ok, cancel }) {
    const message = `${text} ${current}?`
    return createPortal(
        <div className={style.container}>
            <p>{message}</p>
            <div className={style.containerForButton}>
                {ok && <Button variant="contained" color="success" type="button" onClick={ok}>Да</Button>}
                {cancel && <Button variant="contained" color="error" type="button" onClick={cancel}>Нет</Button>}
            </div>
        </div>,
    modalRootEl);
}

export default AppearMessage;
