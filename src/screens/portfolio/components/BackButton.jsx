import { Box } from '@mui/material';
import React from 'react';

const BackButton = ({ setShowFrontPage, setBack }) => (
  <Box
    sx={{
      width: { xs: '50vw', sm: 'max(47.468vw, 300px)' },
      maxWidth: '900px',
      height: { xs: '53vw', sm: 'max(26.2vw, 170px)' },
      maxHeight: '490px',
      position: 'absolute',
      top: '4%',
      left: '1%',
      zIndex: 10,
      cursor: 'pointer',
      backgroundColor: 'transparent',
      color: 'transparent',
    }}
    onClick={() => {
      setTimeout(() => {
        setShowFrontPage(true);
      }, 2000);
      setBack(true);
    }}
  >
    {/* This text is transparent */}
    Back Button
  </Box>
);

export default BackButton;
