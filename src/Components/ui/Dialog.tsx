import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import Calender from './Calender';

import { DialogProps } from 'Components/types/DialogType';

export default function FormDialog(props:DialogProps) {
  const { buttonName,id,textMessage ,handleOnClick,day} = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (day == "on"){
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {buttonName}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{buttonName}します</DialogTitle>
        <DialogContent>
        <Calender/>
          <DialogContentText>{textMessage}</DialogContentText>
          {id.map(([mapid,maplabel])=>(
          <TextField
            margin="dense"
            id= {mapid}
            label={maplabel}
            fullWidth
            variant="standard"
            key = {mapid} //呼び出され側でmapするとコンソール上にエラーが出るので、keyを設定して回避する。
          />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={handleOnClick}>{buttonName}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  }else{
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {buttonName}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{buttonName}します</DialogTitle>
        <DialogContent>
          <DialogContentText>{textMessage}</DialogContentText>
          {id.map(([mapid,maplabel])=>(
          <TextField
            margin="dense"
            id= {mapid}
            label={maplabel}
            fullWidth
            variant="standard"
            key = {mapid} 
          />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={handleOnClick}>{buttonName}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
          }
}
