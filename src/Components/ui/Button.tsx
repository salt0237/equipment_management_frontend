import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ButtonProps } from 'Components/types/ButtonType';

export default function BasicButtons(props: ButtonProps) {

    const {ButtonText ,handleOnClick} = props;

  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={handleOnClick}>{ButtonText}</Button>
    </Stack>
  );
}
