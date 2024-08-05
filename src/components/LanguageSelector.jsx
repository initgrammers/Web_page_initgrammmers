// components/LanguageSelector.js
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Box, Button, Popover, Typography } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Menu/styles/MenuDesktop';

const LanguageSelector = () => {
  const router = useRouter();
  const [showLanguages, setShowLanguages] = useState(null);
  const open = Boolean(showLanguages);
  const currentLocale = useLocale();
  const currentPathname = usePathname();

  const handleClick = (event) => {
    setShowLanguages(event.currentTarget);
  };

  const handleClose = () => {
    setShowLanguages(null);
  };

  const changeLanguage = (newLocale) => {
    const currentSegments = currentPathname.split('/');
    const newSegments = currentSegments.map((segment) => {
      if (segment === 'es' || segment === 'en') {
        return newLocale;
      }
      return segment;
    });
    const newPathname = newSegments.join('/');
    router.replace(newPathname); 
  };

  return (
    <Box display="flex">
      <Button
        onClick={handleClick}
        color="inherit"
        endIcon={showLanguages ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      >
        <Typography sx={styles.services} variant="body2">
          {currentLocale === 'es' ? 'Español' : 'English'}
        </Typography>
      </Button>
      <Popover
        id="language-popover"
        open={open}
        anchorEl={showLanguages}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {currentLocale === 'es' ? (
          <Button
            onClick={() => changeLanguage('en')}
            sx={styles.services}
          >
            English
          </Button>
        ) : (
          <Button
            onClick={() => changeLanguage('es')}
            sx={styles.services}
          >
            Español
          </Button>
        )}
      </Popover>
    </Box>
  );
};

export default LanguageSelector;
