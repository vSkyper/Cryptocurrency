import { Alert, Dialog } from '@mui/material';

export default function ErrorModal() {
  return (
    <Dialog open={true}>
      <Alert severity='error'>Something went wrong</Alert>
    </Dialog>
  );
}