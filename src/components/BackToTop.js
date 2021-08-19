import React from 'react';
import { useScrollTrigger, Box, Fab, Zoom } from '@material-ui/core';
import { KeyboardArrowUp as KeyboardArrowUpIcon } from '@material-ui/icons';

const ScrollTop = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (e) => {
    const anchor = (e.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role='presentation'
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
};

const BackToTop = () => {
  return (
    <ScrollTop>
      <Fab color='secondary' size='small' aria-label='scroll back to top'>
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
  );
};

export default BackToTop;
