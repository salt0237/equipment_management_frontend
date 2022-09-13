import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { FlagDialogProps } from 'Components/types/FlagDialogType';

export default function FlagDialog(props:FlagDialogProps) {
  const {num} = props;

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
        id:{num}を削除します
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          本当によろしいですか？
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            後に削除履歴から復元することもできます。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>いいえ</Button>
          <Button onClick={handleClose} autoFocus>
            はい
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
