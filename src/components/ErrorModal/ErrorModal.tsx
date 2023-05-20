import { Alert, Dialog } from '@mui/material';

export default function ErrorModal() {
  return (
    <Dialog open>
      <Alert severity='error'>Something went wrong</Alert>
    </Dialog>
  );
}
