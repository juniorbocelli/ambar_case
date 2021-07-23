import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface IAlertDialogProps {
  id: undefined | string;
  title: string;
  content: React.ReactFragment;
  size?: 'lg' | 'md' | 'sm' | 'xl' | 'xs' | false;
  open: boolean;
  onClose: () => void;
}

export default function AlertDialog(props: IAlertDialogProps) {
  const {
    id,
    title,
    content,
    size,
    open,
    onClose
  } = props;

  const handleClose = () => {
    onClose();
  };

  return (
      <Dialog
        id={id}
        open={open}
        onClose={handleClose}
        maxWidth={size || 'sm'}
        fullWidth={true}
      >
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        <DialogContentText component="div">
          {content}
        </DialogContentText>
      </DialogContent>

      <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Fechar
          </Button>
      </DialogActions>

    </Dialog>
  );
}