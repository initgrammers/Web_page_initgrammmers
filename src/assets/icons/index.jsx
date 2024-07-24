import * as React from 'react';
import {
  Phone,
  Mail,
  Facebook,
  LinkedIn,
  Instagram,
  ExpandMore,
} from '@mui/icons-material';
import PropTypes from 'prop-types';

const IconComponent = ({ Icon, className = '' }) => <Icon className={className} />;

IconComponent.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  className: PropTypes.string,
};

export const PhoneIcon = (props) => <IconComponent Icon={Phone} {...props} />;
export const MailIcon = (props) => <IconComponent Icon={Mail} {...props} />;
export const FacebookIcon = (props) => <IconComponent Icon={Facebook} {...props} />;
export const LinkedInIcon = (props) => <IconComponent Icon={LinkedIn} {...props} />;
export const InstagramIcon = (props) => <IconComponent Icon={Instagram} {...props} />;
export const ExpandMoreIcon = (props) => <IconComponent Icon={ExpandMore} {...props} />;
