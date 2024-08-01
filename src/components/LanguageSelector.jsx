// components/LanguageSelector.js
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Popover, Typography } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';
import i18nConfig from '../../i18nConfig';
import styles from './Menu/styles/MenuDesktop';

const LanguageSelector = () => {
  const router = useRouter();
  const [showLanguages, setShowLanguages] = useState(null);
  const { i18n } = useTranslation();
  const open = Boolean(showLanguages);
  const currentLocale = i18n.language;
  const currentPathname = usePathname();

  const handleClick = (event) => {
    setShowLanguages(event.currentTarget);
  };

  const handleClose = () => {
    setShowLanguages(null);
  };

  const changeLanguage = (newLocale) => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `; expires= ${date.toUTCString()}`;
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires}:path/`;

    if (
      currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault
    ) {
      router.push(`/${newLocale}${currentPathname}`);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
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
