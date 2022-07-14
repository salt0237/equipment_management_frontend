import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { DialogProps } from 'Components/types/DialogType';

export default function FormDialog(props:DialogProps) {
  const { buttonName,id,textMessage ,handleOnClick} = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            autoFocus
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
}
/*
const handleOnClick = () => {
        setOpen(false);
      };

<Dialog testMessage='++++++' handleOnClick = {handleOnClick}/>
*/



/*<TextField
            autoFocus
            margin="dense"
            id= {mapid}
            label={maplabel}
            fullWidth
            variant="standard"
          />
*/

/*
<LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/dd/yyyy"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params}}
              />
              </LocalizationProvider>
*/