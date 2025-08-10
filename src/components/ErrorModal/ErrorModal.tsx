import { Alert, Dialog } from '@mui/material';

export default function ErrorModal() {
  return (
    <Dialog
      open
      maxWidth={false}
      disableScrollLock
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        '& .MuiBackdrop-root': {
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          position: 'fixed',
        },
        '& .MuiDialog-container': {
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: 2, sm: 3 },
          height: '100vh',
          width: '100vw',
          position: 'fixed',
          top: 0,
          left: 0,
          overflowX: 'hidden',
          overflowY: 'auto',
        },
        '& .MuiDialog-paper': {
          margin: 0,
          maxWidth: { xs: 'min(90vw, 320px)', sm: '400px' },
          width: { xs: 'min(90vw, 320px)', sm: '400px' },
          minWidth: 0,
          boxSizing: 'border-box',
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
        },
      }}
    >
      <Alert
        severity='error'
        sx={{
          fontSize: { xs: '0.875rem', sm: '1rem' },
          padding: { xs: 2, sm: 2.5 },
          margin: 0,
          borderRadius: 0,
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          whiteSpace: 'normal',
          display: 'block',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        Something went wrong (API Error)
      </Alert>
    </Dialog>
  );
}
