import React from 'react';
import PropTypes from 'prop-types';
import { Button, Link, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import styles from './styles';

const useStyles = makeStyles(styles);
const ContactUsButton = () => {
  const classes = useStyles();
  return (
    <Link target="_blank" href="https://wa.link/3vbh7y">
      <Button variant="contained" className={clsx(classes.actionButton)}>
        Contáctanos
      </Button>
    </Link>
  );
};
ContactUsButton.propTypes = {};
ContactUsButton.defaultProps = {};
export default ContactUsButton;
