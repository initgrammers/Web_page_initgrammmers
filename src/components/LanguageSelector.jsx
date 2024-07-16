// components/LanguageSelector.js
import { useRouter } from 'next/router';
import { Button, makeStyles, Popover, Typography } from '@material-ui/core';
import styles from './Menu/styles/MenuDesktop';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(styles);

const LanguageSelector = () => {
  const router = useRouter();
  const classes = useStyles();
  const [showLanguages, setShowLanguages] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState('es');
  const { i18n } = useTranslation();
  const open = Boolean(showLanguages);

  const handleClick = (event) => {
    setShowLanguages(event.currentTarget);
  };

  const handleClose = () => {
    setShowLanguages(null);
  };

  const changeLanguage = (lang) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, []);

  return (
    <div>
      <Button
        onClick={handleClick}
        color="inherit"
        endIcon={showLanguages ? <ExpandLess /> : <ExpandMore />}
      >
        <Typography className={classes.services} variant="body2">
          {currentLanguage === 'es' ? 'Español' : 'English'}
        </Typography>
      </Button>
      <Popover
        id={'language-popover'}
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
        {currentLanguage === 'es' ? (
          <Button
            onClick={() => changeLanguage('en')}
            className={classes.services}
          >
            English
          </Button>
        ) : (
          <Button
            onClick={() => changeLanguage('es')}
            className={classes.services}
          >
            Español
          </Button>
        )}
      </Popover>
    </div>
  );
};

export default LanguageSelector;
