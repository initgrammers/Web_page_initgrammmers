import { Box } from '@mui/material';
import { useState } from 'react';

const FrontPage = ({ showFrontPage, setShowFrontPage, back, children }) => {
  const [click, setClick] = useState(false);

  const handleOnClick = () => {
    setClick(true);
    setTimeout(() => {
      setShowFrontPage(!showFrontPage);
      setClick(false);
    }, 2000);
  };

  const getClassName = () => {
    if (back) {
      return 'frontPageAnimationReverse';
    }
    if (click) {
      return 'frontPageAnimation';
    }
    return '';
  };

  return (
    <Box
      className="cover"
      sx={{
        position: 'relative',
        zIndex: 2,
      }}
    >
      <Box
        className={`frontPage ${getClassName()} `}
        sx={{
          width: { xs: '100vw', sm: '50vw' },
          maxWidth: '1920px',
          height: { xs: '55vw', sm: 'min(27.632vw, 525px)' },
          margin: 'auto',
          cursor: 'pointer',
        }}
        onClick={handleOnClick}
      >
        {children}
      </Box>
    </Box>
  );
};

export default FrontPage;
